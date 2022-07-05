import React from 'react'

import { MdShoppingBasket } from 'react-icons/md'

import Logo from '../img/logo.png'
import Avatar from '../img/avatar.png'

export const Header = () => {
	return (
		<header className="fixed z-50 w-screen  p-6 px-16">
			{/* PC & Tablet */}
			<div className="hidden md:flex w-full h-full items-center justify-between cursor-pointer">
				<div className="flex items-center gap-2">
					<img className="w-8 object-cover" src={Logo} alt="logo" />
					<p className="text-headingColor text-xl font-bold">City</p>
				</div>

				<div className="flex gap-8 items-center">
					<ul className="flex items-center gap-8">
						<li className="text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-out">
							Home
						</li>
						<li className="text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-out">
							Menu
						</li>
						<li className="text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-out">
							About Us
						</li>
						<li className="text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-out">
							Service
						</li>
					</ul>

					<div className="relative flex items-center justify-center">
						<MdShoppingBasket className="text-textColor text-2xl cursor-pointer" />
						<div className="absolute -top-3 -right-3 w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
							<span className="text-xs text-white font-semibold">2</span>
						</div>
					</div>

					<img
						className="w-10 min-w-[40] h-10 min-h-[40] drop-shadow-xl cursor-pointer"
						src={Avatar}
						alt="avatar"
					/>
				</div>
			</div>

			{/* Mobile */}
			<div className="flex md:hidden w-full h-full"></div>
		</header>
	)
}

export default Header
