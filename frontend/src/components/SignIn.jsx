import React, { useState } from 'react'
import { sofa } from '../constants'
import authService from '../api/auth.api.js'
import { login, setUser } from '../store/authSlice.js'
import { setUserId } from '../store/cartSlice.js'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
   
    const navigate=useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await authService.login({ email, password });
            if (response) {
                dispatch(login(response.data))
                const currentUser = await authService.getCurrentUser(response.data.authtoken);
                console.log(currentUser.data.user)
                if (currentUser) {
                    dispatch(setUser(currentUser.data.user))
                    dispatch(setUserId(currentUser.data.user._id))
                    localStorage.setItem("authtoken", response.data.authtoken)
                    navigate("/")
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
                <h1 className="text-3xl lg:text-4xl font-bold mb-2">Sign In</h1>
                <h4 className="text-sm mb-6">
                    Don't have an account?{" "}
                    <span className="text-green-500 cursor-pointer">Sign up</span>
                </h4>
                <form className="space-y-4" onSubmit={(e) => handleSubmit(e)} >
                    <div>
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border-b border-gray-600 p-3 placeholder-gray-600 focus:outline-none focus:border-black"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border-b border-gray-600 p-3  placeholder-gray-600  focus:outline-none focus:border-black"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                                className="mr-2"
                            />
                            <span className="text-sm">Remember Me</span>
                        </div>
                        <span className="text-black font-semibold">Forgot Password?</span>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition duration-200"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn
