import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllSubscriptions } from '../../redux/actions/view.action'

export default function MasterPopup() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllSubscriptions())
    },[])

    return (
        <div>
            
        </div>
    )
}
