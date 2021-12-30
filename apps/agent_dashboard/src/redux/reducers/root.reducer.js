import { combineReducers } from "redux";
import agentReducer from "./agent.reducer";
import authReducer from "./auth.reducer";
import viewReducer from "./view.reducer";


const rootReducer = combineReducers({
    view: viewReducer,
    auth: authReducer,
    agent: agentReducer
})

export default rootReducer;