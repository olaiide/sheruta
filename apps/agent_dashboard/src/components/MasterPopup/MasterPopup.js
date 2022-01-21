import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllAmenities, getAllCategories, getAllStates, getAllStatus, getAllSubscriptions, paymentTypes } from '../../redux/actions/view.action'

export default function MasterPopup() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllAmenities())
        dispatch(getAllSubscriptions())
        dispatch(getAllCategories())
        dispatch(getAllStatus())
        dispatch(getAllStates())
        dispatch(paymentTypes())
    },[])

    return (
        <div>
            
        </div>
    )
}
