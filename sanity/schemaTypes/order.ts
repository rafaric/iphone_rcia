const order = {
  name: "order",
  title: "Orden",
  type: "document",
  fields: [
    { name: "buyerName", title: "Nombre", type: "string" },
    { name: "buyerEmail", title: "Email", type: "string" },
    { name: "deliveryMethod", title: "Entrega", type: "string" },
    {
      name: "items",
      title: "Productos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "model", title: "Modelo", type: "string" },
            { name: "storage", title: "Almacenamiento", type: "string" },
            { name: "price", title: "Precio", type: "number" },
            { name: "slug", title: "Slug", type: "string" },
          ],
        },
      ],
    },
    { name: "total", title: "Total", type: "number" },
    {
      name: "status",
      title: "Estado",
      type: "string",
      options: { list: ["pendiente", "procesado", "cancelado"] },
    },
    { name: "createdAt", title: "Fecha", type: "datetime" },
  ],
};
export default order;
