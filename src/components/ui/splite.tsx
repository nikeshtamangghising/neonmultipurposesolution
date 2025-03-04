'use client'

import dynamic from 'next/dynamic'
import { Suspense, useState, useEffect, memo } from 'react'

const LoadingSpinner = memo(() => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

// Dynamically import Spline with no SSR and handle loading state
const Spline = dynamic(
  () => import('@splinetool/react-spline').then((mod) => mod.default),
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
  const [error, setError] = useState<Error | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    const debouncedResize = debounce(checkMobile, 250);
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = (e: React.SyntheticEvent<HTMLDivElement>) => {
    console.error('Spline scene failed to load:', e);
    setError(new Error('Failed to load 3D scene'));
  };

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-center px-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          3D scene failed to load. Please refresh the page or try again later.
        </p>
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${className} ${!isLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
      <Spline
        scene={scene}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          transform: isMobile ? 'scale(0.8)' : 'none',
          transformOrigin: 'center center',
          willChange: 'transform'
        }}
      />
    </div>
  );
});

SplineScene.displayName = 'SplineScene';

// Debounce utility function
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}