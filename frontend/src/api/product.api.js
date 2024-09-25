import axios from "axios";
import config from "../config/config.js";

class ProductService {
    constructor() {
        this.apiUrl = config.backendUrl + "/products";
        this.axios = axios.create({
            baseURL: this.apiUrl,
            withCredentials: true,
        });
    }

    getProducts = async () => {
        try {
            const response = await this.axios.get("");
            return response;
        } catch (error) {
            console.error(error);
        }
    }
    getProductById = async (id) => {
        try {
            const response = await this.axios.get(`/${id}`);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
    createProduct = async (product) => {
        try {
            const response = await this.axios.post("", product);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    updateProductById = async (product) => {
        try {
            const response = await this.axios.put(`/${product._id}`, product);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    deleteProductById = async (id) => {
        try {
            const response = await this.axios.delete(`/:${id}`);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}

export default new ProductService();