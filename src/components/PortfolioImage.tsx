import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface PortfolioImageProps {
  src?: string;
  alt: string;
  title?: string;
  className?: string;
  aspectClassName?: string;
  objectPositionClassName?: string;
  priority?: boolean;
}

export function PortfolioImage({
  src,
  alt,
  title,
  className = '',
  aspectClassName = 'aspect-[16/9]',
  objectPositionClassName = 'object-center',
  priority = false,
}: PortfolioImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0F294A] via-[#132E52] to-[#09172A] text-white p-6 ${aspectClassName} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.35) 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        />
        <ImageIcon className="relative h-7 w-7 text-blue-200/80 mb-2.5" aria-hidden="true" />
        <p className="relative text-center text-sm font-medium tracking-tight text-slate-100 max-w-xs">
          {title || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={priority ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={`block w-full object-cover ${objectPositionClassName} ${className}`}
    />
  );
}
