import axios from "axios";
import config from "../config/config.js";

class AuthService{
    constructor(){
        this.apiUrl=config.backendUrl + "/auth";
        this.axios=axios.create({
            baseURL:this.apiUrl,
            withCredentials:true
        }); 
    }

    signup=async({name,email,password})=>{
        try {
            const response=await this.axios.post('/register',{ name,email,password});
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    login=async({email,password})=>{
        try {
            const response=await this.axios.post('/login',{ email,password});
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    getCurrentUser=async(authtoken)=>{
        console.log(authtoken);
        try {
            const response=await this.axios.get('/me',{
                headers:{
                    Authorization:`Bearer ${authtoken}`,
                    authtoken:authtoken
                }
            });
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}

const authService=new AuthService();
export default authService;