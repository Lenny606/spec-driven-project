import * as React from "react";
import { Calendar, MapPin, Info } from "lucide-react";
import { cn } from "#/lib/utils";
import { Button } from "./button";

export interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  onAction?: () => void;
  actionLabel?: string;
  secondaryActionLabel?: string;
  onSecondaryAction?: () => void;
}

const EventCard = React.forwardRef<HTMLDivElement, EventCardProps>(
  (
    {
      className,
      title,
      date,
      location,
      description,
      image,
      onAction,
      actionLabel = "View Details",
      secondaryActionLabel,
      onSecondaryAction,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl overflow-hidden flex flex-col transition-all hover:shadow-2xl hover:shadow-indigo-500/10",
          className
        )}
        {...props}
      >
        {image && (
          <div className="h-48 overflow-hidden relative">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 line-clamp-2">
            {title}
          </h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2 text-slate-600">
              <Calendar className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium">{date}</span>
            </div>
            
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="w-4 h-4 text-indigo-500" />
              <span className="text-sm font-medium">{location}</span>
            </div>
            
            <div className="flex items-start gap-2 text-slate-500 mt-4">
              <Info className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
              <p className="text-sm leading-relaxed line-clamp-3">
                {description}
              </p>
            </div>
          </div>
          
          <div className="mt-auto pt-6 flex gap-3 border-t border-slate-100">
            <Button 
              variant="primary" 
              className="flex-1" 
              onClick={onAction}
            >
              {actionLabel}
            </Button>
            {secondaryActionLabel && (
              <Button 
                variant="glass" 
                onClick={onSecondaryAction}
              >
                {secondaryActionLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
);
EventCard.displayName = "EventCard";

export { EventCard };
