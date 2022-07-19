import React from 'react'
import { MdSearch, MdOutlineAddToPhotos, MdAttachMoney, MdClose } from 'react-icons/md'
import { collection, getDocs, doc, deleteDoc, onSnapshot } from 'firebase/firestore'
import { firestore, storage } from '../../firebase.config.js'
import { useEffect } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Loading from '../Loading'
import ItemModifyModal from './ItemModifyModal'
import { ref, deleteObject } from 'firebase/storage'

const ConfigItem = () => {
	const [items, setItems] = useState([])
	const [searchInput, setSearchInput] = useState('')
	const [isLoading, setIsLoading] = useState(true)
	const [modalDisplay, setModalDisplay] = useState(false)
	const [data, setData] = useState({})

	async function fetchData() {
		const querySnapshot = await getDocs(collection(firestore, 'products'))
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

	async function deleteItem(dat) {
		let text = 'Are you sure to delete this item ?'
		if (window.confirm(text) === true) {
			setItems((prev) =>
				prev.filter((item) => {
					return item.id !== dat.id
				})
			)
			await deleteDoc(doc(firestore, 'products', dat.id))
			const deleteRef = ref(storage, dat.imageURL)
			deleteObject(deleteRef)
		}
	}

	function openModal(data) {
		setModalDisplay(true)
		setData(data)
		onSnapshot(doc(firestore, 'products', data.id), (doc) => {
			setItems((prev) =>
				prev.map((item) => {
					if (doc.data().id === item.id) {
						return doc.data()
					} else {
						return item
					}
				})
			)
		})
	}

	return isLoading ? (
		<Loading />
	) : (
		<>
			<div className="w-full h-full md:pl-12 flex flex-col gap-5">
				<div className="w-full md:w-[350px] py-2 border-b border-gray-300 flex items-center gap-3">
					<MdSearch className="text-xl text-gray-700 font-semibold" />
					<input
						className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none text-textColor placeholder:text-gray-400"
						id="search"
						value={searchInput}
						required
						placeholder="Search Here..."
						type="text"
						onChange={(e) => setSearchInput(e.target.value)}
					/>
					{searchInput && (
						<div
							className="text-3xl md:text-2xl cursor-pointer"
							onClick={() => setSearchInput('')}
						>
							<MdClose />
						</div>
					)}
				</div>
				<div className=" grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-cols-1 gap-4">
					<NavLink to="/admin/product/createItem">
						<div className="flex items-center justify-center h-[450px] bg-white rounded-lg shadow-lg p-4 cursor-pointer">
							<MdOutlineAddToPhotos className="text-5xl" />
						</div>
					</NavLink>
					{items
						.filter((val) => {
							if (searchInput === '') {
								return val
							} else if (
								val.title.toLowerCase().includes(searchInput.toLowerCase()) ||
								val.category.toLowerCase().includes(searchInput.toLowerCase()) ||
								val.calories.toLowerCase().includes(searchInput.toLowerCase()) ||
								val.price.toLowerCase().includes(searchInput.toLowerCase())
							) {
								return val
							}
						})
						.map((item) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								className="flex flex-col gap-4 items-center justify-center h-[450px] bg-white rounded-lg shadow-lg p-4"
							>
								<p className="text-xl font-semibold text-center">{item.title}</p>
								<div className="h-[150px]">
									<img
										className="object-contain w-full h-full"
										src={item.imageURL}
										alt="img"
									/>
								</div>
								<p className="text-base flex gap-2 items-center">
									Category:<span>{item.category}</span>
								</p>
								<p className="text-base flex gap-2 items-center">
									Calories:<span>{item.calories}</span>
								</p>
								<p className="text-base flex gap-2 items-center">
									Price:
									<span className="text-base flex items-center">
										{item.price}
										<MdAttachMoney />
									</span>
								</p>
								<div className="flex justify-center gap-4 md:flex-row flex-col w-full">
									<button
										className="bg-blue-300 hover:bg-blue-400 px-2 py-2 md:py-[4px] rounded-lg border-blue-500 border-2 w-full md:w-auto"
										onClick={() => openModal(item)}
									>
										Mod
									</button>
									<button
										className="bg-red-300 hover:bg-red-400 px-2 py-2 md:py-[4px] rounded-lg border-red-500 border-2 w-full md:w-auto"
										onClick={() => deleteItem(item)}
									>
										Delete
									</button>
								</div>
							</motion.div>
						))}
				</div>
			</div>
			{modalDisplay && <ItemModifyModal closeModal={setModalDisplay} data={data} />}
		</>
	)
}

export default ConfigItem
