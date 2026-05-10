import { Link } from "@tanstack/react-router";
import { 
  PlusCircle, 
  LayoutDashboard, 
  Calendar, 
  Settings, 
  ChevronRight 
} from "lucide-react";
import { Button } from "#/components/ui/button";
import { cn } from "#/lib/utils";

export function DashboardSidebar() {
  return (
    <aside className="w-64 border-r border-slate-200/50 bg-white flex flex-col hidden lg:flex">
      <div className="p-6">
        <Link to="/dashboard/create">
          <Button className="w-full h-12 shadow-lg shadow-indigo-500/20 gap-2">
            <PlusCircle className="h-5 w-5" />
            Vytvořit event
          </Button>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        <SidebarLink 
          to="/dashboard" 
          icon={<Calendar className="h-5 w-5" />} 
          label="Moje eventy" 
        />
        <SidebarLink 
          to="/dashboard/settings" 
          icon={<Settings className="h-5 w-5" />} 
          label="Nastavení" 
        />
      </nav>

      <div className="p-4 border-t border-slate-100">
        <div className="glass-card p-4 rounded-xl text-center bg-indigo-50/50">
          <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">Pro Plan</p>
          <p className="text-xs text-slate-500 mb-3">Promote unlimited events and see analytics.</p>
          <Button variant="ghost" size="sm" className="text-xs text-indigo-600 hover:bg-white w-full">
            Upgrade Now
          </Button>
        </div>
      </div>
    </aside>
  );
}

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarLink({ to, icon, label }: SidebarLinkProps) {
  return (
    <Link
      to={to}
      activeProps={{
        className: "bg-indigo-50 text-indigo-600 font-semibold",
      }}
      inactiveProps={{
        className: "text-slate-500 hover:bg-slate-50 hover:text-indigo-500",
      }}
      className={cn(
        "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group"
      )}
    >
      {({ isActive }) => (
        <>
          <div className="flex items-center gap-3">
            {icon}
            <span className="text-sm">{label}</span>
          </div>
          <ChevronRight className={cn(
            "h-4 w-4 transition-transform",
            isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
          )} />
        </>
      )}
    </Link>
  );
}
