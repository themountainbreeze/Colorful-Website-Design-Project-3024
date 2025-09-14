import React from 'react';

// Organization Schema
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "The Mountain Breeze Galle Cabanas",
  "url": "https://themountainbreezegalle.com",
  "logo": "https://themountainbreezegalle.com/images/logo/mountain-breeze-galle-cabanas-logo.png",
  "description": "Luxury cabanas in Galle, Sri Lanka offering romantic getaways with mountain views, hot tub access, and authentic Sri Lankan hospitality.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kapuhempala, Godaduwa Rd",
    "addressLocality": "Galle",
    "postalCode": "80000",
    "addressCountry": "LK"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+94775145131",
    "contactType": "customer service",
    "availableLanguage": ["English", "Sinhala"]
  },
  "sameAs": [
    "https://www.facebook.com/p/The-Mountain-Breeze-Galle-61574130654874/",
    "https://www.instagram.com/reel/DLZCtVFIfpo/",
    "https://www.tiktok.com/@themountainbreezegalle",
    "https://www.google.com/maps/search/The%20Mountain%20Breeze%20Galle?hl=en"
  ]
};

// Lodging Business Schema
export const lodgingBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "The Mountain Breeze Galle Cabanas",
  "alternateName": "Mountain Breeze Galle",
  "description": "Luxury cabanas in Galle, Sri Lanka offering romantic getaways with mountain views, hot tub access, and authentic Sri Lankan hospitality.",
  "url": "https://themountainbreezegalle.com",
  "telephone": "+94775145131",
  "email": "contact@themountainbreezegalle.com",
  "image": [
    "https://themountainbreezegalle.com/images/hero/mountain-breeze-galle-overview-landscape.jpg",
    "https://themountainbreezegalle.com/images/cabanas/luxury/mountain-breeze-galle-luxury-cabana-exterior.jpeg",
    "https://themountainbreezegalle.com/images/cabanas/supreme_deluxe/mountain-breeze-galle-supreme-deluxe-cabana-exterior.jpeg"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kapuhempala, Godaduwa Rd",
    "addressLocality": "Galle",
    "addressRegion": "Southern Province",
    "postalCode": "80000",
    "addressCountry": "LK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "6.0535",
    "longitude": "-80.2210"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free Wi-Fi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Hot tub/Jacuzzi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free parking",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Pet-friendly",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Air conditioning",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Kitchen facilities",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Garden",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Mountain view",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Private bathroom",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Daily housekeeping",
      "value": true
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "44",
    "bestRating": "5",
    "worstRating": "1"
  },
  "priceRange": "$39-$72",
  "currenciesAccepted": "USD, LKR",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "checkinTime": "14:00",
  "checkoutTime": "10:00",
  "petsAllowed": true,
  "numberOfRooms": "2",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4"
  }
};

// Review Schema Generator
export const generateReviewSchema = (reviews) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "LodgingBusiness",
    "name": "The Mountain Breeze Galle Cabanas"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": reviews[0]?.rating || 5,
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": reviews[0]?.author || "Guest"
  },
  "reviewBody": reviews[0]?.text || "Amazing experience at The Mountain Breeze Galle Cabanas."
});

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (breadcrumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": `https://themountainbreezegalle.com${crumb.url}`
  }))
});

// FAQ Schema Generator
export const generateFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Service Schema Generator
export const generateServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": service.name,
  "description": service.description,
  "provider": {
    "@type": "Organization",
    "name": "The Mountain Breeze Galle Cabanas"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Galle, Sri Lanka"
  },
  "offers": {
    "@type": "Offer",
    "price": service.price,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
});

// Local Business Schema
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Mountain Breeze Galle Cabanas",
  "image": "https://themountainbreezegalle.com/images/hero/mountain-breeze-galle-overview-landscape.jpg",
  "telephone": "+94775145131",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kapuhempala, Godaduwa Rd",
    "addressLocality": "Galle",
    "postalCode": "80000",
    "addressCountry": "LK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 6.0535,
    "longitude": -80.2210
  },
  "url": "https://themountainbreezegalle.com",
  "priceRange": "$39-$72",
  "openingHours": ["Mo-Su 00:00-23:59"]
};

// Website Schema
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The Mountain Breeze Galle Cabanas",
  "url": "https://themountainbreezegalle.com",
  "description": "Luxury cabanas in Galle, Sri Lanka offering romantic getaways with mountain views, hot tub access, and authentic Sri Lankan hospitality.",
  "publisher": {
    "@type": "Organization",
    "name": "The Mountain Breeze Galle Cabanas"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://themountainbreezegalle.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const StructuredData = ({ schema }) => {
  if (!schema) return null;
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;
