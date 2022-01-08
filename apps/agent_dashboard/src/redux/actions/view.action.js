import axios from 'axios'
import SubscriptionService from '../../services/SubscriptionService'

export const getAllCategories = () => (dispatch) => {
	axios(process.env.REACT_APP_API_URL + '/categories')
		.then((res) => {
			console.log(res)
			dispatch({
				type: 'SET_VIEW_STATE',
				payload: {
					categories: res.data,
				},
			})
		})
		.catch((err) => {
			console.log('error ---', err)
		})
}

export const getAllStatus = () => (dispatch) => {
	axios(process.env.REACT_APP_API_URL + '/status')
		.then((res) => {
			console.log(res)
			dispatch({
				type: 'SET_VIEW_STATE',
				status: res.data,
			})
		})
		.catch((err) => {
			console.log(err)
		})
}

export const getAllAmenities = () => (dispatch) => {
	axios(process.env.REACT_APP_API_URL + '/amenities')
		.then((res) => {
			console.log(res)
			dispatch({
				type: 'SET_VIEW_STATE',
				amenities: res.data,
			})
		})
		.catch((err) => {
			console.log(err)
		})
}
export const getAllStates = () => (dispatch) => {
	axios(process.env.REACT_APP_API_URL + '/states')
		.then((res) => {
			console.log('States --', res)
			dispatch({
				type: 'SET_VIEW_STATE',
				states: res.data,
			})
		})
		.catch((err) => {
			console.log(err)
		})
}

export const getAllSubscriptions = () => async (dispatch) => {
	try {
		const res = await SubscriptionService.getAllActiveSubs();
        dispatch({
            type: 'SET_VIEW_STATE',
            payload: {
                subscriptions: res.data
            }
        })
	} catch (error) {
        return Promise.reject(error);
    }
}
