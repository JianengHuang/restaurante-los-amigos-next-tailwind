import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import { Dispatch, SetStateAction } from 'react';
import { Dish } from 'types/Dish';
import DishContainerClient from './DishContainerClient';

type Props = {
	dishes: Dish[];
	setDishes: Dispatch<SetStateAction<Dish[]>>;
	originalDishes: Dish[];
	setOriginalDishes: Dispatch<SetStateAction<Dish[]>>;
};

const DraggableContainerDish = ({ dishes, setDishes }: Props) => {
	const onDragEnd = (result: DropResult) => {
		const { destination, source } = result;
		if (!destination) return;
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return;

		const newDishes = [...dishes];
		newDishes.splice(source.index, 1);
		newDishes.splice(destination.index, 0, dishes[source.index]);

		setDishes(newDishes);
	};

	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="category">
					{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{dishes.map((dish, index) => (
								<Draggable key={dish.id} draggableId={dish.id} index={index}>
									{(provided) => (
										<div
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
										>
											<DishContainerClient dish={dish} />
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
			{/* {dishesModified && (
				<div className="mt-6 flex w-full justify-center">
					<Button
						text="Guardar"
						color="bg-green-200"
						fontSize="text-3xl"
						onClick={handleSubmit}
					/>
				</div>
			)} */}
		</>
	);
};

export default DraggableContainerDish;
