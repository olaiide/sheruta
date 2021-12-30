

const initialState = {
    properties: [],
    loading: false
}

const AgentReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_AGENT_STATE':
			return { ...state, ...payload }

		default:
			return state
	}
}

export default AgentReducer;
