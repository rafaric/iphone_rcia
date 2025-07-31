import ProductDetail from "@/app/components/ProductDetail";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await client.fetch(
    `*[_type == "product" && defined(slug.current)][]{ "slug": slug.current }`
  );
  return slugs.map(({ slug }: { slug: string }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{ name, description }`,
    { slug: params?.slug }
  );

  return {
    title: `${product.name} | iPhoneRcia`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      name,
      price,
      model,
      storage,
      color,
      batteryHealth,
      includesBox,
      includesCharger,
      "image": image.asset->url,
      "condition": condition->title,
      "category": category->title,
      featured
    }`,
    { slug: params?.slug }
  );

  if (!product) return notFound();

  return <ProductDetail {...product} />;
}
