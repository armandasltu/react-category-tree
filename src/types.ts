export type Category = {
  name: string;
  child?: Category[];
};

export type CategoryWithDepth = {
  name: string;
  depth: number;
};
