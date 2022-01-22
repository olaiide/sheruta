import axios from 'axios'
import Cookies from 'js-cookie'
import { v4 as Uid } from 'uuid'

const API_URL = process.env.REACT_APP_API_URL

export default class PropertyService {
	constructor() {
		this.API_URL = process.env.REACT_APP_API_URL
		this.formatPropertyData = this.formatPropertyData.bind(this)
	}

	/**
	 * This send a new property to Sheruta API
	 * @param {Property Data} data
	 * @returns
	 */
	static async uploadProperty(data) {
		const newProp = { ...this.formatPropertyData(data) }
		console.log('SENDING --', newProp, API_URL)
		const res = await axios(API_URL + `/properties`, {
			data: newProp,
			method: 'POST',
			headers: {
				authorization: `Bearer ${Cookies.get('token')}`,
			},
		})
		return res
	}

	static formatPropertyData(data) {
		const _data = data
		return {
			..._data,
			amenities: _data.amenities.map(val => val.id),
			categorie: _data.categorie.id,
			payment_type: _data.payment_type.id,
			service: _data.service.id,
			statu: _data.service.id,
		}
	}
}
