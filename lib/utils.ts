import { client } from "@/sanity/lib/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetchGroupedProducts() {
  return await client.fetch(`
    *[_type == "product"]{
      _id,
      name,
      price,
      slug,
      "image": image.asset->url,
      category->{title, emoji},
      condition->{label, emoji}
    }
  `);
}
