import React from "react";
import categoryList from "mocks/categoryList";
import { Category, CategoryWithDepth } from "types";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const IterativeTree: React.FC = () => {
  function* processData(category: Category[], depth = 0): any {
    if (!category) {
      return;
    }
    for (let i = 0; i < category.length; i++) {
      const { name, child } = category[i];
      yield { name, depth };
      if (child) {
        yield* processData(child, ++depth);
      }
    }
  }

  const getCategoryTree = () => {
    const resultTree = [];
    let iterator = processData(categoryList);
    let result = iterator.next();
    resultTree.push(result.value);

    while (!result.done) {
      result = iterator.next();
      result.value && resultTree.push(result.value);
    }

    return resultTree;
  };

  const CategoryItem = ({ name, depth }: CategoryWithDepth) => (
    <Box ml={depth}>{`- ${name}`}</Box>
  );

  return (
    <Box mt={2}>
      <Typography variant="h6" component="h2">
        Iterative list of categories:
      </Typography>
      <div>
        {getCategoryTree().map((category: CategoryWithDepth, index) => (
          <CategoryItem {...category} key={index} />
        ))}
      </div>
    </Box>
  );
};

export default IterativeTree;
