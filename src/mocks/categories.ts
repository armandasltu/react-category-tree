import { Category } from "types";
import { getRandomNumber } from "utils";

export const generateCategories = (count = 50) => {
  const result = [];
  const availableCategories = [
    "Lorem",
    "Ipsum",
    "Dolor",
    "Orci",
    "Quis",
    "Odio",
    "Sit",
    "Amet",
    "Consectetur",
    "Adipiscing",
  ];
  for (let i = 0; i < count; i++) {
    const name =
      availableCategories[getRandomNumber(0, availableCategories.length)];
    result.push({
      id: getRandomNumber(1000000, 9999999),
      name,
      parentId: null,
    });
  }

  const categoryIds = result.map(({ id }: Category) => id);
  const rootCategoryIds = categoryIds.slice(0, 10);

  return result.map((category: Category) => ({
    ...category,
    parentId: !rootCategoryIds.includes(category.id)
      ? categoryIds[getRandomNumber(0, count)]
      : null,
  }));
};
