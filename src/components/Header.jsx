import React from 'react'

export const Header = () => {
	return (
		<div className="fixed z-50 w-screen  p-6 px-16">
			{/* PC & Tablet */}
			<div className="hidden md:flex w-full h-full"></div>

			{/* Mobile */}
			<div className="flex md:hidden w-full h-full"></div>
		</div>
	)
}

export default Header
