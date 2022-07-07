import React from 'react'
import { NavLink } from 'react-router-dom'

import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import { heroData } from '../utils/data'

export const Home = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-full">
			<div className="py-2 flex flex-col items-start justify-center gap-6">
				<div className="flex items-center gap-2 bg-orange-100 px-4 py-1 rounded-full drop-shadow-xl">
					<p className="text-base text-orange-500 font-semibold">Bike Delivery</p>
					<div className="w-7 h-7 bg-white rounded-full overflow-hidden drop-shadow-xl">
						<img
							className="w-full h-full object-contain"
							src={Delivery}
							alt="delivery"
						/>
					</div>
				</div>

				<p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
					The Fastest Delivery In{' '}
					<span className="text-orange-600 text-[3rem] lg:text-[5rem]">Your City</span>
				</p>

				<p className="text-base lg:text-lg text-textColor text-justify md:text-left md:w-[80%]">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sequi laborum
					incidunt repellendus omnis? Alias commodi sit pariatur? Sint quos laudantium
					dolore? Ipsa totam illum tempore non et officiis? Temporibus?
				</p>

				<NavLink
					to="/menu"
					className="text-center bg-gradient-to-br from-orange-300 to-orange-500 w-full px-4 py-2 rounded-lg hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 drop-shadow-md transition-all duration-100 ease-in-out md:w-auto"
				>
					Order Now
				</NavLink>
			</div>
			<div className="relative py-2 flex items-center">
				<img
					className="ml-auto h-420 w-full md:w-auto md:h-auto"
					src={HeroBg}
					alt="heroBg"
				/>
				<div className="absolute top-0 left-0 flex items-center justify-center w-full h-full py-4 xl:px-20 2xl:px-40 flex-wrap gap-4">
					{heroData.map((data) => (
						<div
							className="p-4 bg-cardOverlay backdrop-blur-md flex flex-col items-center justify-center rounded-md drop-shadow-lg"
							key={data.id}
						>
							<img
								className="w-20 h-20 -mt-10 lg:w-40 lg:-mt-20 lg:h-40"
								src={data.imageSrc}
								alt={data.alt}
							/>
							<p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
								{data.name}
							</p>
							<p className="text-[12px] lg:text-sm text-center font-semibold text-lightTextGray my-1 lg:my-3">
								{data.decp}
							</p>
							<p className="text-sm font-semibold text-headingColor">
								<span className="text-sm text-red-600">$</span>
								{data.price}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Home
