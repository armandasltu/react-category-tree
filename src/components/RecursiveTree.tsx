import React from "react";
import categoryList from "mocks/categoryList";
import { Category } from "types";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const RecursiveTree: React.FC = () => {
  const CategoryItem = ({ name, child }: Category) => (
    <Box ml={1}>
      {`- ${name}`}
      {child?.map((category: Category, index) => (
        <CategoryItem {...category} key={index} />
      ))}
    </Box>
  );

  return (
    <Box mt={2}>
      <Typography variant="h6" component="h2">
        Recursive list of categories:
      </Typography>
      <div>
        {categoryList.map((category: Category, index) => (
          <CategoryItem {...category} key={index} />
        ))}
      </div>
    </Box>
  );
};

export default RecursiveTree;
