import React from 'react'
import { Navigate } from 'react-router-dom'

const IsLoggedIn = ({children}) => {
    return localStorage.getItem("authtoken") ? children : <Navigate to="/signin" />
}

export default IsLoggedIn