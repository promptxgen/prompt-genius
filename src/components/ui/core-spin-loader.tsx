import { cn } from "@/lib/utils";

interface CoreSpinLoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const CoreSpinLoader = ({ className, size = "md" }: CoreSpinLoaderProps) => {
  const sizeClasses = {
    sm: "h-5 w-5 border-2",
    md: "h-10 w-10 border-[3px]",
    lg: "h-16 w-16 border-4",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-muted border-t-primary",
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    />
  );
};

export default CoreSpinLoader;
