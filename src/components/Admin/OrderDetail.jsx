import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Loading from '../Loading'
import { MdKeyboardBackspace } from 'react-icons/md'
import { getDoc, doc } from 'firebase/firestore'
import { firestore } from '../../firebase.config.js'

const OrderDetail = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState({})

	const { orderId } = useParams()

	async function fetchData() {
		const docRef = doc(firestore, 'carts', orderId)
		const docSnap = await getDoc(docRef)
		if (docSnap.exists()) {
			setData(docSnap.data())
			setIsLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

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
			<div className="flex flex-col gap-4">
				<div className="bg-slate-300 p-3 flex items-center gap-5">1</div>
			</div>
		</div>
	)
}

export default OrderDetail
