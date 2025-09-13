import React, { useState } from 'react';

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes,
  quality = 85,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate WebP version path
  const getWebPSrc = (originalSrc) => {
    if (!originalSrc) return '';
    const extension = originalSrc.split('.').pop();
    return originalSrc.replace(`.${extension}`, '.webp');
  };

  // Generate responsive image sizes
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc) return '';
    const extension = baseSrc.split('.').pop();
    const basePath = baseSrc.replace(`.${extension}`, '');
    
    return [
      `${basePath}-400w.${extension} 400w`,
      `${basePath}-800w.${extension} 800w`,
      `${basePath}-1200w.${extension} 1200w`,
      `${basePath}.${extension} 1600w`
    ].join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  if (hasError) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ width, height }}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <picture>
      {/* WebP version for modern browsers */}
      <source
        srcSet={generateSrcSet(getWebPSrc(src))}
        sizes={sizes}
        type="image/webp"
      />
      
      {/* Fallback to original format */}
      <img
        src={src}
        srcSet={generateSrcSet(src)}
        alt={alt}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;
