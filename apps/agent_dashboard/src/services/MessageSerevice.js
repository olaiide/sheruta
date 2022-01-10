import axios from 'axios'
import Cookies from 'js-cookie'
import store from '../redux/store/store';

const API_URL = process.env.REACT_APP_API_URL;
const { user } = store.getState().auth;
export default class MessageService {
	static async sendMessage({ to,  message_html, conversation_id }) {
		const res = await axios(API_URL + `/messages`, {
			method: 'POST',
			data: {
				to,
				from: user?.id,
				message_html,
				conversation: conversation_id,
				seen: false,
				message_text: message_html
			},
			headers: {
				authorization: `Bearer ${Cookies.get('token')}`,
			},
		})

		return res
	}
}
