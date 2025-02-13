
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "dark" | "light" | "orange" | "gray";
  size?: "sm" | "lg";
  active?: boolean;
  label?: string;
  led?: boolean;
}

export const Button = ({ 
  variant = "dark", 
  size = "sm", 
  active = false,
  label,
  led = false,
  className,
  children,
  ...props 
}: ButtonProps) => {
  const baseStyles = "relative flex items-center justify-center font-mono transition-all duration-100 active:translate-y-0.5 select-none";
  const variantStyles = {
    dark: "bg-sampler-button-dark text-white hover:bg-gray-800",
    light: "bg-sampler-button-light text-black hover:bg-gray-100",
    orange: "bg-sampler-orange text-white hover:bg-orange-500",
    gray: "bg-sampler-button-gray text-white hover:bg-gray-600"
  };
  const sizeStyles = {
    sm: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <div className="relative">
      {label && (
        <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs text-gray-500">
          {label}
        </span>
      )}
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          "rounded shadow-md",
          className
        )}
        {...props}
      >
        {children}
        {led && (
          <div 
            className={cn(
              "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full",
              active ? "bg-sampler-orange" : "bg-gray-600"
            )}
          />
        )}
      </button>
    </div>
  );
};
