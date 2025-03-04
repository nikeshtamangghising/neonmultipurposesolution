'use client'

import dynamic from 'next/dynamic'
import { Suspense, memo, useEffect, useState } from 'react'

const LoadingSpinner = memo(() => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

// Basic Spline import without extra wrapping
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

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
  const [loadingState, setLoadingState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    // Reset state when scene URL changes
    setLoadingState('loading');
    setErrorMessage('');
  }, [scene]);

  const handleLoad = () => {
    console.log('Spline scene loaded successfully');
    setLoadingState('loaded');
    if (onLoad) onLoad();
  };

  const handleError = (error: any) => {
    console.error('Spline scene error:', error);
    const message = error?.message || 'Failed to load 3D scene';
    setLoadingState('error');
    setErrorMessage(message);
    if (onError) onError(message);
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      <div className="w-full h-full">
        {loadingState !== 'error' && (
          <Spline
            scene={scene}
            onLoad={handleLoad}
            onError={handleError}
          />
        )}
        
        {loadingState === 'loading' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <LoadingSpinner />
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Loading 3D scene...</p>
          </div>
        )}

        {loadingState === 'error' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm p-4">
            <p className="text-red-500 dark:text-red-400 text-center mb-2">{errorMessage}</p>
            <button
              onClick={() => {
                setLoadingState('loading');
                setErrorMessage('');
              }}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg 
                transition-colors duration-200 text-sm"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

SplineScene.displayName = 'SplineScene';