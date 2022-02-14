import axios from "axios"
import MessageService from "../../services/MessageSerevice"



export const getAllConversations = (user_id) => async dispatch => {
    try {
        const res = await MessageService.getUserConversations(user_id)
        console.log(res)
        dispatch({
            type: 'SET_MESSAGE_STATE',
            payload: {
                conversations: res
            }
        })
    } catch (error) {
        return Promise.reject(error)
    }
}