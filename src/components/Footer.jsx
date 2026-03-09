import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-background-dark text-slate-400 py-16 px-6 border-t border-primary/20 mt-auto">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-2xl">replace_image</span>
            <h2 className="text-xl font-light tracking-[0.2em] uppercase text-white">Luxe <span className="text-primary">Café</span></h2>
          </div>
          <p className="text-sm font-light leading-relaxed">
            Curating the world's most exquisite coffee experiences since 2014.
          </p>
        </div>
        <div>
          <h5 className="text-white uppercase tracking-widest text-xs font-medium mb-6">Locations</h5>
          <ul className="space-y-4 text-sm font-light">
            <li className="hover:text-primary transition-colors cursor-pointer">Mayfair, London</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Place Vendôme, Paris</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Ginza, Tokyo</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Fifth Ave, New York</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white uppercase tracking-widest text-xs font-medium mb-6">Connect</h5>
          <ul className="space-y-4 text-sm font-light">
            <li className="hover:text-primary transition-colors cursor-pointer">Instagram</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Pinterest</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Journal</li>
            <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white uppercase tracking-widest text-xs font-medium mb-6">Newsletter</h5>
          <p className="text-sm font-light mb-4">Join our inner circle for exclusive event invites.</p>
          <div className="flex border-b border-primary/40 pb-2">
            <input className="bg-transparent border-none focus:ring-0 text-sm font-light w-full placeholder:text-slate-600" placeholder="Email Address" type="email" />
            <button className="material-symbols-outlined text-primary" aria-label="Subscribe">arrow_forward</button>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em]">
        <p>© 2024 Luxe Café Group. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-white transition-colors" href="#">Privacy</a>
          <a className="hover:text-white transition-colors" href="#">Terms</a>
          <a className="hover:text-white transition-colors" href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
}
