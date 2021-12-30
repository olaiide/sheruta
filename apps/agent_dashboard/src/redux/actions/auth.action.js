import axios from 'axios'
import Cookies from 'js-cookie'

export const loginAgent = (data) => (dispatch) => {
	dispatch({
		type: 'SET_AUTH_STATE',
		payload: { loading: true, error: null },
	})
	axios(process.env.REACT_APP_API_URL + '/auth/local', {
		data,
		method: 'POST',
	})
		.then((res) => {
			// console.log('USER FOUND ---', res);
			if (
				res.data.user.role.name === 'Agent' ||
				res.data.user.role.name === 'Sheruta'
			) {
				const token = res.data.jwt
				axios(process.env.REACT_APP_API_URL + '/agents/me', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
					.then((agentData) => {
						Cookies.set('token', res.data.jwt, { expires: 7 })
						dispatch({
							type: 'SET_AUTH_STATE',
							payload: {
								user: res.data.user,
								agent: agentData.data[0],
								jwt: res.data.jwt,
								loading: false,
							},
						})
						// console.log('AGENT DATA ---', agentData)
					})
					.catch((err) => {
						console.log(err)
						dispatch({
							type: 'SET_AUTH_STATE',
							payload: { loading: false, error: null },
						})
					})
			} else {
				dispatch({
					type: 'SET_AUTH_STATE',
					payload: {
						error: "Sorry, Account doesn't belong to an agent.",
						loading: false,
					},
				})
			}
			// localStorage.setItem('auth', JSON.stringify(store.getState().auth))
		})
		.catch((err) => {
			dispatch({
				type: 'SET_AUTH_STATE',
				payload: {
					loading: false,
					error: err.response.data.message[0].messages[0].message,
				},
			})
			setTimeout(() => {
				dispatch({
					type: 'SET_AUTH_STATE',
					payload: { error: null },
				})
			}, 3000)
			console.log(err.response.data.message[0].messages[0].message)
		})
}

export const logoutAgent = () => (dispatch) => {
	console.log('bye')
	localStorage.removeItem('token')
	dispatch({
		type: 'SET_AUTH_STATE',
		payload: {
			jwt: null,
			user: null,
			agent: null,
			loading: false,
		},
	})
}
