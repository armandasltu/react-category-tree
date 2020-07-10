import { Category } from "types";

export const getRandomNumber = (from: number, to: number) =>
    Math.floor(Math.random() * to) + from;

export const nestCategories = (
  categories: Category[],
  id: number | null = null
): Category[] =>
  categories
    .filter(({ parentId }: Category) => parentId === id)
    .map((category) => {
      return {
        ...category,
        child: nestCategories(categories, category.id),
      };
    });
