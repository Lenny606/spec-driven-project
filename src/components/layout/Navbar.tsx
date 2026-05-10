import { Link } from "@tanstack/react-router";
import { Button } from "#/components/ui/button";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-indigo-500">
              RandomEvent
            </span>
          </Link>
          
          <div className="hidden md:flex md:items-center md:gap-6">
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-indigo-500 transition-colors">
              How it Works
            </a>
            <Link to="/design-system" className="text-sm font-medium text-slate-600 hover:text-indigo-500 transition-colors">
              Discovery
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            Login
          </Button>
          <Button variant="primary" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}
