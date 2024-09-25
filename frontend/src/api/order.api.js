import axios from "axios";
import config from "../config/config.js";

class OrderService {
    constructor() {
        this.apiUrl = config.backendUrl + "/order";
        this.axios = axios.create({
            baseURL: this.apiUrl,
            withCredentials: true,
        });
    }
    createOrder = async (order) => {
        try {
            const response = await this.axios.post("", order);
            return response;
        } catch (error) {
            console.error(error);
        }
    };

    getCurrentUserOrders = async () => {
        try {
            const response = await this.axios.get("");
            return response;
        } catch (error) {
            console.error(error);
        }
    };
}

export default new OrderService();