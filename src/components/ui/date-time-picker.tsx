import * as React from "react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "#/lib/utils";
import { Input } from "./input";

export interface DateTimePickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "base" | "glass";
  label?: string;
}

const DateTimePicker = React.forwardRef<HTMLInputElement, DateTimePickerProps>(
  ({ className, variant = "base", label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-sm font-medium text-slate-700 ml-1">
            {label}
          </label>
        )}
        <div className="relative group">
          <Input
            type="datetime-local"
            variant={variant}
            className={cn(
              "pl-11 [appearance:none] [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:cursor-pointer",
              className
            )}
            ref={ref}
            {...props}
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
            <CalendarIcon className="w-4 h-4" />
            <div className="w-[1px] h-4 bg-slate-200 group-focus-within:bg-indigo-200 transition-colors" />
            {/* <Clock className="w-3.5 h-3.5" /> */}
          </div>
        </div>
      </div>
    );
  }
);
DateTimePicker.displayName = "DateTimePicker";

export { DateTimePicker };
