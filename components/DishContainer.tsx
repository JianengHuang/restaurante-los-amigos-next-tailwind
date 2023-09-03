import fs from 'fs';
import React from 'react';
import { Dish } from 'types/Dish';
import Image from 'next/image';

type Props = {
	dish: Dish;
};

const DishContainer = ({ dish }: Props) => {
	let dishSrc = '/images/fallback.jpg';
	if (fs.existsSync(dish.image)) {
		dishSrc = dish.image;
	}
	return (
		<div className="m-3 grid max-w-xl grid-cols-[100px_1fr] gap-4 rounded-xl bg-red-100">
			<Image
				src={dishSrc}
				alt={dish.name}
				width={100}
				height={100}
				className="m-3 rounded-xl"
				priority={false}
			/>
			<div className="mx-3 my-2 leading-8">
				<h3 className="break-words text-lg font-bold leading-6">{dish.name}</h3>
				<p>{dish.price}€</p>
				<div className="leading-5">
					<p>{dish.description}</p>
				</div>
			</div>
		</div>
	);
};

export default DishContainer;
