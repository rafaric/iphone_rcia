import { defineField } from "sanity";

const product = {
  name: "product",
  type: "document",
  title: "Producto",
  fields: [
    defineField({ name: "name", type: "string", title: "Nombre" }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 },
    }),
    defineField({ name: "image", type: "image", title: "Imagen" }),
    defineField({ name: "price", type: "number", title: "Precio" }),
    defineField({ name: "description", type: "text", title: "Descripción" }),
    defineField({ name: "featured", type: "boolean", title: "Destacado" }),
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
    defineField({ name: "model", type: "string", title: "Modelo" }), // ej: iPhone 12 Pro
    defineField({ name: "storage", type: "string", title: "Almacenamiento" }), // ej: 128GB
    defineField({ name: "color", type: "string", title: "Color" }), // ej: Grafito
    defineField({
      name: "batteryHealth",
      type: "number",
      title: "Salud de batería (%)",
    }), // para usados
    defineField({
      name: "includesBox",
      type: "boolean",
      title: "Incluye caja",
    }),
    defineField({
      name: "includesCharger",
      type: "boolean",
      title: "Incluye cargador",
    }),
    defineField({ name: "inStock", type: "boolean", title: "Disponible" }),
  ],
};

export default product;
