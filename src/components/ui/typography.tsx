import * as React from "react";
import { cn } from "#/lib/utils";

const H1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn("text-4xl md:text-5xl font-black tracking-tight text-slate-900", className)}
      {...props}
    />
  )
);
H1.displayName = "H1";

const H2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("text-2xl font-bold text-slate-800", className)}
      {...props}
    />
  )
);
H2.displayName = "H2";

const P = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-base text-slate-600 leading-relaxed", className)}
      {...props}
    />
  )
);
P.displayName = "P";

const Muted = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn("text-sm text-slate-400", className)}
      {...props}
    />
  )
);
Muted.displayName = "Muted";

export { H1, H2, P, Muted };
