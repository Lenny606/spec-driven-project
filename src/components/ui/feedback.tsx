import * as React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "#/lib/utils";

export interface FeedbackProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error";
}

const Feedback = React.forwardRef<HTMLDivElement, FeedbackProps>(
  ({ className, variant = "success", children, ...props }, ref) => {
    const variants = {
      success: "bg-emerald-50 border border-emerald-200 text-emerald-700",
      error: "bg-red-50 border border-red-200 text-red-700",
    };

    const icons = {
      success: <CheckCircle2 className="w-5 h-5" />,
      error: <AlertCircle className="w-5 h-5" />,
    };

    return (
      <div
        ref={ref}
        className={cn(
          "px-4 py-3 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-1 duration-200",
          variants[variant],
          className
        )}
        {...props}
      >
        {icons[variant]}
        <div className="text-sm font-medium">{children}</div>
      </div>
    );
  }
);
Feedback.displayName = "Feedback";

export { Feedback };
