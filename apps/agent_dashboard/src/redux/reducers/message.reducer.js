const initialState = {
    conversations: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'SET_MESSAGE_STATE':
    return { ...state, ...payload }

  default:
    return state
  }
}
