import React from "react";
import { Category, CategoryWithDepth } from "types";
import Typography from "@material-ui/core/Typography";
import { Box, IconButton } from "@material-ui/core";
import useCategories from "hooks/useCategories";
import AddIcon from "@material-ui/icons/Add";

type IterativeTreeProps = {
  onCategoryAdd: (id: number | null) => void;
};

const IterativeTree: React.FC<IterativeTreeProps> = ({ onCategoryAdd }) => {
  const { categories } = useCategories();

  function* processData(category: Category[], depth = 1): any {
    if (!category) {
      return;
    }
    for (let i = 0; i < category.length; i++) {
      const { child, ...data } = category[i];
      yield { ...data, depth };
      if (child) {
        yield* processData(child, depth + 1);
      }
    }
  }

  const getCategoryTree = () => {
    const resultTree = [];
    let iterator = processData(categories);
    let result;

    do {
      result = iterator.next();
      if (!result.done) {
        resultTree.push(result.value);
      }
    } while (!result.done);

    return resultTree;
  };

  const CategoryItem = ({ id, name, depth }: CategoryWithDepth) => (
    <Box ml={depth}>
      {`- ${name}`}
      <IconButton
        size="small"
        onClick={() => {
          onCategoryAdd(id);
        }}
      >
        <AddIcon fontSize="small" />
      </IconButton>
    </Box>
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
