import { cn } from "@/lib/utils";
import Image from "next/image";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

export function Avatar({ src, alt, className, ...props }: AvatarProps) {
  return (
    <div 
      className={cn("relative overflow-hidden rounded-full", className)} 
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
  );
} 