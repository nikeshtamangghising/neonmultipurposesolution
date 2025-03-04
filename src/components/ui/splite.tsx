'use client'

import dynamic from 'next/dynamic'
import { Suspense, memo, useEffect, useRef, useState } from 'react'

const LoadingSpinner = memo(() => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

// Import Spline component with no SSR and proper error handling
const Spline = dynamic(
  () => import('@splinetool/react-spline').then((mod) => {
    if (!mod.default) {
      throw new Error('Failed to load Spline component');
    }
    return mod.default;
  }).catch((error) => {
    console.error('Error loading Spline:', error);
    throw error;
  }),
  {
    ssr: false,
    loading: () => <LoadingSpinner />,
  }
);

interface SplineSceneProps {
  scene: string;
  className?: string;
  onLoad?: () => void;
  onError?: (error: string) => void;
}

export const SplineScene = memo(function SplineScene({ 
  scene, 
  className, 
  onLoad,
  onError 
}: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
    if (onLoad) {
      try {
        onLoad();
      } catch (error) {
        const errorMessage = 'Failed to initialize 3D scene';
        console.error(errorMessage, error);
        setLoadError(errorMessage);
        if (onError) onError(errorMessage);
      }
    }
  };

  const handleError = (error: any) => {
    const errorMessage = error?.message || 'Failed to load 3D scene';
    console.error('Spline error:', error);
    setLoadError(errorMessage);
    setIsLoading(false);
    if (onError) onError(errorMessage);
  };

  if (loadError) {
    return (
      <div className="w-full h-full flex items-center justify-center text-red-500">
        {loadError}
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className={`w-full h-full ${className || ''}`}
      style={{ minHeight: '200px', minWidth: '200px' }}
    >
      {isReady && (
        <Suspense fallback={<LoadingSpinner />}>
          <div className="relative w-full h-full">
            <Spline
              scene={scene}
              onLoad={handleLoad}
              onError={handleError}
              style={{
                width: '100%',
                height: '100%',
                transformOrigin: 'center center',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
          </div>
        </Suspense>
      )}
      {(isLoading || !isReady) && <LoadingSpinner />}
    </div>
  );
});

SplineScene.displayName = 'SplineScene';