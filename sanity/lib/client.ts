import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function createOrder(data: {
  buyerName: string;
  buyerEmail: string;
  deliveryMethod: string;
  items: { model: string; storage: string; price: number; slug: string }[];
  total: number;
}) {
  return await client.create({
    _type: "order",
    ...data,
    status: "pendiente",
    createdAt: new Date().toISOString(),
  });
}
