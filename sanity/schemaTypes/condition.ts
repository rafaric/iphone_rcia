// studio/sanity/schemaTypes/condition.ts
const condition = {
  name: "condition",
  type: "document",
  title: "Condición del Producto",
  fields: [
    { name: "label", type: "string", title: "Etiqueta (Ej: Nuevo)" },
    { name: "description", type: "text", title: "Descripción" },
    { name: "emoji", type: "string", title: "Emoji" }, // 🆕, 🔁, 🧹, etc.
  ],
};

export default condition;
