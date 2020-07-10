import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "slices/categoriesSlice";
import { Category } from "types";
import { RootState } from "app/rootReducer";
import { nestCategories } from "utils";

const useCategories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state: RootState) =>
    nestCategories(state.categories.categories)
  );

  return {
    categories,
    actions: {
      addCategory: (category: Category) => {
        dispatch(addCategory(category));
      },
    },
  };
};

export default useCategories;
