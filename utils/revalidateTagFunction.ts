'use server';

import { revalidateTag } from 'next/cache';

export const revalidateTagFunction = (tag: string) => {
	revalidateTag(tag);
};
