import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu on route change
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleMobileMenu = () => {
    const nextState = !isMobileMenuOpen;
    setIsMobileMenuOpen(nextState);
    if (nextState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  return (
    <>
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">replace_image</span>
            <h1 className="text-2xl font-light tracking-[0.2em] uppercase text-slate-900 dark:text-slate-100">
              Luxe <span className="text-primary">Café</span>
            </h1>
          </Link>
          <nav className="hidden md:flex items-center gap-12">
            <Link to="/menu" className="text-xs font-medium uppercase tracking-widest hover:text-primary transition-colors">Menu</Link>
            <a className="text-xs font-medium uppercase tracking-widest hover:text-primary transition-colors" href="#">Reservations</a>
            <Link to="/" className="text-xs font-medium uppercase tracking-widest hover:text-primary transition-colors">Our Story</Link>
            <a className="text-xs font-medium uppercase tracking-widest hover:text-primary transition-colors" href="#">Boutique</a>
          </nav>
          <div className="flex items-center gap-6">
            <button className="hidden lg:block border border-primary/30 px-6 py-2 text-xs uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
              Book a Table
            </button>
            <button className="md:hidden flex items-center justify-center p-2 text-primary" onClick={toggleMobileMenu}>
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
            <div
              className="size-8 rounded-full border border-primary/20 bg-cover bg-center"
              data-alt="User profile minimalist avatar"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_yLnHdHpBvoyG88Z3kYqFZabG0AS735BMWqVwEJC6ELlBRVa3APKBfoMKUWm1OndqdwTIk0j8891c4BBEbiljkflW4yued4jbu0ej0LHE5CA7suYySHK2pO7bckAzsS2VF3XI0uBIXRX3fYrS4pPTf_KageIHGKsC1z3PS7kzddx7oWjjmb-JSf8THDEqf736-mSClebKXgzgipYVTlZNV4eGlFVKvBdM8JkOYgDoUStHOp0bGAfmMDqDQ8Vm7KN-s_YJGus51CM')" }}
            ></div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 z-[90] bg-background-dark/40 backdrop-blur-sm transition-opacity duration-500 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 bottom-0 z-[100] w-[300px] bg-background-light dark:bg-background-dark shadow-2xl transition-transform duration-500 ease-in-out md:hidden flex flex-col border-l border-primary/10 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-8">
          <Link to="/" className="flex items-center gap-2" onClick={toggleMobileMenu}>
            <span className="material-symbols-outlined text-primary text-2xl">replace_image</span>
            <h1 className="text-lg font-light tracking-[0.2em] uppercase text-slate-900 dark:text-slate-100">Luxe <span className="text-primary">Café</span></h1>
          </Link>
          <button className="text-slate-500 hover:text-primary transition-colors" onClick={toggleMobileMenu}>
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
        </div>
        <nav className="flex flex-col flex-1 px-8 py-12 gap-8">
          <Link to="/menu" className="text-sm font-medium uppercase tracking-[0.3em] text-slate-900 dark:text-slate-100 hover:text-primary transition-colors border-b border-primary/5 pb-4" onClick={toggleMobileMenu}>Menu</Link>
          <a className="text-sm font-medium uppercase tracking-[0.3em] text-slate-900 dark:text-slate-100 hover:text-primary transition-colors border-b border-primary/5 pb-4" href="#" onClick={toggleMobileMenu}>Reservations</a>
          <Link to="/" className="text-sm font-medium uppercase tracking-[0.3em] text-slate-900 dark:text-slate-100 hover:text-primary transition-colors border-b border-primary/5 pb-4" onClick={toggleMobileMenu}>Our Story</Link>
          <a className="text-sm font-medium uppercase tracking-[0.3em] text-slate-900 dark:text-slate-100 hover:text-primary transition-colors border-b border-primary/5 pb-4" href="#" onClick={toggleMobileMenu}>Boutique</a>
          <div className="mt-12">
            <button className="w-full border border-primary px-8 py-4 text-xs uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all" onClick={toggleMobileMenu}>
              Book a Table
            </button>
          </div>
        </nav>
        <div className="p-8 text-center border-t border-primary/5">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">© 2024 Luxe Café Group</p>
        </div>
      </div>
    </>
  );
}
