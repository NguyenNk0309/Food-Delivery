import React from 'react'
import NotFoundImg from '../img/notFound.jpg'

const NotFound = () => {
	return (
		<div className="w-full h-full flex items-center justify-center">
			<img className="w-[70%]" src={NotFoundImg} alt="notFound" />
		</div>
	)
}

export default NotFound
