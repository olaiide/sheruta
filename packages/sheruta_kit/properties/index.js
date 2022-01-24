import Global from "../Global"

export class PropertyKit {
	/**
	 * This is an API call to delete agent apartment
	 * @param {number} property_id
	 * @param {string} agent_token
	 * @returns Deleted apartment with 200 status
	 */
	static async deleteProperty(property_id, agent_token) {
		const res = await fetch(Global.API_URL + `/properties/${property_id}`, {
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${agent_token}`,
			},
		})
		return res
	}
}

