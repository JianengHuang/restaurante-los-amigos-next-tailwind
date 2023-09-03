'use client';

import Button from '@components/Button';
import { useState } from 'react';
import { Category } from 'types/Category';
import useSetCategories from 'hooks/useSetCategories';
import DraggableContainerCategory from '@components/DraggableContainerCategory';
import Image from 'next/image';
import { Dish } from 'types/Dish';
import useSetDishes from 'hooks/useSetDishes';
import AddDishModal from '@components/AddDishModal';
import { DataContext, AddDishClickedContext } from 'context/context';

const Admin = () => {
	const [categoryClicked, setCategoryClicked] = useState(false);
	const [categories, setCategories] = useState<Category[]>([]);
	const [dishes, setDishes] = useState<Dish[]>([]);
	useSetCategories(setCategories);
	useSetDishes(setDishes);
	const [addDishClicked, setAddDishClicked] = useState<boolean>(false);

	return (
		<>
			<DataContext.Provider value={{ dishes, categories }}>
				<div className="my-4 flex flex-row items-center justify-center gap-4">
					<Button
						text="Platos"
						color="bg-green-200"
						fontSize="text-3xl"
						onClick={() => {
							setCategoryClicked(false);
						}}
					/>
					<Button
						text="Categorias"
						color="bg-orange-200"
						fontSize="text-3xl"
						onClick={() => {
							setCategoryClicked(true);
						}}
					/>
				</div>
				<hr />
				<hr />
				<hr />
				<div className="flex flex-row items-center justify-center"></div>
				{!categoryClicked ? (
					<>
						<div className="sticky grid grid-cols-3">
							<div></div>
							<div></div>
							<div className="flex justify-end">
								<button
									className="z-5 m-2 flex cursor-pointer items-center rounded-lg
									bg-[#a4dc81] pr-1 text-xl transition duration-200 ease-in-out hover:scale-110"
									onClick={() => setAddDishClicked((prev) => !prev)}
								>
									<Image
										src="/icons/add-icon.svg"
										alt="add-icon"
										height="50"
										width="50"
										className="z-10"
									/>
									Añadir Plato
								</button>
							</div>
						</div>
					</>
				) : (
					<DraggableContainerCategory
						categories={categories}
						setCategories={setCategories}
					/>
				)}
				<div>
					<AddDishClickedContext.Provider value={setAddDishClicked}>
						{addDishClicked && <AddDishModal />}
					</AddDishClickedContext.Provider>
				</div>
			</DataContext.Provider>
		</>
	);
};

export default Admin;
