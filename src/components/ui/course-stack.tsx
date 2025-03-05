"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState, useCallback, useMemo, memo } from 'react';

export interface CourseItem {
  href: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  highlights?: string[];
  prerequisites?: string[];
  tools?: string[];
  outcomes?: string[];
  schedule?: {
    hoursPerWeek: number;
    totalModules: number;
    projectCount: number;
  };
}

const OFFSET_FACTOR = {
  base: 2.5,
  sm: 3,
  md: 3.5
};

const SCALE_FACTOR = {
  base: 0.03,
  sm: 0.025,
  md: 0.02
};

const OPACITY_FACTOR = {
  base: 0.12,
  sm: 0.1,
  md: 0.08
};

interface DragState {
  start: number;
  startY: number;
  delta: number;
  startTime: number;
}

export function CourseStack({ courses }: { courses: CourseItem[] }) {
  const [dismissedCourses, setDismissedCourses] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const stackRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useMediaQuery();

  // Memoize visible courses and maintain their original order
  const visibleCourses = useMemo(() => {
    return courses.filter(course => !dismissedCourses.includes(course.href));
  }, [courses, dismissedCourses]);

  const getFactors = useCallback(() => {
    if (typeof window === 'undefined') {
      return { offset: OFFSET_FACTOR.base, scale: SCALE_FACTOR.base, opacity: OPACITY_FACTOR.base };
    }
    
    const width = window.innerWidth;
    if (width >= 1024) {
      return { offset: OFFSET_FACTOR.md, scale: SCALE_FACTOR.md, opacity: OPACITY_FACTOR.md };
    }
    if (width >= 640) {
      return { offset: OFFSET_FACTOR.sm, scale: SCALE_FACTOR.sm, opacity: OPACITY_FACTOR.sm };
    }
    return { offset: OFFSET_FACTOR.base, scale: SCALE_FACTOR.base, opacity: OPACITY_FACTOR.base };
  }, []);

  const factors = useMemo(() => getFactors(), [getFactors]);

  // Reset function
  const resetStack = useCallback(() => {
    setDismissedCourses([]);
    setIsVisible(true);
  }, []);

  // Intersection Observer for visibility
  useEffect(() => {
    if (!stackRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            resetStack();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(stackRef.current);
    return () => observer.disconnect();
  }, [resetStack]);

  // Window focus handler
  useEffect(() => {
    const handleFocus = () => {
      setIsVisible(true);
      resetStack();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [resetStack]);

  return (
    <div ref={stackRef} className="w-full">
      <div className={cn(
        "relative w-full pt-0",
        "transition-opacity duration-300",
        !isVisible && "opacity-0"
      )}>
        {visibleCourses.length > 0 ? (
          <div className="relative w-full">
            {visibleCourses.map((course, index) => (
              <div
                key={course.href}
                className={cn(
                  "w-full transition-all duration-300",
                  "transform-gpu will-change-transform",
                  index === 0 ? "relative" : "absolute top-0 left-0 right-0",
                  index > 0 && "pointer-events-none select-none"
                )}
                style={{
                  zIndex: visibleCourses.length - index,
                  transform: index === 0 ? 'none' : `translateY(${-index * factors.offset}%) scale(${1 - index * factors.scale})`,
                  opacity: Math.max(0, 1 - index * factors.opacity)
                }}
              >
                <CourseCard
                  {...course}
                  onDismiss={() => {
                    setDismissedCourses(prev => [...prev, course.href]);
                  }}
                  active={index === 0}
                  hideContent={index !== 0}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full py-16">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                You've viewed all courses!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Ready to start your learning journey? Choose a course and begin your path to success.
              </p>
              <button
                onClick={resetStack}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
                  text-white rounded-lg hover:opacity-90 transition-opacity
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                View Courses Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const CourseCard = memo(function CourseCard({
  title,
  description,
  image,
  duration,
  level,
  highlights,
  prerequisites,
  tools,
  outcomes,
  schedule,
  onDismiss,
  hideContent,
  href,
  active,
}: CourseItem & {
  onDismiss?: () => void;
  hideContent?: boolean;
  active?: boolean;
}) {
  const { isMobile } = useMediaQuery();
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<DragState>({ start: 0, startY: 0, delta: 0, startTime: 0 });
  const animation = useRef<Animation>();

  const dismiss = useCallback(() => {
    if (!ref.current || !active) return;
    try {
      const cardWidth = ref.current.getBoundingClientRect().width;
      const translateX = Math.sign(drag.current.delta) * cardWidth;
      
      animation.current = ref.current.animate(
        { opacity: 0, transform: `translateX(${translateX}px)` },
        { duration: 150, easing: "ease-in-out", fill: "forwards" }
      );
      animation.current.onfinish = () => onDismiss?.();
    } catch (error) {
      console.error('Error during card dismissal:', error);
      if (ref.current) {
        ref.current.style.setProperty("--dx", "0");
      }
      onDismiss?.();
    }
  }, [active, onDismiss]);

  const stopDragging = useCallback((cancelled: boolean) => {
    if (!ref.current || !active) return;
    try {
      document.removeEventListener("pointermove", onDragMove);
      document.removeEventListener("pointerup", onDragEnd);
      document.removeEventListener("pointercancel", onDragCancel);
      setDragging(false);

      const dx = drag.current.delta;
      if (Math.abs(dx) > ref.current.clientWidth / (cancelled ? 2 : 3)) {
        dismiss();
        return;
      }

      animation.current = ref.current.animate(
        { transform: "translateX(0)" },
        { duration: 150, easing: "ease-in-out" }
      );
      animation.current.onfinish = () => ref.current?.style.setProperty("--dx", "0");

      drag.current = { start: 0, startY: 0, delta: 0, startTime: 0 };
    } catch (error) {
      console.error('Error during drag stop:', error);
      if (ref.current) {
        ref.current.style.setProperty("--dx", "0");
      }
      setDragging(false);
    }
  }, [active, dismiss]);

  const onDragMove = useCallback((e: PointerEvent) => {
    if (!ref.current || !active) return;

    // Add threshold for horizontal movement on mobile
    if (isMobile) {
      const dx = e.clientX - drag.current.start;
      const dy = Math.abs(e.clientY - drag.current.startY);
      
      // If vertical scroll is detected, cancel the drag
      if (dy > Math.abs(dx) * 0.5) {
        stopDragging(true);
        return;
      }
    }

    const dx = e.clientX - drag.current.start;
    drag.current.delta = dx;
    ref.current.style.setProperty("--dx", dx.toString());
  }, [active, isMobile, stopDragging]);

  const onDragEnd = useCallback((e: PointerEvent) => {
    if (!ref.current || !active) return;
    
    const dx = drag.current.delta;
    const duration = Date.now() - drag.current.startTime;
    const velocity = Math.abs(dx / duration);
    
    // Adjust threshold based on velocity and screen size
    const threshold = isMobile ? 0.4 : 0.3;
    const shouldDismiss = Math.abs(dx) > ref.current.clientWidth * threshold || velocity > 0.5;
    
    stopDragging(shouldDismiss);
  }, [active, isMobile, stopDragging]);

  const onDragCancel = useCallback(() => stopDragging(true), [stopDragging]);

  const onDragStart = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current || !active || e.button !== 0) return;
    
    // Don't initiate drag on mobile scroll attempts
    if (isMobile) {
      const touchY = e.clientY;
      const cardRect = ref.current.getBoundingClientRect();
      const isScrollAttempt = touchY > cardRect.top + 100 && touchY < cardRect.bottom - 100;
      if (isScrollAttempt) return;
    }
    
    try {
      animation.current?.cancel();
      
      drag.current = {
        start: e.clientX,
        startY: e.clientY,
        delta: 0,
        startTime: Date.now()
      };

      setDragging(true);
      ref.current.style.setProperty("--dx", "0");
      ref.current.style.transition = "none";

      document.addEventListener("pointermove", onDragMove);
      document.addEventListener("pointerup", onDragEnd);
      document.addEventListener("pointercancel", onDragCancel);
    } catch (error) {
      console.error('Error during drag start:', error);
      setDragging(false);
    }
  }, [active, isMobile, onDragMove]);

  const onClick = useCallback(() => {
    if (!ref.current || !isMobile) return;
    if (Math.abs(drag.current.delta) < ref.current.clientWidth / 10 && 
        (!drag.current.startTime || Date.now() - drag.current.startTime < 250)) {
      window.open(href, "_blank");
    }
  }, [href, isMobile]);

  return (
    <Card
      ref={ref}
      onPointerDown={onDragStart}
      className={cn(
        "relative w-full overflow-y-auto overflow-x-hidden bg-white dark:bg-gray-800 transition-shadow",
        "hover:shadow-xl dark:shadow-none",
        dragging ? "cursor-grabbing" : "cursor-default md:cursor-grab",
        active && "transform-gpu will-change-transform",
        "select-none touch-pan-y",
        "style-transform: translateX(var(--dx, 0px))"
      )}
    >
      <div className={cn("space-y-4 sm:space-y-6", hideContent && "invisible")}>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="w-full sm:w-1/4 shrink-0 space-y-4 sm:space-y-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
              {image && (
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="rounded-lg object-cover object-center transform transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  quality={75}
                />
              )}
            </div>
            {schedule && (
              <div className="grid grid-cols-3 gap-1 text-center">
                <div className="space-y-0.5 p-1 rounded-lg bg-secondary/5 dark:bg-secondary/10">
                  <div className="text-[10px] sm:text-xs font-semibold text-foreground">{schedule.hoursPerWeek}</div>
                  <div className="text-[8px] sm:text-[9px] text-muted-foreground">Hours/Week</div>
                </div>
                <div className="space-y-0.5 p-1 rounded-lg bg-secondary/5 dark:bg-secondary/10">
                  <div className="text-[10px] sm:text-xs font-semibold text-foreground">{schedule.totalModules}</div>
                  <div className="text-[8px] sm:text-[9px] text-muted-foreground">Modules</div>
                </div>
                <div className="space-y-0.5 p-1 rounded-lg bg-secondary/5 dark:bg-secondary/10">
                  <div className="text-[10px] sm:text-xs font-semibold text-foreground">{schedule.projectCount}</div>
                  <div className="text-[8px] sm:text-[9px] text-muted-foreground">Projects</div>
                </div>
              </div>
            )}
          </div>
          <div className="flex-1 space-y-4 sm:space-y-6">
            <div className="space-y-3">
              <span className="block text-base sm:text-lg font-bold text-foreground">
                {title}
              </span>
              <div className="flex flex-wrap items-center gap-1">
                <span className="px-2 py-0.5 rounded-full bg-primary text-primary-foreground font-semibold text-[10px]">
                  {duration}
                </span>
                <span className={cn(
                  "px-2 py-0.5 rounded-full font-semibold text-[10px]",
                  level === 'Beginner' && "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400",
                  level === 'Intermediate' && "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400",
                  level === 'Advanced' && "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-400"
                )}>
                  {level}
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-8">
              <div className="space-y-6">
                {highlights && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-foreground flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-amber-500">
                        <path fillRule="evenodd" d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 10zm11.75-.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5zm-9.02 4.72a.75.75 0 011.06 0l1.062 1.06a.75.75 0 11-1.061 1.062l-1.06-1.061a.75.75 0 010-1.06zm7.84 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM10 15.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                      </svg>
                      Course Highlights
                    </h4>
                    <ul className="space-y-0.5">
                      {highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="mt-1 h-0.5 w-0.5 rounded-full bg-amber-500 shrink-0"></span>
                          <span className="text-[10px] text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="sm:col-span-2 space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  {prerequisites && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-foreground flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-blue-500">
                          <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684z" />
                        </svg>
                        Prerequisites
                      </h4>
                      <ul className="space-y-0.5">
                        {prerequisites.map((item, i) => (
                          <li key={i} className="flex items-center gap-1 text-[10px] text-muted-foreground">
                            <span className="h-0.5 w-0.5 rounded-full bg-blue-500"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {tools && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-foreground flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-purple-500">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                        Tools & Technologies
                      </h4>
                      <ul className="space-y-0.5">
                        {tools.map((item, i) => (
                          <li key={i} className="flex items-center gap-1 text-[10px] text-muted-foreground">
                            <span className="h-0.5 w-0.5 rounded-full bg-purple-500"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {outcomes && (
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-foreground flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-green-500">
                        <path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      Learning Outcomes
                    </h4>
                    <ul className="space-y-0.5">
                      {outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="mt-1 h-0.5 w-0.5 rounded-full bg-green-500 shrink-0"></span>
                          <span className="text-[10px] text-muted-foreground">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end pt-4">
          <button
            type="button"
            onClick={onDismiss}
            className="px-2 py-1 rounded-full font-semibold text-[10px] text-muted-foreground 
              hover:text-foreground hover:bg-secondary/20 transition-colors duration-200"
          >
            Dismiss
          </button>
        </div>
      </div>

      {active && (
        <div className={cn(
          "absolute inset-x-0 bottom-0 p-2 flex justify-center",
          "text-xs text-muted-foreground",
          "opacity-0 transition-opacity duration-200",
          "group-hover:opacity-100"
        )}>
          <span>Swipe to dismiss</span>
        </div>
      )}
    </Card>
  );
});

CourseCard.displayName = 'CourseCard';

const AnimatedLogo = memo(function AnimatedLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-muted-foreground"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1H15V12.9332C15.0001 12.9465 15.0002 12.9598 15.0003 12.9731C15.0003 12.982 15.0003 12.991 15.0003 13C15.0003 13.0223 15.0002 13.0445 15 13.0668V20H12V18.7455C10.8662 19.5362 9.48733 20 8.00016 20C4.13408 20 1 16.866 1 13C1 9.13401 4.13408 6 8.00016 6C9.48733 6 10.8662 6.46375 12 7.25452V1ZM8 16.9998C10.2091 16.9998 12 15.209 12 12.9999C12 10.7908 10.2091 9 8 9C5.79086 9 4 10.7908 4 12.9999C4 15.209 5.79086 16.9998 8 16.9998Z"
        stroke="currentColor"
        stroke-dasharray="63"
        stroke-linecap="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur="2500ms"
          values="63;0;0;0;63"
          fill="freeze"
        />
      </path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 6H20V13V13C20 14.0608 20.4215 15.0782 21.1716 15.8283C21.9217 16.5784 22.9391 16.9998 24 16.9998C25.0609 16.9998 26.0783 16.5784 26.8284 15.8283C27.5785 15.0782 28 14.0608 28 13C28 13 28 13 28 13V6H31V13H31.0003C31.0003 13.9192 30.8192 14.8295 30.4675 15.6788C30.1157 16.5281 29.6 17.2997 28.95 17.9497C28.3 18.5997 27.5283 19.1154 26.679 19.4671C25.8297 19.8189 24.9194 20 24.0002 20C23.0809 20 22.1706 19.8189 21.3213 19.4671C20.472 19.1154 19.7003 18.5997 19.0503 17.9497C18.4003 17.2997 17.8846 16.5281 17.5329 15.6788C17.1811 14.8295 17 13.9192 17 13V13V6Z"
        stroke="currentColor"
        stroke-dasharray="69"
        stroke-linecap="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur="2500ms"
          values="69;0;0;0;69"
          fill="freeze"
        />
      </path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 1H36V7.25474C37.1339 6.46383 38.5128 6 40.0002 6C43.8662 6 47.0003 9.13401 47.0003 13C47.0003 16.866 43.8662 20 40.0002 20C36.1341 20 33 16.866 33 13V1ZM40 16.9998C42.2091 16.9998 44 15.209 44 12.9999C44 10.7908 42.2091 9 40 9C37.7909 9 36 10.7908 36 12.9999C36 15.209 37.7909 16.9998 40 16.9998Z"
        stroke="currentColor"
        stroke-dasharray="60"
        stroke-linecap="round"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur="2500ms"
          values="-60;0;0;0;-60"
          fill="freeze"
        />
      </path>
    </svg>
  );
});

AnimatedLogo.displayName = 'AnimatedLogo';
