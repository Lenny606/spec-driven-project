import { Link, useNavigate } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";
import { LogOut, User as UserIcon } from "lucide-react";
import { authClient } from "#/lib/auth-client";

interface DashboardNavbarProps {
  user: {
    name: string;
    email: string;
    image?: string | null;
  };
}

export function DashboardNavbar({ user }: DashboardNavbarProps) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({ to: "/" });
        },
      },
    });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-black tracking-tight text-indigo-500">
              RandomEvent
            </span>
          </Link>
          <div className="h-6 w-px bg-slate-200 mx-2" />
          <span className="text-sm font-medium text-slate-500">Dashboard</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-900 leading-none">
                {user.name}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                {user.email}
              </p>
            </div>
            <div className="h-10 w-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-bold overflow-hidden shadow-sm">
              {user.image ? (
                <img src={user.image} alt={user.name} className="h-full w-full object-cover" />
              ) : (
                <UserIcon className="h-5 w-5" />
              )}
            </div>
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleLogout}
            className="text-slate-500 hover:text-red-500 hover:bg-red-50 transition-all"
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
