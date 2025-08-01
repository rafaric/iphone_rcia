import { type SchemaTypeDefinition } from "sanity";
import product from "./product";
import category from "./category";
import condition from "./condition";
import order from "./order";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, condition, order],
};
