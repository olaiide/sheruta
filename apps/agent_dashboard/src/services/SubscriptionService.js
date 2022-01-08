import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL;

export default class SubscriptionService {
    static async getAllActiveSubs() {
       const res = await axios(API_URL + `/transactions/?status=success`)
       return res;
    }
}