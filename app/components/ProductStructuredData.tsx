type ProductProps = {
  name: string;
  description: string;
  image: string;
  sku: string;
  brand: string;
  price: number;
  currency?: string;
  availability?: "InStock" | "OutOfStock" | "PreOrder";
};

export default function ProductStructuredData({
  name,
  description,
  image,
  sku,
  brand,
  price,
  currency = "ARS",
  availability = "InStock",
}: ProductProps) {
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name,
    image: [image],
    description,
    sku,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      url: "https://iphonercia.com", // URL de tu tienda o landing
      priceCurrency: currency,
      price,
      availability: `https://schema.org/${availability}`,
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
  );
}
