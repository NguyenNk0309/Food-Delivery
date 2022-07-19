import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from '../components/Admin/Sidebar'
import CreateItem from '../components/Admin/CreateItem'
import NotFound from './NotFound'
import ConfigItem from '../components/Admin/ConfigItem'

const Admin = () => {
	return (
		<div className="w-full flex">
			<Sidebar />
			<div className="flex items-center justify-center flex-grow">
				<Routes>
					<Route path="product/createItem" element={<CreateItem />} />
					<Route path="product/manage" element={<ConfigItem />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}

export default Admin
