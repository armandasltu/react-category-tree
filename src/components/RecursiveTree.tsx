import React from "react";
import { Category } from "types";
import { Typography, Box, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import useCategories from "hooks/useCategories";

type RecursiveTreeProps = {
  onCategoryAdd: (id: number | null) => void;
};

const RecursiveTree: React.FC<RecursiveTreeProps> = ({ onCategoryAdd }) => {
  const { categories } = useCategories();

  const CategoryItem = ({ id, name, child }: Category) => {
    return (
      <Box ml={1}>
        {`- ${name}`}
        <IconButton
          size="small"
          onClick={() => {
            onCategoryAdd(id);
          }}
        >
          <AddIcon fontSize="small" />
        </IconButton>
        {child?.map((category: Category, index) => (
          <CategoryItem {...category} key={index} />
        ))}
      </Box>
    );
  };

  return (
    <Box mt={2}>
      <Typography variant="h6" component="h2">
        Recursive list of categories:
      </Typography>
      <div>
        {categories.map((category: Category, index) => (
          <CategoryItem {...category} key={index} />
        ))}
      </div>
    </Box>
  );
};

export default RecursiveTree;
