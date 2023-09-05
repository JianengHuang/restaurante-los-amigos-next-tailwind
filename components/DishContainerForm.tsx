'use client';

import { DataContext, AddDishClickedContext } from 'context/context';
import { formData } from 'constants/formData';
import {
	ChangeEvent,
	FormEventHandler,
	useContext,
	useEffect,
	useState,
} from 'react';
import filterDish from 'utils/filterDish';
import { saveDishOnDB } from 'utils/saveOnDB';

export type UnFilteredDish = {
	dishId: number;
	name: string;
	ingredients: string;
	description: string;
	price: number;
	allergens: string;
	mightContain: string;
	category: string;
};

const DishContainerForm = () => {
	const { dishes } = useContext(DataContext);

	const [newDish, setNewDish] = useState({
		dishId: 0,
		name: '',
		ingredients: '',
		description: '',
		price: 0,
		image: '',
		mightContain: '',
		allergens: '',
		category: '',
	});

	const [savedSuccesfully, setSavedSuccesfully] = useState(false);

	const { categories } = useContext(DataContext);

	const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

	const setAddDishClicked = useContext(AddDishClickedContext);

	const [errorMessage, setErrorMessage] = useState('');

	const numberOrCommasRegex = /^[0-9,]*$/;

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
		key: keyof UnFilteredDish,
	) => {
		setNewDish({ ...newDish, [key]: event.target.value });
	};

	useEffect(() => {
		if (
			newDish.dishId !== 0 &&
			newDish.name !== '' &&
			newDish.ingredients !== '' &&
			newDish.description !== '' &&
			newDish.price !== 0 &&
			newDish.category !== '' &&
			!dishes.some((dish) => dish.dishId == newDish.dishId) &&
			!dishes.some((dish) => dish.name == newDish.name) &&
			newDish.allergens.match(numberOrCommasRegex) &&
			newDish.mightContain.match(numberOrCommasRegex)
		) {
			setIsReadyToSubmit(true);
		} else {
			setIsReadyToSubmit(false);
			if (dishes.some((dish) => dish.dishId == newDish.dishId)) {
				setErrorMessage('El id del plato ya existe');
			} else if (dishes.some((dish) => dish.name == newDish.name)) {
				setErrorMessage('El nombre del plato ya existe');
			} else if (!newDish.allergens.match(numberOrCommasRegex)) {
				setErrorMessage('Los alergenos solo pueden ser numeros o comas');
			} else if (!newDish.mightContain.match(numberOrCommasRegex)) {
				setErrorMessage('Los puede contener solo pueden ser numeros o comas');
			} else {
				setErrorMessage('');
			}
		}
	}, [newDish]);

	const handleSubmit: FormEventHandler<HTMLInputElement | HTMLFormElement> = (
		event,
	) => {
		console.log('submit');
		event.preventDefault();
		saveDishOnDB(filterDish(newDish)).then((response) => {
			if (response) {
				setSavedSuccesfully(true);
				setNewDish({
					dishId: 0,
					name: '',
					ingredients: '',
					description: '',
					price: 0,
					image: '',
					mightContain: '',
					allergens: '',
					category: '',
				});
			} else {
				setSavedSuccesfully(false);
			}
		});
	};

	const handleCancel = () => {
		setAddDishClicked(false);
	};

	return (
		<div className="flex flex-col items-center ">
			{savedSuccesfully ? (
				<div>
					<p className="text-green-500">Plato añadido correctamente</p>
				</div>
			) : (
				<span className="text-red-500">{errorMessage}</span>
			)}
			<form onSubmit={handleSubmit}>
				{formData.map((key) => (
					<div key={key.key}>
						<label className="mb-2 block text-sm font-bold text-gray-700">
							{key.name}
						</label>
						<input
							className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2
						leading-tight text-gray-700 shadow focus:outline-none"
							type={key.type}
							placeholder={key.placeholder}
							value={newDish[key.key]}
							onChange={(e) => handleChange(e, key.key)}
						/>
					</div>
				))}

				<label className="mb-2 block text-sm font-bold text-gray-700">
					Categoria
				</label>
				<select
					className="block w-full rounded-lg border border-gray-300 
						bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 
						focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 
						dark:focus:border-blue-500 dark:focus:ring-blue-500"
					onChange={(e) => handleChange(e, 'category')}
				>
					<option value="">Selecciona una categoria</option>
					{categories.map((category) => (
						<option key={category.id} value={category.category}>
							{category.category}
						</option>
					))}
				</select>

				<div className="flex items-center justify-center">
					<button
						type="submit"
						onClick={handleCancel}
						className="transition-300 m-2 rounded-lg bg-red-200 p-2 ease-in-out hover:scale-110 hover:shadow-lg"
					>
						Cancel
					</button>
					{isReadyToSubmit && (
						<input
							type="submit"
							value="Añadir"
							onSubmit={handleSubmit}
							className="transition-300 m-2 rounded-lg bg-green-200 p-2 ease-in-out hover:scale-110 hover:shadow-lg"
						/>
					)}
				</div>
			</form>
		</div>
	);
};

export default DishContainerForm;
