import React, { useState } from "react";
import RecursiveTree from "components/RecursiveTree";
import IterativeTree from "components/IterativeTree";
import {
  Box,
  Container,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";
import useCategories from "hooks/useCategories";
import { getRandomNumber } from "utils";
import { ListType } from "types";

export default function App() {
  const { actions } = useCategories();
  const [listType, setListType] = useState<ListType>(ListType.Recursive);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const [categoryName, setCategoryName] = useState<string>("");
  const [categoryParent, setCategoryParentId] = useState<number | null>(null);
  const { addCategory } = actions;

  const onCategoryAdd = (id: number | null) => {
    setCategoryParentId(id);
    setDialogOpen(true);
  };

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Category tree
        </Typography>

        <RadioGroup
          name="gender1"
          value={listType}
          onChange={(event: any) => {
            setListType(event.target.value);
          }}
        >
          <FormControlLabel
            value="recursive"
            control={<Radio />}
            label="Recursive"
          />
          <FormControlLabel
            value="iterative"
            control={<Radio />}
            label="Iterative"
          />
        </RadioGroup>
        {listType === ListType.Recursive ? (
          <RecursiveTree onCategoryAdd={onCategoryAdd} />
        ) : (
          <IterativeTree onCategoryAdd={onCategoryAdd} />
        )}
      </Box>

      <Dialog open={isDialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Add category</DialogTitle>
        <DialogContent>
          <TextField
            size="small"
            value={categoryName}
            onChange={(event: any) => setCategoryName(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            onClick={() => {
              addCategory({
                id: getRandomNumber(1000000, 9999999),
                name: categoryName,
                parentId: categoryParent,
              });
              setDialogOpen(false);
              setCategoryName("");
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
