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
      batteryHealth,
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

export const topViewedProducts = async () => {
  return await client.fetch(`
  *[_type == "product"] | order(views desc)[0...5] {
    _id,
    name,
    slug,
    "image": image.asset->url,
    views,
    price
  }
`);
};

export async function incrementViews(productId: string) {
  try {
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/view`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: productId }),
    });
  } catch (error) {
    console.error("Error incrementing views:", error);
  }
}
