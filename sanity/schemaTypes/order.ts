import { defineField, defineType, Rule } from "sanity";

export const order = defineType({
  name: "order",
  type: "document",
  title: "Orden",

  fields: [
    defineField({
      name: "buyerName",
      type: "string",
      title: "Nombre del comprador",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "buyerEmail",
      type: "string",
      title: "Email del comprador",
      validation: (Rule) => Rule.required().email(),
    }),

    defineField({
      name: "deliveryMethod",
      type: "string",
      title: "Método de entrega",
      options: {
        list: [
          { title: "Retiro en tienda", value: "pickup" },
          { title: "Envío a domicilio", value: "delivery" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "shippingDetails",
      type: "object",
      title: "Datos de envío",
      hidden: ({ parent }: { parent?: { deliveryMethod?: string } }) =>
        parent?.deliveryMethod !== "delivery",
      fields: [
        defineField({
          name: "fullName",
          type: "string",
          title: "Nombre completo",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "address",
          type: "string",
          title: "Dirección",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "city",
          type: "string",
          title: "Ciudad",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "postalCode",
          type: "string",
          title: "Código postal",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: "items",
      type: "array",
      title: "Productos",
      of: [
        defineField({
          type: "object",
          name: "orderItem",
          title: "Producto",
          fields: [
            defineField({ name: "model", type: "string", title: "Modelo" }),
            defineField({
              name: "storage",
              type: "string",
              title: "Almacenamiento",
            }),
            defineField({ name: "price", type: "number", title: "Precio" }),
            defineField({ name: "slug", type: "string", title: "Slug" }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: "total",
      type: "number",
      title: "Total",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "status",
      type: "string",
      title: "Estado",
      initialValue: "pendiente",
      readOnly: true,
    }),

    defineField({
      name: "createdAt",
      type: "datetime",
      title: "Fecha de creación",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
});
