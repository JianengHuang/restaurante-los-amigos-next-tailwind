import { Category } from 'types/Category';

type Props = {
	category: Category;
};

const CategoryContainer = ({ category }: Props) => {
	return (
		<div className="flex justify-center">
			<div className="mx-10 my-1 w-80 max-w-xl select-none rounded-lg bg-orange-200 p-2 capitalize">
				{category.category}
			</div>
		</div>
	);
};

export default CategoryContainer;
