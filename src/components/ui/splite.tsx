'use client'

import { memo, useEffect, useRef, useState } from 'react'

const LoadingSpinner = memo(() => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
  </div>
));

LoadingSpinner.displayName = 'LoadingSpinner';

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
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
      if (onLoad) {
        try {
          onLoad();
        } catch (error) {
          console.error('Error in onLoad callback:', error);
          handleError('Failed to initialize scene');
        }
      }
    };

    const handleError = (message: string) => {
      setLoadError(message);
      setIsLoading(false);
      if (onError) onError(message);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', handleLoad);
      iframe.addEventListener('error', () => handleError('Failed to load scene'));
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('load', handleLoad);
        iframe.removeEventListener('error', () => handleError('Failed to load scene'));
      }
    };
  }, [onLoad, onError]);

  if (loadError) {
    return (
      <div className="w-full h-full flex items-center justify-center text-red-500">
        {loadError}
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full ${className || ''}`}>
      <iframe
        ref={iframeRef}
        src={scene}
        className="w-full h-full border-0"
        allow="autoplay; fullscreen; vr"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          background: 'transparent',
        }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
});

SplineScene.displayName = 'SplineScene';