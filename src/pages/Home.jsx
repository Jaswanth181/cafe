import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main 
      className="flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/60 via-transparent to-background-dark z-10"></div>
          <img
            alt="High-fashion coffee pour in luxury setting"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1B_HQ92PNN40E92IC712BwDxtUYfe8MDtn2L53cOmzA__zuumeD5Zj2nWFiIwMoQvri-L9QlKRittMpi0Q6o8OS1sZ7mwf7N-Qnc4VJMY8b3g7JlShyAh9ZqyDXQZEIfEWX35RWsVWnKJBUVKgYWe0HyEvzVygZ79WuH4ESpM2K2-4TY9xiGUHhDk6D0pD2WntA_oN-Zs9WOPhL2Y50XKJ0SXDGDxHTYS2Hrp4ka90wY-4gcsiFQrNluDcoPIYL2ykQXsHWXKJAY"
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl mx-auto">
          <span className="text-primary tracking-[0.4em] uppercase text-sm mb-6 block font-light">The Art of the Brew</span>
          <h2 className="text-5xl md:text-8xl font-display italic serif-thin text-white leading-tight mb-8">
            Elevated Rituals
          </h2>
          <p className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Where high fashion meets the morning cup. Experience artisanal excellence in an atmosphere designed for the discerning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/menu" className="bg-primary text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-primary/90 transition-all w-full sm:w-auto">
              Full Menu
            </Link>
            <button className="border border-white/40 text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-white/10 transition-all w-full sm:w-auto backdrop-blur-sm">
              Private Events
            </button>
          </div>
        </div>
      </section>

      {/* Featured Curations Grid */}
      <section className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h3 className="text-primary tracking-widest uppercase text-xs mb-4">Seasonal Curations</h3>
            <h4 className="text-4xl md:text-5xl font-display italic leading-tight text-slate-900 dark:text-slate-100">Signature Creations</h4>
          </div>
          <p className="text-slate-500 dark:text-slate-400 font-light max-w-sm">
            Each item is handcrafted by our master baristas and pastry chefs using ingredients sourced from the world's most exclusive estates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800">
              <img
                alt="Signature Gold Latte"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNRvWjV7tKNU7YjkfiyBnT7v_vWOLZy0GCcNNNU445CglxPvbPpOH1GhJvnq5XWHIJlVqGVb1-RjNS-ifbIwnBCs0uhCpxF_w4YlOjnQ-TGDpOop5l_gcQMT987RFnHyn12dqjtWiGYtkgV33knPYUxAuxGpXqVdiFwZj9YrS2Z846dfqgpkYMK-dwFx-DwiXYrAzDigqMiNOEyFy813C6niXPOXYeze-WVq8CSAWhana3iKmkndmM4-TzdKFd1xVka6Ax_4RCxLI"
              />
              <div className="absolute inset-0 bg-background-dark/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h5 className="text-lg font-display italic text-slate-900 dark:text-slate-100">Signature Gold Latte</h5>
                <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">24k Leaf • Madagascar Vanilla</p>
              </div>
              <span className="text-primary font-light">$18</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800">
              <img
                alt="Velvet Croissant"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW-sBc3Q26pf_8v_X66XnNOjDr2jzFGd4kKFWPwXa_NaGz5eNrtV5AF6Q8wQCY2kAMizMbOkj4MAsMSNpm09c75DkvsJ4buipsfcl7lwQ9jQX2F9nMwtdxEVPvjGxrwQh4jYGaXNwQS1NWzg_Zzj9W23uFlIg4PFAwNIxoMYe3lR6z6ovb8CPAoZPulSLNTa01nb731Rl_lQDCA_uuzdCpV4nEllLEGfi_sxjTVfXoT1HpGxJJmfZ-bzyDuZ7DnxrmoYnIm_833o8"
              />
              <div className="absolute inset-0 bg-background-dark/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h5 className="text-lg font-display italic text-slate-900 dark:text-slate-100">Midnight Velvet Croissant</h5>
                <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">Activated Charcoal • Dark Ganache</p>
              </div>
              <span className="text-primary font-light">$14</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-slate-100 dark:bg-slate-800">
              <img
                alt="Dark Truffle Mocha"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsDHAZDhFrOLiTwNtUJkdSlbtOX1Xeax0aK9iIvmITbRLQGFak1pRgDEcWU4SfNP0r9-dcLjZ7BZnETyFp8Wfajd7xwu33ort2IaoKJYzZpooTLfLllZ9-QbhGfb94-C-lqchLMLYxW9GO3pY5NY-qepxfgpWF0DQq-TopFViYeXETBG4DnoATasqv5ZKM1CTfflNNLubhMAqel-q-QYcRRBKdnh1qCieZ25Yc3A-fDAsjqImqmXC8nWy-VUyacH62-CUtHmQTMHY"
              />
              <div className="absolute inset-0 bg-background-dark/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h5 className="text-lg font-display italic text-slate-900 dark:text-slate-100">Dark Truffle Mocha</h5>
                <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">Winter Truffle • 85% Cacao</p>
              </div>
              <span className="text-primary font-light">$22</span>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-primary/5 dark:bg-primary/10 py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              alt="Interior Design"
              className="w-full h-[600px] object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhunfn-BFNfImyC8SaFT8WufKn5vYeEEXHj60Lm8ZOx82hiuwJFQeoAdrVerkyCCoYEAHpPq_xdYp6w85mfbr9_F2bzulXv4e1rJ47Y1sqJdJdcAeIbBJDLrXuftTB-0ofRnoeoV8XBIrunoDi3w1ezueeogSqTlH7Cs3kVcck-EluClGhlkdXk624gfUSOUls1ASLpb_KzMBZMiDNvgfByMmexCiG2XioPFjZ_AWLTTU4hfx07eEvMzlnkv1LvcekGm4h7NpCgfM"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h3 className="text-primary tracking-widest uppercase text-xs">Our Heritage</h3>
            <h4 className="text-5xl font-display serif-thin text-slate-900 dark:text-slate-100 italic leading-tight">Beyond the Bean</h4>
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed text-lg">
              Founded on the principle that coffee should be an experience as refined as haute couture. Luxe Café bridges the gap between culinary artistry and high-end design, creating a sanctuary for those who appreciate the finer details of life.
            </p>
            <div className="pt-4">
              <a className="inline-flex items-center gap-4 text-primary group uppercase tracking-[0.2em] text-xs font-medium" href="#">
                Discover Our Story
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
