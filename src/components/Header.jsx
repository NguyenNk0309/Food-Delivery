import React, { useState } from 'react'
import { MdAdd, MdLogout, MdShoppingBasket } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { firebaseAuth } from '../firebase.config'
import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

export const Header = () => {
	const provider = new GoogleAuthProvider()

	const [{ user }, dispatch] = useStateValue()

	async function logIn() {
		if (user === null) {
			const {
				user: { refreshToken, providerData },
			} = await signInWithPopup(firebaseAuth, provider)
			dispatch({
				type: actionType.SET_USER,
				user: providerData[0],
			})
			localStorage.setItem('user', JSON.stringify(providerData[0]))
		} else {
			setMenuDisplay(!isMenuDisplay)
		}
	}

	function logOut() {
		setMenuDisplay(false)
		localStorage.clear()
		dispatch({
			type: actionType.SET_USER,
			user: null,
		})
	}

	document.addEventListener('mousedown', (e) => {
		if (isMenuDisplay && !e.target.closest('.icon')) {
			setMenuDisplay(false)
		}
	})

	const [isMenuDisplay, setMenuDisplay] = useState(false)

	return (
		<header className="fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 bg-primary">
			{/* PC & Tablet */}
			<div className="hidden md:flex w-full h-full items-center justify-between">
				<NavLink to="" className="flex items-center gap-2 cursor-pointer">
					<img className="w-8 object-cover" src={Logo} alt="logo" />
					<p className="text-headingColor text-xl font-bold">City</p>
				</NavLink>

				<div className="flex gap-8 items-center">
					<motion.nav
						initial={{ opacity: 0, x: -200 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -200 }}
						className="flex items-center gap-8"
					>
						<NavLink
							to=""
							style={({ isActive }) => ({
								color: isActive ? 'red' : '',
							})}
							className="text-base text-textColor hover:text-red-500 cursor-pointer duration-100 transition-all ease-out"
						>
							Home
						</NavLink>
						<NavLink
							to="menu"
							style={({ isActive }) => ({
								color: isActive ? 'red' : '',
							})}
							className="text-base text-textColor hover:text-red-500 cursor-pointer duration-100 transition-all ease-out"
						>
							Menu
						</NavLink>
						<NavLink
							to="aboutUs"
							style={({ isActive }) => ({
								color: isActive ? 'red' : '',
							})}
							className="text-base text-textColor hover:text-red-500 cursor-pointer duration-100 transition-all ease-out"
						>
							About Us
						</NavLink>
						<NavLink
							to="service"
							style={({ isActive }) => ({
								color: isActive ? 'red' : '',
							})}
							className="text-base text-textColor hover:text-red-500 cursor-pointer duration-100 transition-all ease-out"
						>
							Service
						</NavLink>
					</motion.nav>

					<div className="relative flex items-center justify-center">
						<MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
						{user && (
							<div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
								<span className="text-xs text-white font-semibold">0</span>
							</div>
						)}
					</div>

					<div className="icon relative" onClick={logIn}>
						<motion.img
							whileTap={{ scale: 0.8 }}
							className="w-10 min-w-[40] h-10 min-h-[40] drop-shadow-xl cursor-pointer rounded-full"
							src={user ? user.photoURL : Avatar}
							alt="avatar"
						/>
						{isMenuDisplay && (
							<motion.div
								initial={{ opacity: 0, scale: 0.6 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.6 }}
								className="w-52 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 "
							>
								<p className="flex items-center justify-end border-y-gray-200 border-b-[1px] px-4 py-2 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-red-500 text-base">
									<span className="text-textColor mr-2">Hello </span>{' '}
									{user.displayName}
								</p>
								{user && user.email === 'khoinguyen.030901@gmail.com' && (
									<NavLink to="admin/product/createItem">
										<p className="flex items-center justify-end gap-3 px-4 py-2 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
											Admin <MdAdd />
										</p>
									</NavLink>
								)}
								<p
									className="flex items-center justify-end gap-3 px-4 py-2 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
									onClick={logOut}
								>
									Logout <MdLogout />
								</p>
							</motion.div>
						)}
					</div>
				</div>
			</div>

			{/* Mobile */}
			<div className="flex items-center justify-between md:hidden w-full h-full">
				<div className="relative flex items-center justify-center">
					<MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
					{user && (
						<div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
							<span className="text-xs text-white font-semibold">0</span>
						</div>
					)}
				</div>

				<NavLink to="" className="flex items-center gap-2 cursor-pointer">
					<img className="w-8 object-cover" src={Logo} alt="logo" />
					<p className="text-headingColor text-xl font-bold">City</p>
				</NavLink>

				<div className="icon relative" onClick={logIn}>
					<motion.img
						whileTap={{ scale: 0.8 }}
						className="w-10 min-w-[40] h-10 min-h-[40] drop-shadow-xl cursor-pointer rounded-full"
						src={user ? user.photoURL : Avatar}
						alt="avatar"
					/>
					{isMenuDisplay && (
						<motion.div
							initial={{ opacity: 0, scale: 0.6 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.6 }}
							className="w-52 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 "
						>
							<p className="flex items-center justify-start border-y-gray-200 border-b-[1px] px-4 py-2 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-red-500 text-base">
								<span className="text-textColor mr-2">Hello </span>{' '}
								{user.displayName}
							</p>
							{user && user.email === 'khoinguyen.030901@gmail.com' && (
								<NavLink to="admin/product/createItem">
									<p className="flex items-center justify-start gap-3 px-4 py-2 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
										Admin <MdAdd />
									</p>
								</NavLink>
							)}
							<nav>
								<NavLink
									to=""
									className="flex items-center justify-start gap-3 px-4 py-2 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
								>
									Home
								</NavLink>
								<NavLink
									to="menu"
									className="flex items-center justify-start gap-3 px-4 py-2 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
								>
									Menu
								</NavLink>
								<NavLink
									to="aboutUs"
									className="flex items-center justify-start gap-3 px-4 py-2 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
								>
									About Us
								</NavLink>
								<NavLink
									to="service"
									className="flex items-center justify-start gap-3 px-4 py-2 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
								>
									Service
								</NavLink>
							</nav>
							<p
								className="flex items-center justify-start gap-3 bg-slate-200 px-4 py-2 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base"
								onClick={logOut}
							>
								Logout <MdLogout />
							</p>
						</motion.div>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
