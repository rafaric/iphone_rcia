import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

type OrderItem = {
  model: string;
  storage: string;
  price: number;
  slug: string;
};

type ShippingDetails = {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
};

type OrderPayload = {
  buyerName: string;
  buyerEmail: string;
  deliveryMethod: "pickup" | "delivery";
  items: OrderItem[];
  total: number;
  shippingDetails?: ShippingDetails;
};

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function createOrder(data: OrderPayload) {
  try {
    if (data.deliveryMethod === "delivery" && !data.shippingDetails) {
      throw new Error(
        "Faltan los datos de envío para una orden con entrega a domicilio."
      );
    }

    return await client.create({
      _type: "order",
      ...data,
      status: "pendiente",
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error(error);
  }
}
