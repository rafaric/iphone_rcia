import { defineField } from "sanity";
const product = {
  name: "product",
  type: "document",
  title: "Producto",
  fields: [
    { name: "name", type: "string", title: "Nombre" },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
    },
    { name: "image", type: "image", title: "Imagen" },
    { name: "price", type: "number", title: "Precio" },
    { name: "description", type: "text", title: "Descripción" },
    { name: "featured", type: "boolean", title: "Destacado" },
    {
      name: "condition",
      type: "string",
      title: "Condición",
      options: {
        list: ["Nuevo", "Usado", "Reacondicionado"],
      },
    },
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      title: "Categoría",
    }),
    defineField({
      name: "condition",
      type: "reference",
      to: [{ type: "condition" }],
      title: "Condición",
    }),
  ],
};

export default product;
