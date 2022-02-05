import axios from 'axios'
import AgentService from '../../services/AgentService'
import store from '../store/store'

export const getAgentProperties = (agent_id) => (dispatch) => {
	axios(
		process.env.REACT_APP_API_URL +
			'/properties/?agent=' +
			agent_id,
		{
			// headers: {
			//     Authorization:
			//         `Bearer ${store.getState().auth.jwt}`,
			// },
		}
	)
		.then((res) => {
			// console.log(res)
			dispatch({
				type: 'SET_AGENT_STATE',
				payload: {
					properties: res.data,
				},
			})
		})
		.catch((err) => {
			console.log(err)
		})
}

export const getPendingAgents = () => async dispatch => {
	try {
		const res = await AgentService.getPendingAgents()
		dispatch({
			type: 'SET_AGENT_STATE',
			payload: {
				pending_agents: res.data
			}
		})
	} catch (error) {
		return Promise.reject(error)
	}
}
