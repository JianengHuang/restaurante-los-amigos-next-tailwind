import { Category } from 'types/Category';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import CategoryContainer from './CategoryContainer';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import Button from './Button';
import { saveCategoriesOnDB } from 'utils/saveOnDB';
import { DataContext } from 'context/context';

type Props = {
	categories: Category[];
	setCategories: Dispatch<SetStateAction<Category[]>>;
};

const DraggableContainerCategory = ({ categories, setCategories }: Props) => {
	const [categoriesModified, setCategoriesModified] = useState(false);
	const [savedCorrectly, setSavedCorrectly] = useState(false);
	const [originalCategories, setOriginalCategories] = useState(
		useContext(DataContext).categories,
	);

	const onDragEnd = (result: DropResult) => {
		const { destination, source } = result;
		if (!destination) return;
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return;

		const newCategories = [...categories];
		newCategories.splice(source.index, 1);
		newCategories.splice(destination.index, 0, categories[source.index]);

		if (JSON.stringify(originalCategories) !== JSON.stringify(newCategories)) {
			setCategoriesModified(true);
		} else {
			setCategoriesModified(false);
		}

		setCategories(newCategories);
	};

	const handleSubmit = async () => {
		const filteredCategories = categories.map((category, index) => {
			return {
				category: category.category,
				priority: index,
			};
		});
		setOriginalCategories(categories);
		setCategoriesModified(false);
		setSavedCorrectly(await saveCategoriesOnDB(filteredCategories));
	};

	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<p className="py-2 text-center text-2xl">
					{savedCorrectly
						? 'Categorias guardadas correctamente'
						: 'Arrastra las categorias para cambiar su orden'}
				</p>
				<Droppable droppableId="category">
					{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{categories.map((category, index) => (
								<Draggable
									key={category.id}
									draggableId={category.id}
									index={index}
								>
									{(provided) => (
										<div
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
										>
											<CategoryContainer category={category} />
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
			{categoriesModified && (
				<div className="mt-6 flex w-full justify-center">
					<Button
						text="Guardar"
						color="bg-green-200"
						fontSize="text-3xl"
						onClick={handleSubmit}
					/>
				</div>
			)}
		</>
	);
};

export default DraggableContainerCategory;
