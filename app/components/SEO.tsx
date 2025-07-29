type SEOProps = {
  title: string;
  description: string;
  url?: string;
  image?: string;
};

export default function SEO({
  title,
  description,
  url = "https://iphonercia.com", // URL base de tu proyecto
  image = "/icons/iphoneRcia-icon.png", // Imagen social por defecto
}: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
