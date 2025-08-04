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
  const { slug } = await params;
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{ name, description }`,
    { slug: slug }
  );

  return {
    title: `${product.name} | iPhoneRcia`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [{ url: product.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0]{
      _id,
      views,
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
    { slug: slug }
  );

  if (!product) return notFound();
  await fetch(`${process.env.NEXT_PUBLIC_URL}/api/view`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: product._id }),
  });
  return <ProductDetail {...product} />;
}
