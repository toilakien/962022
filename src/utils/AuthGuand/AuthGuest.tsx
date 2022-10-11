import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthGuest = ({ children }: { children: any }) => {
    const navigate = useNavigate();
    const status = true;
    useEffect(() => {
        if (status) {
            navigate("/Home")
        }
    })
    return children;
}

export default AuthGuest;