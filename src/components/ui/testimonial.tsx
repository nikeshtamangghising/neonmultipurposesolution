import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number | string
  name: string
  avatar: string
  description: string
  course: string
}

interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(
  (
    { className, testimonials, showArrows = true, showDots = true, ...props },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState<number>(0)

    const handleDragEnd = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (Math.abs(info.offset.x) > 100) {
        setExitX(info.offset.x)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          setExitX(0)
        }, 200)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "h-[600px] w-full flex items-center justify-center bg-white dark:bg-transparent py-12 mb-8",
          className
        )}
        {...props}
      >
        <div className="relative w-[700px] h-[500px] bg-white dark:bg-transparent p-6 rounded-3xl">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex
            const isPrevCard =
              index === (currentIndex + 1) % testimonials.length
            const isNextCard =
              index === (currentIndex + 2) % testimonials.length

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute w-full h-full rounded-2xl cursor-grab active:cursor-grabbing p-10",
                  "bg-white shadow-lg border border-gray-100",
                  "dark:bg-gray-900/80 dark:border-gray-800 dark:shadow-[2px_2px_4px_rgba(0,0,0,0.4),-1px_-1px_3px_rgba(255,255,255,0.1)]",
                )}
                style={{
                  zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {showArrows && isCurrentCard && (
                  <div className="absolute inset-x-0 top-6 flex justify-between px-8">
                    <span className="text-3xl select-none cursor-pointer 
                      text-gray-600 hover:text-gray-900 
                      dark:text-gray-600 dark:hover:text-gray-400 
                      transition-colors">
                      &larr;
                    </span>
                    <span className="text-3xl select-none cursor-pointer 
                      text-gray-600 hover:text-gray-900 
                      dark:text-gray-600 dark:hover:text-gray-400 
                      transition-colors">
                      &rarr;
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-8 md:p-10 flex flex-col items-center gap-6 sm:gap-8">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover 
                      border-2 border-primary/30 dark:border-primary/40"
                  />
                  <h3 className="text-xl sm:text-2xl font-semibold 
                    text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl 
                    text-gray-700 dark:text-gray-300 text-center">
                    {testimonial.description}
                  </p>
                  <p className="text-base sm:text-lg font-medium text-primary dark:text-primary/80">
                    {testimonial.course}
                  </p>
                </div>
              </motion.div>
            )
          })}
          {showDots && (
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-3">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    index === currentIndex
                      ? "bg-primary dark:bg-primary"
                      : "bg-gray-400 hover:bg-primary/50 dark:bg-gray-700 dark:hover:bg-primary/50",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel, type Testimonial }
