import { Helmet } from 'react-helmet-async';

type SEOProps = {
  title: string;
  description: string;
  canonicalUrl: string;
  imageUrl?: string;
  indexable?: boolean; // Optional: defaults to true
  structuredData?: object; // Optional: JSON-LD
};

export default function SEO({
  title,
  description,
  canonicalUrl,
  imageUrl = 'https://res.cloudinary.com/dcuhpeczg/image/upload/v1749619186/products/oqynug8dvg6ydb1vxcbx.png',
  indexable = true,
  structuredData,
}: SEOProps) {
  return (
    <Helmet>
      {/* Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots: index/follow or noindex/nofollow */}
      <meta
        name="robots"
        content={indexable ? 'index, follow' : 'noindex, nofollow'}
      />

      {/* Open Graph (Facebook, LinkedIn, etc.) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Shivam Forge" />



      {/* Optional: JSON-LD structured data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
