import * as React from "react";
import { cn } from "#/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "base" | "glass";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "base", type, ...props }, ref) => {
    const baseStyles = "w-full px-4 py-2.5 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      base: "bg-white border border-slate-200",
      glass: "bg-white/10 backdrop-blur-md border border-white/20 placeholder:text-slate-500 focus:bg-white/20",
    };

    return (
      <input
        type={type}
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "base" | "glass";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "base", ...props }, ref) => {
    const baseStyles = "w-full px-4 py-2.5 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all min-h-[120px] resize-none disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      base: "bg-white border border-slate-200",
      glass: "bg-white/10 backdrop-blur-md border border-white/20 placeholder:text-slate-500 focus:bg-white/20",
    };

    return (
      <textarea
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
