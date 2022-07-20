import React from 'react'
import { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Loading from '../Loading'
import { MdKeyboardBackspace } from 'react-icons/md'

const OrderDetail = () => {
	const [isLoading, setIsLoading] = useState(false)

	const { orderId } = useParams()
	console.log(orderId)

	return isLoading ? (
		<Loading />
	) : (
		<div className="w-full h-full md:pl-12 flex flex-col gap-5">
			<NavLink
				className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center border-2 border-slate-500 hover:bg-slate-200"
				to="/admin/user/order"
			>
				<MdKeyboardBackspace className="text-3xl" />
			</NavLink>
		</div>
	)
}

export default OrderDetail
