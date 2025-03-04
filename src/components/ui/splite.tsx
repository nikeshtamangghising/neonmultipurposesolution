'use client'

import dynamic from 'next/dynamic'
import { Suspense, memo, useEffect, useRef, useState } from 'react'

const LoadingSpinner = memo(() => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

// Import Spline component with no SSR
const Spline = dynamic(
  () => import('@splinetool/react-spline'),
  {
    ssr: false,
    loading: () => <LoadingSpinner />
  }
);

interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
}

export const SplineScene = memo(function SplineScene({ scene, className, onLoad }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0 && entry.contentRect.height > 0) {
          setIsReady(true);
        } else {
          setIsReady(false);
        }
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const handleLoad = () => {
    if (onLoad) {
      // Add a small delay to ensure WebGL context is fully initialized
      setTimeout(onLoad, 100);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`w-full h-full ${className}`}
      style={{ minHeight: '200px', minWidth: '200px' }}
    >
      {isReady && (
        <Suspense fallback={<LoadingSpinner />}>
          <Spline
            scene={scene}
            onLoad={handleLoad}
            style={{
              width: '100%',
              height: '100%',
              transformOrigin: 'center center'
            }}
          />
        </Suspense>
      )}
      {!isReady && <LoadingSpinner />}
    </div>
  );
});

SplineScene.displayName = 'SplineScene';