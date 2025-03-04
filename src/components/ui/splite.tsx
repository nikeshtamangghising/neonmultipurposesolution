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
  () => import('@splinetool/react-spline').catch(() => {
    // Return a fallback component if Spline fails to load
    return () => (
      <div className="w-full h-full flex items-center justify-center text-red-500">
        Failed to load 3D scene
      </div>
    );
  }),
  {
    ssr: false,
    loading: () => <LoadingSpinner />
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
  className = '', 
  onLoad,
  onError 
}: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const handleLoad = async () => {
    try {
      if (!mountedRef.current) return;
      
      setIsLoading(false);
      setHasError(false);
      
      if (onLoad) {
        onLoad();
      }
    } catch (error) {
      console.error('Spline load error:', error);
      if (!mountedRef.current) return;
      
      setHasError(true);
      setIsLoading(false);
      
      if (onError) {
        onError(error instanceof Error ? error.message : 'Failed to load 3D scene');
      }
    }
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="w-full h-full">
          {!hasError && (
            <Spline
              scene={scene}
              onLoad={handleLoad}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
            />
          )}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
              <LoadingSpinner />
            </div>
          )}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
              <div className="text-red-500 dark:text-red-400">
                Failed to load 3D scene. Please try refreshing the page.
              </div>
            </div>
          )}
        </div>
      </Suspense>
    </div>
  );
});

SplineScene.displayName = 'SplineScene';