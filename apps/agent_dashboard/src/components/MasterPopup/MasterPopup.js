import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAgentProperties } from '../../redux/actions/agent.action'
import {
	getAllAmenities,
	getAllCategories,
	getAllService,
	getAllStates,
	getAllStatus,
	getAllSubscriptions,
	paymentTypes,
} from '../../redux/actions/view.action'

export default function MasterPopup() {
	const dispatch = useDispatch()
	const { agent } = useSelector((state) => state.auth)
	useEffect(() => {
		dispatch(getAllAmenities())
		dispatch(getAllSubscriptions())
		dispatch(getAllCategories())
		dispatch(getAllStatus())
		dispatch(getAllStates())
		dispatch(paymentTypes())
		dispatch(getAllService())
	}, [])

	useEffect(() => {
		if (agent) {
			dispatch(getAgentProperties(agent?.id))
		}
	}, [])

	return <div></div>
}
