import { Navigate } from 'react-router-dom'
import React from 'react'
import { useStateValue } from '../context/StateProvider'

const PrivateRoute = ({ children }) => {
	const [{ user }] = useStateValue()
	return user && user.email === 'khoinguyen.030901@gmail.com' ? children : <Navigate to="/" />
}

export default PrivateRoute
