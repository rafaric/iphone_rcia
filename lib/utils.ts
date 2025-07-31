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
      model,
      color,
      storage,
      slug,
      "image": image.asset->url,
      category->{title, emoji},
      condition->{label, emoji}
    }
  `);
}

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "product" && defined(slug.current)][]{ "slug": slug.current }`
  );
  return slugs.map(({ slug }: { slug: string }) => ({ slug }));
}
