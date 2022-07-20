import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Loading from '../Loading'

const Order = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [sort, setSort] = useState(null)

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
			<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 grid-cols-1 gap-">
				<div className="flex flex-col gap-3 items-center justify-start h-[500px] bg-white rounded-lg shadow-lg p-4">
					<p className="text-xl font-semibold text-center">ID</p>
					<p className="text-base text-center">Date</p>
					<div className="rounded-full bg-slate-300 w-[120px] h-[120px] md:w-[200px] md:h-[200px]"></div>
					<p className="self-start text-base font-semibold">Name:</p>
					<p className="self-start text-base font-semibold">Address:</p>
					<p className="self-start text-base font-semibold">Email:</p>
					<p className="self-start text-base font-semibold">Total Price:</p>
					<div className="flex justify-center gap-4 md:flex-row flex-col w-full">
						<NavLink
							to={`4000`}
							className="bg-blue-300 hover:bg-blue-400 px-2 py-2 md:py-[4px] rounded-lg border-blue-500 border-2 w-full md:w-auto"
						>
							Detail
						</NavLink>
						<button className="bg-green-300 hover:bg-green-400 px-1 py-2 md:py-[4px] rounded-lg border-green-500 border-2 w-full md:w-auto">
							Confirm
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Order
