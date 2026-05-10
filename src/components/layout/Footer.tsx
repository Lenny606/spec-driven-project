export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="text-xl font-black tracking-tight text-slate-400">
              RandomEvent
            </span>
            <p className="text-sm text-slate-500">
              © 2026 Random Event Generator. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-sm text-slate-500 hover:text-indigo-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-indigo-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-indigo-500 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
