import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import { Header, PrivateRoute } from './components'
import { Home, Menu, CreateItem, NotFound } from './pages'

const App = () => {
	return (
		<AnimatePresence exitBeforeEnter>
			<div className="w-screen flex flex-col bg-primary min-h-screen">
				<Header />
				<main className="md:mt-[88px] mt-16 md:px-16 px-4 py-4 w-full flex flex-grow">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/menu" element={<Menu />} />
						<Route
							path="/createItem"
							element={
								<PrivateRoute>
									<CreateItem />
								</PrivateRoute>
							}
						/>
						<Route path="/*" element={<NotFound />} />
					</Routes>
				</main>
			</div>
		</AnimatePresence>
	)
}

export default App
