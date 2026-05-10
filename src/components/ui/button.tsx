import * as React from "react";
import { cn } from "#/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "glass";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const baseStyles = "px-6 py-2.5 rounded-lg font-medium transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-indigo-500 text-white hover:bg-indigo-600 shadow-md hover:shadow-indigo-500/20",
      secondary: "bg-pink-500 text-white hover:bg-pink-600 shadow-md hover:shadow-pink-500/20",
      ghost: "border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-50",
      glass: "bg-white/20 backdrop-blur-md border border-white/30 text-slate-900 hover:bg-white/30",
    };

    const sizes = {
      default: "",
      sm: "px-4 py-1.5 text-sm",
      lg: "px-8 py-3 text-lg",
      icon: "p-2.5",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
