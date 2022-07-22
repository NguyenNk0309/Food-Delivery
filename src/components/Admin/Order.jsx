import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { collection, getDocs, doc, setDoc, onSnapshot } from 'firebase/firestore'
import { firestore } from '../../firebase.config.js'
import { motion } from 'framer-motion'
import Loading from '../Loading'

const Order = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [items, setItems] = useState([])
	const [sort, setSort] = useState('')

	async function fetchData() {
		const querySnapshot = await getDocs(collection(firestore, 'carts'))
		const arr = []
		querySnapshot.forEach((doc) => {
			arr.push(doc.data())
		})
		setItems(arr)
		setIsLoading(false)
	}

	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		switch (sort) {
			case 'time':
				setItems((prev) => {
					return prev.sort(function (a, b) {
						return parseInt(b.timeID) - parseInt(a.timeID)
					})
				})
				break
			case 'price':
				setItems((prev) => {
					return prev.sort(function (a, b) {
						return parseFloat(b.totalPrice) - parseFloat(a.totalPrice)
					})
				})
				break
		}
	}, [sort])

	function confirm(id) {
		onSnapshot(doc(firestore, 'carts', id), (doc) => {
			setItems((prev) =>
				prev.map((item) => {
					if (doc.data().cartID === item.cartID) {
						return doc.data()
					} else {
						return item
					}
				})
			)
		})
		setDoc(doc(firestore, 'carts', id), { confirm: true }, { merge: true })
	}

	return isLoading ? (
		<Loading />
	) : (
		<div className="w-full h-full md:pl-12 flex flex-col gap-5">
			<select
				name="sort"
				id="sort"
				onChange={(e) => setSort(e.target.value)}
				className="w-full md:w-[350px] py-2 border-b border-gray-300 flex items-center gap-3"
			>
				<option
					className="bg-white capitalize text-headingColor text-base border-none outline-none"
					value={null}
				>
					Sort by
				</option>
				<option
					className="bg-white capitalize text-headingColor text-base border-none outline-none"
					value="time"
				>
					Time
				</option>
				<option
					className="bg-white capitalize text-headingColor text-base border-none outline-none"
					value="price"
				>
					Price
				</option>
			</select>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4">
				{items.map((item) => {
					console.log(item)
					return (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							key={item.cartID}
							className="flex flex-col gap-3 items-center justify-start h-[550px] bg-white rounded-lg shadow-lg p-4"
						>
							<p className="text-base font-semibold text-center">{item.cartID}</p>
							<p className="text-base text-center">{item.time}</p>
							<div className="rounded-full bg-slate-300 w-[120px] h-[120px] md:w-[200px] md:h-[200px] flex items-center justify-center">
								<img
									className="w-full h-full rounded-full"
									src={item.imgURL}
									alt=""
								/>
							</div>
							<p className="self-start text-base font-semibold">
								Name:
								<span className="font-normal">
									{console.log(item.name)} {item.name}
								</span>
							</p>
							<p className="self-start text-base font-semibold">
								Address:
								<span className="font-normal"> {item.address}</span>
							</p>
							<p className="self-start text-base font-semibold">
								Email:
								<span className="font-normal"> {item.email}</span>
							</p>
							<p className="self-start text-base font-semibold">
								Total Price:{' '}
								<span className="font-normal"> {item.totalPrice}đ</span>
							</p>
							<div className="flex justify-center gap-4 md:flex-row flex-col w-full">
								<NavLink
									to={`${item.cartID}`}
									className="bg-blue-300 hover:bg-blue-400 px-2 py-2 md:py-[4px] rounded-lg border-blue-500 border-2 w-full md:w-auto text-center"
								>
									Detail
								</NavLink>
								{!item.confirm && (
									<button
										onClick={() => confirm(item.cartID)}
										className="bg-green-300 hover:bg-green-400 px-1 py-2 md:py-[4px] rounded-lg border-green-500 border-2 w-full md:w-auto"
									>
										Confirm
									</button>
								)}
							</div>
						</motion.div>
					)
				})}
			</div>
		</div>
	)
}

export default Order
