export type Category = {
  id: number;
  name: string;
  parentId: number | null;
  child?: Category[];
};

export type CategoryWithDepth = {
  depth: number;
} & Category;

export enum ListType {
    Recursive = "recursive",
    Iterative = "iterative",
}