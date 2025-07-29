// studio/sanity/schemaTypes/category.ts
const category = {
  name: "category",
  type: "document",
  title: "Categoría de Producto",
  fields: [
    { name: "title", type: "string", title: "Título" },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "title", maxLength: 96 },
    },
    { name: "description", type: "text", title: "Descripción" },
    { name: "emoji", type: "string", title: "Emoji" }, // Para visualización rápida con icono
  ],
};

export default category;
