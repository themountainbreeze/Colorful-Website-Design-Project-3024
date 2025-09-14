import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEOHead = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false
}) => {
  const location = useLocation();
  const siteUrl = 'https://themountainbreezegalle.com';
  const siteName = 'The Mountain Breeze Galle Cabanas';
  const defaultImage = `${siteUrl}/images/hero/mountain-breeze-galle-overview-landscape.jpg`;

  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Luxury Cabanas in Galle, Sri Lanka`;

  // Use provided canonicalUrl or current location pathname for proper canonical URL
  const currentPath = canonicalUrl || location.pathname;
  const fullCanonicalUrl = `${siteUrl}${currentPath}`;
  const fullOgImage = ogImage ? `${siteUrl}${ogImage}` : defaultImage;

  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Additional Meta Tags */}
      <meta name="author" content="The Mountain Breeze Galle Cabanas" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#11845B" />
      <meta name="msapplication-TileColor" content="#11845B" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      {/* Geo Tags */}
      <meta name="geo.region" content="LK-11" />
      <meta name="geo.placename" content="Galle, Sri Lanka" />
      <meta name="geo.position" content="6.0535,-80.2210" />
      <meta name="ICBM" content="6.0535,-80.2210" />

      {/* Structured Data */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((schema, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )
      )}
    </Helmet>
  );
};

export default SEOHead;
