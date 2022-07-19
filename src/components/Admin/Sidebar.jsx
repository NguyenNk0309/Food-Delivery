import React from 'react'
import { NavLink } from 'react-router-dom'
import {
	MdSupervisorAccount,
	MdMiscellaneousServices,
	MdShoppingCart,
	MdCreate,
	MdMenu,
	MdClose,
} from 'react-icons/md'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Sidebar = () => {
	const [subMenu, setSubMenu] = useState(false)

	function closeSubMenu(e) {
		e.stopPropagation()
		return setSubMenu(false)
	}

	document.addEventListener('mousedown', (e) => {
		if (subMenu && !e.target.closest('.sub-menu')) {
			setSubMenu(false)
		}
	})

	return (
		<div>
			{/* PC & Tablet */}
			<div className="md:block hidden h-full border-r-2 py-4 px-4">
				<ul>
					<li className="mb-5">
						<span className="text-lg font-semibold">Product</span>
						<nav className="flex flex-col gap-2 text-gray-500">
							<NavLink
								className="text-base ml-4 flex gap-2 items-center"
								to="product/createItem"
								style={({ isActive }) => ({
									color: isActive ? 'red' : '',
								})}
							>
								<MdCreate className="text-2xl" />
								<span>Create</span>
							</NavLink>
							<NavLink
								className="text-base ml-4 flex gap-2 items-center"
								to="product/manage"
								style={({ isActive }) => ({
									color: isActive ? 'red' : '',
								})}
							>
								<MdMiscellaneousServices className="text-2xl" />
								<span>Management</span>
							</NavLink>
						</nav>
					</li>
					<li className="mb-5">
						<span className="text-lg font-semibold">User</span>
						<nav className="flex flex-col gap-2 text-gray-500">
							<NavLink
								className="text-base ml-4 flex gap-2 items-center"
								to="user/account"
								style={({ isActive }) => ({
									color: isActive ? 'red' : '',
								})}
							>
								<MdSupervisorAccount className="text-2xl" />
								<span>Account</span>
							</NavLink>
							<NavLink
								className="text-base ml-4 flex gap-2 items-center"
								to="user/order"
								style={({ isActive }) => ({
									color: isActive ? 'red' : '',
								})}
							>
								<MdShoppingCart className="text-2xl" />
								<span>Order</span>
							</NavLink>
						</nav>
					</li>
				</ul>
			</div>

			{/* Mobile */}
			<div
				className="flex items-center justify-center md:hidden w-[50px] h-[50px] bg-red-400 border-2 border-red-600 rounded-full fixed bottom-6 left-6"
				onClick={() => setSubMenu(true)}
			>
				<MdMenu className="text-3xl text-white" />
				{subMenu && (
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
						className="sub-menu absolute -bottom-1 -left-1 bg-white h-[300px] w-[200px] rounded-lg origin-bottom-left shadow-md flex flex-col"
					>
						<div className="ml-auto pt-2 pr-2" onClick={closeSubMenu}>
							<MdClose className="text-3xl text-red-400" />
						</div>
						<div className="p-5">
							<ul>
								<li className="mb-5">
									<span className="text-lg font-semibold">Product</span>
									<nav className="flex flex-col gap-2 text-gray-500">
										<NavLink
											className="text-base ml-4 flex gap-2 items-center"
											to="product/createItem"
											style={({ isActive }) => ({
												color: isActive ? 'red' : '',
											})}
										>
											<MdCreate className="text-2xl" />
											<span>Create</span>
										</NavLink>
										<NavLink
											className="text-base ml-4 flex gap-2 items-center"
											to="product/manage"
											style={({ isActive }) => ({
												color: isActive ? 'red' : '',
											})}
										>
											<MdMiscellaneousServices className="text-2xl" />
											<span>Management</span>
										</NavLink>
									</nav>
								</li>
								<li className="mb-5">
									<span className="text-lg font-semibold">User</span>
									<nav className="flex flex-col gap-2 text-gray-500">
										<NavLink
											className="text-base ml-4 flex gap-2 items-center"
											to="user/account"
											style={({ isActive }) => ({
												color: isActive ? 'red' : '',
											})}
										>
											<MdSupervisorAccount className="text-2xl" />
											<span>Account</span>
										</NavLink>
										<NavLink
											className="text-base ml-4 flex gap-2 items-center"
											to="user/order"
											style={({ isActive }) => ({
												color: isActive ? 'red' : '',
											})}
										>
											<MdShoppingCart className="text-2xl" />
											<span>Order</span>
										</NavLink>
									</nav>
								</li>
							</ul>
						</div>
					</motion.div>
				)}
			</div>
		</div>
	)
}

export default Sidebar
