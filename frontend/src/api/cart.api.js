import axios from "axios";
import config from "../config/config.js";

class CartService {
    constructor() {
        this.apiUrl = config.backendUrl + "/cart";
        this.axios = axios.create({
            baseURL: this.apiUrl,
            withCredentials: true
        });
    }

    getCurrentUserCart = async (authtoken) => {
        try {
            const response = await this.axios.get("",{
                headers:{
                    Authorization:`Bearer ${authtoken}`,
                    authtoken:authtoken
                }
            });
            return response;
        } catch (error) {
            console.error(error);
        }
    };

    createCurrentUserCart = async (cart,authtoken) => {
        try {
            const response = await this.axios.post("", cart,{
                headers:{
                    Authorization:`Bearer ${authtoken}`,
                    authtoken:authtoken
                }
            });
            return response;    
        } catch (error) {
            console.error(error);
        }
    };

    updateCurrentUserCart = async (cart,authtoken) => {
        try {
            const response = await this.axios.put("", cart,{
                headers:{
                    Authorization:`Bearer ${authtoken}`,
                    authtoken:authtoken
                }
            });
            return response;
        } catch (error) {
            console.error(error);
        }
    };

    deleteCurrentUserCart = async () => {
        try {
            const response = await this.axios.delete("",{
                headers:{
                    Authorization:`Bearer ${authtoken}`,
                    authtoken:authtoken
                }
            });
            return response;
        } catch (error) {
            console.error(error);
        }
    };
}

export default new CartService()