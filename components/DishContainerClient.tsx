'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { Dish } from 'types/Dish';
import StarIcon from './StarIcon';
import Button from './Button';
import { saveDishOnDB } from 'utils/saveOnDB';

type Props = {
	dish: Dish;
};

const DishContainerClient = ({ dish }: Props) => {
	const color = dish.isRecommended ? '#ED8A19' : '#fff';
	const [newDish, setNewDish] = useState<Dish>(dish);

	useEffect(() => {
		console.log(newDish);
	}, [newDish]);

	const handleEditEverything = () => {
		console.log('Edit everything');
	};

	const cancelChanges = () => {
		setNewDish(dish);
	};

	const saveChanges = () => {
		saveDishOnDB(newDish);
	};

	return (
		<div className="m-3 rounded-xl bg-red-100">
			<div className="grid max-w-xl grid-cols-[1fr_100px] gap-4">
				<div className="mx-3 my-2 leading-8">
					<textarea
						className="bg-transparent text-lg font-bold outline-none"
						defaultValue={dish.name}
						value={newDish.name}
						onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
							setNewDish({ ...newDish, name: e.target.value });
						}}
					/>
					<div>
						<p>{dish.price}€</p>
					</div>
					<div className="leading-5">
						<p>{dish.description}</p>
					</div>
				</div>
				<div>
					<div className="m-2 flex justify-end">
						<StarIcon color={color} height="35px" width="35px" />
					</div>
					<div className="m-2 mt-3 flex">
						<Button
							text="Editar Todo"
							color="bg-green-100"
							fontSize="text-xl"
							onClick={handleEditEverything}
						/>
					</div>
				</div>
			</div>
			<hr />
			<hr />
			<hr />
			<div className="m-4 flex flex-row items-center justify-center gap-2">
				<Button
					text="Cancelar"
					color="bg-red-200"
					fontSize="2xl"
					onClick={cancelChanges}
				/>
				<Button
					text="Guardar"
					color="bg-green-200"
					fontSize="2xl"
					onClick={saveChanges}
				/>
			</div>
		</div>
	);
};

export default DishContainerClient;
