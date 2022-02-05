import axios from "axios";
import Cookies from "js-cookie";


const API_URL = process.env.REACT_APP_API_URL;
export default class {

    static async getPendingAgents(){
        const res = axios(API_URL+`/pending-agents`, {
            headers: {
                authorization: `Bearer ${Cookies.get('token')}`
            },
        })
        return res;
    }

}

