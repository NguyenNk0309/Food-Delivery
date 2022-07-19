import React from 'react'
import { motion } from 'framer-motion'
import { MdAttachMoney, MdCloudUpload, MdDelete, MdFastfood, MdFoodBank } from 'react-icons/md'
import { categories } from '../../utils/data'
import { Loading } from '../../components'

const ItemModifyModal = ({ closeModal, data }) => {
	document.addEventListener('mousedown', (e) => {
		if (!e.target.closest('.modal')) {
			closeModal(false)
		}
	})

	console.log(data)
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.2 }}
			className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center"
			style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
		>
			<div className="modal w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4 bg-white">
				<div className="w-full py-2 border-b border-gray-300 flex items-center gap-3">
					<MdFastfood className="text-xl text-gray-700" />
					<input
						type="text"
						required
						placeholder="Give me a title..."
						className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none text-textColor placeholder:text-gray-400"
					/>
				</div>
				<div className="w-full">
					<select
						name="categories"
						id="categories"
						className="w-full outline-none text-base border-b-2 bg-gray-200 p-2 rounded-md cursor-pointer"
					>
						<option
							className="bg-white capitalize text-headingColor text-base border-none outline-none"
							value={null}
						>
							Select Category
						</option>
						{categories.map((category) => (
							<option
								key={category.id}
								value={category.urlParamName}
								className="bg-white capitalize text-headingColor text-base border-none outline-none"
							>
								{category.name}
							</option>
						))}
					</select>
				</div>
				<div className="w-full h-225 md:h-420 flex items-center justify-center flex-col border-2 border-dotted border-gray-300 cursor-pointer rounded-lg">
					<Loading />
				</div>
				<div className="w-full py-2 border-b border-gray-300 flex items-center gap-3">
					<MdFoodBank className="text-xl text-gray-700" />
					<input
						type="text"
						required
						placeholder="Calories"
						className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none text-textColor placeholder:text-gray-400"
					/>
				</div>
				<div className="w-full py-2 border-b border-gray-300 flex items-center gap-3">
					<MdAttachMoney className="text-xl text-gray-700" />
					<input
						type="text"
						required
						placeholder="Price"
						className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none text-textColor placeholder:text-gray-400"
					/>
				</div>
				<div className="flex w-full items-center">
					<button className="ml-0 md:ml-auto w-full md:w-auto outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold">
						Save
					</button>
				</div>
			</div>
		</motion.div>
	)
}

export default ItemModifyModal
