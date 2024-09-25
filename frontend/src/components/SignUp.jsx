import React, { useState } from 'react'
import { sofa } from '../constants'
import authService from '../api/auth.api.js'
import { login, setUser } from '../store/authSlice.js'
import { useDispatch, useSelector } from 'react-redux'
import {setUserId} from '../store/cartSlice.js'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    const navigate=useNavigate();
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await authService.signup({ name,email, password });
            if (response) {
                dispatch(login(response.data))
                const currentUser = await authService.getCurrentUser(response.data.authtoken);
                if (currentUser) {
                    dispatch(setUser(currentUser.data));
                    dispatch(setUserId(currentUser.data._id))
                    localStorage.setItem("authtoken", response.data.authtoken);
                    navigate("/");
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex flex-col lg:flex-row h-screen">
            <div className="lg:w-1/2 w-full flex flex-col justify-around items-center bg-white p-8">
                <div className="text-5xl font-bold text-black pb-10 lg:pb-32">3legant.</div>
                <img className="w-[300px] lg:w-[450px] h-auto" src={sofa} alt="sofa" />
            </div>

            <div className="lg:w-1/2 w-full flex flex-col justify-center p-6 lg:p-16">
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">Sign up</h1>
                <h4 className="text-sm mb-6">
                    Already have an account?{" "}
                    <span className="text-green-500 cursor-pointer">Sign in</span>
                </h4>
                <form className="space-y-4" onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border-b border-gray-300 p-3 placeholder-gray-600 focus:outline-none focus:border-black"
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border-b border-gray-300 p-3 placeholder-gray-600 focus:outline-none focus:border-black"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border-b border-gray-300 p-3  placeholder-gray-600 focus:outline-none focus:border-black"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border-b border-gray-300 p-3 placeholder-gray-600  focus:outline-none focus:border-black"
                        />
                    </div>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className="mr-2"
                        />
                        <span className="text-sm">I agree with <span className="text-green-500">Privacy Policy</span> and <span className="text-green-500">Terms of Use</span></span>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-200"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
