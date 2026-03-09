import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Menu() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // Framer Motion Variants for Staggered Fade In
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.main 
      className="flex flex-col flex-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img className="w-full h-full object-cover" data-alt="Moody dark coffee shop interior with warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtr2T0P31_xyfQXsvAapndUHwyv8Lu_5rADp0tEP2PDAhywTHOymBBUNcDaycoPFHt54sTS1yTPcBOm3OO9xGKGwKUpwNix5IQUTk_lhSqrUNdrBhJexBdZArAjh-EAyghLVmXHmLczWrtZkMLGRW9j_VHjMvwMEBa9D_0CBTMzZ0zk2j8tQiclWovr9nnQ_x3Z2fnSJZ4rgKREa3b2hbMkhb0xt9UBHxrZegOwxqiYbY5_S_hiGkDQdmc_Yc-rgU8JAItE83sf4A"/>
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">Seasonal Curations</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto italic">
            Experience the art of artisanal brewing and fine pastry in a sophisticated atmosphere.
          </p>
        </div>
      </section>

      {/* Menu Tabs Navigation */}
      <div className="sticky top-[73px] z-40 bg-background-light dark:bg-background-dark border-b border-primary/10">
        <div className="max-w-4xl mx-auto flex justify-center gap-12 overflow-x-auto no-scrollbar py-4 px-6">
          <a className="whitespace-nowrap flex flex-col items-center gap-1 group" href="#signature-coffees">
            <span className="text-sm font-bold text-slate-500 hover:text-primary transition-colors tracking-wide">Signature Coffees</span>
            <div className="h-0.5 w-0 group-hover:w-full bg-primary/40 transition-all rounded-full"></div>
          </a>
          <a className="whitespace-nowrap flex flex-col items-center gap-1 group" href="#artisanal-pastries">
            <span className="text-sm font-bold text-slate-500 hover:text-primary transition-colors tracking-wide">Artisanal Pastries</span>
            <div className="h-0.5 w-0 group-hover:w-full bg-primary/40 transition-all rounded-full"></div>
          </a>
          <a className="whitespace-nowrap flex flex-col items-center gap-1 group" href="#savory-bites">
            <span className="text-sm font-bold text-slate-500 hover:text-primary transition-colors tracking-wide">Savory Bites</span>
            <div className="h-0.5 w-0 group-hover:w-full bg-primary/40 transition-all rounded-full"></div>
          </a>
        </div>
      </div>

      {/* Menu Content */}
      <motion.section 
        className="max-w-5xl mx-auto py-16 px-6 lg:px-0 space-y-24 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Category: Signature Coffees */}
        <motion.div variants={itemVariants} className="space-y-10" id="signature-coffees">
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-primary/20"></div>
            <h2 className="text-3xl font-bold tracking-tight italic">Signature Coffees</h2>
            <div className="h-[1px] flex-1 bg-primary/20"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Item 1 */}
            <div className="flex gap-6 group">
              <div className="relative shrink-0 size-24 rounded-lg overflow-hidden border border-primary/10">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Gourmet espresso with gold leaf garnish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvBk7Fk3aNMLU8ZazTJY5yaFgaHeyuqDYxn-mu6xSahPH_yPVqm-tBkEUx_1vOFvN0AtGMpDbJIrye34wXEioZn-le6_FZQfp0w8P7D8JknIVDnJr3-sN6ebxKSliXkbGfAIV4WBawaOjB25T3FYxje6ei4hU0Sc2UB4Ggdd_eKgCTLv3uROil9zTJQCiYrZOUf0nMfjodkjwx1ysv8QrUCvIEVPS-lsDa2Dk7v6tb8HDvwZFaJk7W6-Wkc3ix47PaWSCd5HvDpd0"/>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold">Gold Leaf Espresso</h3>
                  <span className="text-primary font-bold">$12.00</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm italic leading-relaxed">
                  Double shot of single-origin arabica topped with 24k edible gold flakes.
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex gap-6 group">
              <div className="relative shrink-0 size-24 rounded-lg overflow-hidden border border-primary/10">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Creamy velvet latte in a glass" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArTlvtRWpO_C9xOK6LPT2s1rcP1JMcUQG9PWsj-w8ri6eFCG8cEi9JePm6mOzQTXCrQPZQL2J8DD28sL-UTcCzNkL7thklZR28N8h-8PzRAyoDzbKsFHiEDWVB3ezGpqmC7P9DH0rz-TPB2nEPjPTYolMHD4-ugSKBs-oXUJC5YMiZ0ZzMDHRrxYkESDAuuFny1CO8QcnjigFbGEU5THLbp22uftwkqKVh8B8kWAcTaZe35heirqwGXagqAjyxXOXEcZve4b242cY"/>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold">Velvet Cream Latte</h3>
                  <span className="text-primary font-bold">$9.50</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm italic leading-relaxed">
                  Smooth steamed milk over dark roast, finished with vanilla bean foam.
                </p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex gap-6 group">
              <div className="relative shrink-0 size-24 rounded-lg overflow-hidden border border-primary/10">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Cold brew coffee with layered milk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfYkI3CxOXPd6r7_pJVwKX2UXLyx2wwaJLmA1s7Eme3YtaSZEqIWuKETvF6C5IF9h_sylI2jMA9iDmtU_iEELFmw-Ech7tPsU1lFbmAs6x1vsl9CQSZNfBMAF5R3WnJk-4DMoviqp0BFvc2BVFUf19LDkZBsmT4kpCuaZRJnSrYVEmSjGNvB3GhxvPoIwY2IpcwHAUbe1bBhRavefDWdd2g2vdUWtVg0dfISkDzUMNGPe_4jQrnMwjht2NhT2CzOX9-3wa4u2NUAY"/>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold">Midnight Cold Brew</h3>
                  <span className="text-primary font-bold">$10.00</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm italic leading-relaxed">
                  24-hour steeped cold brew with hints of cocoa and toasted hazelnut.
                </p>
              </div>
            </div>
            {/* Item 4 */}
            <div className="flex gap-6 group">
              <div className="relative shrink-0 size-24 rounded-lg overflow-hidden border border-primary/10">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Artistic mocha with chocolate drizzles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqkNtgLtc_0HopkZltn_LU8Zvur2ETxcTiJGXAY7iFjCjmYk2HvodTvZ-jvyu4Fp1Eu0eB2Dfz775vjib07KXhqjsk5-AzgCVRB_hx53K1-A1XcZmVq3-0o4QyEkDCmwyW7TmgPCupQdS5NUp0kYe0gNwkY8T7TdPrsFnxQ4zxb4QgSWsnKX-Gq_KQky11nezMXlQuScDROGWgd_l35WWqmcd5RpYYj3JIz-DbwBVAXAs3vmDVdBuN6yHsbWSWU0dzOdZJ8Qp3amQ"/>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold">Truffle Mocha</h3>
                  <span className="text-primary font-bold">$11.00</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm italic leading-relaxed">
                  Rich Belgian dark chocolate, espresso, and a hint of white truffle oil.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Featured Image Break */}
        <motion.div variants={itemVariants} className="w-full h-[300px] rounded-xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-colors group-hover:bg-transparent"></div>
          <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" data-alt="Luxurious pastry display in a dark cafe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBon8RLgyNmmkxaNDHPXX29Vefr0iV5_JC9qO-E8Fa4ww-AD-oxijRLGqPOZrcoEaWujXEn5s41BWZiDVfqhob2Hqcg82FaZoH3uMw6tDRw8nHyO35_3NVB9645OG93u9e_KRtfxn3yj8kB2FsTVtbmb2lYQloRRq1EWT8NP3JltqV3mdBBY7cy7LrgNSYq_JjkhwiDs8JKL_zf8CGJHfglTMukoAEBPguD0sIYXRLGISMx_toOeXefvwUQqB7qsSsuUAfR5B_Wz1E"/>
          <div className="absolute bottom-8 left-8 text-white z-10">
            <p className="text-xs uppercase tracking-[0.3em] font-bold mb-2">Baked Fresh Daily</p>
            <h3 className="text-3xl font-bold tracking-tight italic">Artisan Mastery</h3>
          </div>
        </motion.div>

        {/* Category: Artisanal Pastries */}
        <motion.div variants={itemVariants} className="space-y-10" id="artisanal-pastries">
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-primary/20"></div>
            <h2 className="text-3xl font-bold tracking-tight italic">Artisanal Pastries</h2>
            <div className="h-[1px] flex-1 bg-primary/20"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Item 1 */}
            <div className="flex gap-6 group">
              <div className="relative shrink-0 size-24 rounded-lg overflow-hidden border border-primary/10">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Golden flaky butter croissant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwalmA1eDtIqy-q2NDcWEqAsiTwyHmjk8t_jLaYqxEVEdFS_6rDr0LgDplHSNvSgFXmMQTmalmd5HeAo_enlrEo8CUlw66acX_jwpSb_DfejE1ffGn6r4soDdZfZMlw37quiRF-4Vb7nRRVDpgIqJOelopCQSiolfi0G6XgCrbPgykhcdwKsd9nekv7wrRW7xf95Z5XXCW7U9_KELMU2Fizn5rFZJIzByiBOfbISbV-YlespPha2i4GylvrUpqR9uXuzXSns8Bdvw"/>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold">Golden Croissant</h3>
                  <span className="text-primary font-bold">$7.50</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm italic leading-relaxed">
                  48-hour fermented dough with premium French AOP butter.
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex gap-6 group">
              <div className="relative shrink-0 size-24 rounded-lg overflow-hidden border border-primary/10">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Elegant chocolate tart with berries" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG1fh4aF21XtK3lZK9ksiK8s2_P43OIzX-Ccdn1a5wO_cOJkfLNvRhDYLbXn8MyCGc4RQh1aKgw7Xgkohd3ZXUinncVel0nLd5_oUa83WMZVEY_JFjGS8gFGPB0Ae860yY53kqXP_qumA1LKy9lVnlr14hcjrstgKHajHkspJle5M2v3rnmkPhGIlPDihoeXRZubfpgYVx7bG_lCZ-l55__32s7JKGWHSMEgiUfZXArU0BiAzjGCXdQ2U7foAlMXA5D1DDZ98Uvm8"/>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold">Ruby Berry Tart</h3>
                  <span className="text-primary font-bold">$14.00</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm italic leading-relaxed">
                  Ruby chocolate ganache, fresh seasonal berries, and gold dust.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category: Savory Bites */}
        <motion.div variants={itemVariants} className="space-y-10" id="savory-bites">
          <div className="flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-primary/20"></div>
            <h2 className="text-3xl font-bold tracking-tight italic">Savory Bites</h2>
            <div className="h-[1px] flex-1 bg-primary/20"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Item 1 */}
            <div className="flex gap-6 group">
              <div className="relative shrink-0 size-24 rounded-lg overflow-hidden border border-primary/10">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Avocado toast with poached egg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjgF-Tr22fthFEYU4uoNGL_xyWFMaHoAUKikiaKexGXQYco_hqi7_YFCbt2Nf-vpuo1z_ICbuyBIn3WwWzI0Z1FSIxEmsncakPRWWgpnjUXnEe_JpoknHHpT8r-pRs8Ys6duQRtA76N0lHYkacC5j0owi0I_G7LeNW-ykb5iyTbzE8zUvQ3Ap3lgtiQHrjgRhSC2rDKACn6QKvimn-FS00-zqrM4W13SfupULeU5aGEw8lc9rGKiOm0RbJifJM_ee6KC92Rf-_9sk"/>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold">Heirloom Tartine</h3>
                  <span className="text-primary font-bold">$18.50</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm italic leading-relaxed">
                  Smashed avocado, heirloom tomatoes, and aged balsamic on sourdough.
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex gap-6 group">
              <div className="relative shrink-0 size-24 rounded-lg overflow-hidden border border-primary/10">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Smoked salmon on artisanal bagel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqr4qt_jllxG0BLG8ODz2uT7I-dBAmrk3gaF8An-F5ff_vMepeyszWzU9rvqxx2__8fB8fXP7On6RP46tELZmzB4J79voE6SS1PPgMrPLagSfw-3S1Lp4rNnAPfpDKN_ThcDu4kH5TeJCBPdLPmSSWzPzi65SR_3pFK8QLYi90fyzWzoN3RS6x33i_KBDIvFpxg_-peNEGq7IGKnGgILL7VFxQbDYAQ8JHwTjhHg7mFu89Njo3WJd8_K9mboXnuWhBhC2qBS_gb6I"/>
              </div>
              <div className="flex flex-col justify-center flex-1">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-lg font-bold">Nordic Salmon Plate</h3>
                  <span className="text-primary font-bold">$22.00</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm italic leading-relaxed">
                  Cured salmon, whipped lemon ricotta, capers, and fresh dill.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        className="bg-primary/5 py-20 px-6 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold italic tracking-tight">Join the Inner Circle</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            Be the first to know about our limited-edition curations and private tasting events.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 rounded-lg border-primary/20 bg-background-light dark:bg-background-dark px-4 py-3 focus:border-primary focus:ring-primary" placeholder="Email Address" type="email"/>
            <button className="bg-primary text-white font-bold px-8 py-3 rounded-lg hover:bg-primary/90 transition-all uppercase text-sm tracking-[0.2em]">Subscribe</button>
          </form>
        </div>
      </motion.section>
    </motion.main>
  );
}
