import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAgentProperties } from '../../redux/actions/agent.action'
import {
	getAllAmenities,
	getAllCategories,
	getAllNotifications,
	getAllService,
	getAllStates,
	getAllStatus,
	getAllSubscriptions,
	paymentTypes,
} from '../../redux/actions/view.action'
import Cookies from 'js-cookie'
import { logoutAgent } from '../../redux/actions/auth.action'
import { getAllConversations, getUnreadMessageCount } from '../../redux/actions/messages.action'

export default function MasterPopup() {
	const dispatch = useDispatch();
	const token = Cookies.get('token');
	const { agent, user } = useSelector((state) => state.auth)
	useEffect(() => {
		dispatch(getAllAmenities())
		dispatch(getAllSubscriptions())
		dispatch(getAllCategories())
		dispatch(getAllStatus())
		dispatch(getAllStates())
		dispatch(paymentTypes())
		dispatch(getAllService())
	}, [dispatch])

	useEffect(() => {
		if (agent) {
			dispatch(getAgentProperties(agent?.id))
			dispatch(getAllNotifications(user?.id))
			dispatch(getAllConversations(user?.id))
			dispatch(getUnreadMessageCount(user?.id))
		}else {
			localStorage.removeItem('state')
		}
	}, [agent, dispatch, user?.id]);

	useEffect(() => {
		if(!token){
			dispatch(logoutAgent())
		}
	},[dispatch, token])

	return <div></div>
}
