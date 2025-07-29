import { client } from "@/sanity/lib/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getFeaturedProducts() {
  return await client.fetch(`
    *[_type == "product" && featured == true]{
      name,
      price,
      image,
      description,
      slug
    }
  `);
}
