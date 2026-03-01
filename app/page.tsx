"use client"
import React, { useState } from 'react'

const dict = {
  es: {
    domain: "Smarterprop.cl",
    propLink: "Propiedades",
    howLink: "Cómo funciona",
    loginBtn: "Acceder",
    heroPre: "Plataforma SaaS de Nueva Generación",
    heroTitle: "Smarterprop.online: Tu",
    heroHighlight: "Cloud Incubator",
    heroTitleEnd: "para Real Estate",
    heroDesc: "Experimenta el futuro de las inversiones inmobiliarias de alto nivel. Usa nuestra inteligencia en la nube para escalar tu portafolio con precisión.",
    exploreBtn: "Explorar Inversiones",
    portfolioBtn: "Ver Portafolio",
    searchLoc: "Ubicación (ej. Santiago, Toscana)",
    searchType: "Tipo de propiedad (ej. Departamento histórico)",
    searchBtn: "Buscar",
    statsProps: "Propiedades",
    statsPropsDesc: "+5% este mes",
    statsInvestors: "Inversores",
    statsInvestorsDesc: "+12% crecimiento",
    statsRoi: "ROI Promedio",
    statsRoiDesc: "Rendimiento Verificado",
    statsValue: "Valor de Activos",
    statsValueDesc: "Alcance Global",
    whyTitle: "¿Por qué Smarterprop?",
    whyDesc: "Combinamos tecnología cloud de nivel institucional con profunda experiencia en el sector inmobiliario.",
    feat1Title: "Gestión Cloud",
    feat1Desc: "Transparencia total con nuestro dashboard en tiempo real. Monitorea cada centavo desde tu celular o escritorio.",
    feat2Title: "Data-Driven Alpha",
    feat2Desc: "Nuestros modelos de IA identifican activos subvalorados antes de que lleguen al mercado abierto.",
    feat3Title: "Acceso Global",
    feat3Desc: "Invierte en propiedades premium en mercados globales sin complicaciones de burocracia local.",
    footerText: "El futuro del sector inmobiliario está aquí.",
    privacy: "Privacidad",
    terms: "Términos",
    contact: "Contacto"
  },
  it: {
    domain: "Smarterprop.it",
    propLink: "Proprietà",
    howLink: "Come funziona",
    loginBtn: "Accedi",
    heroPre: "Piattaforma SaaS di Nuova Generazione",
    heroTitle: "Smarterprop.online: Il tuo",
    heroHighlight: "Cloud Incubator",
    heroTitleEnd: "per il Real Estate",
    heroDesc: "Sperimenta il futuro degli investimenti immobiliari di alto livello. Sfrutta la nostra intelligenza cloud per scalare il tuo portafoglio immobiliare con precisione.",
    exploreBtn: "Esplora Investimenti",
    portfolioBtn: "Visualizza Portfolio",
    searchLoc: "Località (es. Toscana, Lombardia, Firenze)",
    searchType: "Tipo di proprietà (es. Appartamento storico)",
    searchBtn: "Cerca",
    statsProps: "Proprietà Gestite",
    statsPropsDesc: "+5% questo mese",
    statsInvestors: "Investitori Attivi",
    statsInvestorsDesc: "+12% crescita",
    statsRoi: "ROI Annuo Medio",
    statsRoiDesc: "Rendimento Verificato",
    statsValue: "Valore Asset",
    statsValueDesc: "Portata Globale",
    whyTitle: "Perché Smarterprop?",
    whyDesc: "Combiniamo la tecnologia cloud di livello istituzionale con una profonda esperienza nel settore immobiliare per offrire un'esperienza di investimento senza pari.",
    feat1Title: "Gestione Cloud",
    feat1Desc: "Sperimenta la massima trasparenza con la nostra dashboard in tempo reale. Monitora ogni centesimo e ogni traguardo dal tuo cellulare o desktop.",
    feat2Title: "Alpha Basata sui Dati",
    feat2Desc: "I nostri modelli AI identificano asset sottovalutati prima che arrivino sul mercato aperto, garantendo rendimenti d'investimento leader di mercato.",
    feat3Title: "Accesso Globale",
    feat3Desc: "Investi in proprietà premium nei principali mercati globali senza le complicazioni della burocrazia locale o delle complessità legali.",
    footerText: "Il futuro del settore immobiliare è qui.",
    privacy: "Privacy",
    terms: "Termini",
    contact: "Contatti"
  }
}

export default function Home() {
  const [lang, setLang] = useState<'es' | 'it'>('es')
  const t = dict[lang]

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-primary flex items-center">
              <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>domain</span>
            </div>
            <h2 className="text-xl font-bold tracking-tight text-slate-100">
              Smarterprop<span className="text-primary">.online</span>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <a className="hidden md:block text-sm font-medium hover:text-primary transition-colors cursor-pointer">{t.propLink}</a>
            <a className="hidden md:block text-sm font-medium hover:text-primary transition-colors cursor-pointer">{t.howLink}</a>

            <div className="flex items-center gap-2 bg-slate-800/50 p-1 rounded-lg border border-slate-700">
              <button
                onClick={() => setLang('es')}
                className={`w-8 h-8 rounded shrink-0 flex items-center justify-center transition-all ${lang === 'es' ? 'bg-primary/20 border border-primary/50' : 'opacity-50 hover:opacity-100'}`}
                title="Chile (ES)"
              >
                🇨🇱
              </button>
              <button
                onClick={() => setLang('it')}
                className={`w-8 h-8 rounded shrink-0 flex items-center justify-center transition-all ${lang === 'it' ? 'bg-primary/20 border border-primary/50' : 'opacity-50 hover:opacity-100'}`}
                title="Italy (IT)"
              >
                🇮🇹
              </button>
            </div>

            <button className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 px-6 py-2 rounded-lg font-bold text-sm transition-all">
              {t.loginBtn}
            </button>
          </div>
        </div>
      </nav>

      <section className="relative h-screen min-h-[700px] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-gradient z-10"></div>
          <img alt="Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" />
        </div>

        <div className="relative z-20 max-w-5xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t.heroPre}
          </div>
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            {t.heroTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r">{t.heroHighlight}</span> {t.heroTitleEnd}
          </h1>
          <p className="text-slate-300 text-lg md:text-xl font-normal max-w-2xl mx-auto mb-10">
            {t.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 group">
              {t.exploreBtn} <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all">
              {t.portfolioBtn}
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 z-30">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 p-3 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center px-4 bg-slate-800/50 rounded-xl border border-slate-700 focus-within:border-primary transition-colors">
              <span className="material-symbols-outlined text-slate-400">location_on</span>
              <input className="w-full bg-transparent border-none focus:ring-0 text-slate-100 placeholder:text-slate-500 py-4 outline-none" placeholder={t.searchLoc} type="text" />
            </div>
            <div className="flex-1 flex items-center px-4 bg-slate-800/50 rounded-xl border border-slate-700 focus-within:border-primary transition-colors">
              <span className="material-symbols-outlined text-slate-400">home_work</span>
              <input className="w-full bg-transparent border-none focus:ring-0 text-slate-100 placeholder:text-slate-500 py-4 outline-none" placeholder={t.searchType} type="text" />
            </div>
            <button className="bg-primary hover:bg-blue-600 text-white h-full px-8 py-4 md:py-0 rounded-xl font-bold transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">search</span> {t.searchBtn}
            </button>
          </div>
        </div>
      </section>

      <div className="bg-background-dark py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-1 text-center md:text-left">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{t.statsProps}</p>
              <p className="text-slate-100 text-3xl font-bold">500+</p>
              <p className="text-emerald-400 text-xs font-bold flex items-center justify-center md:justify-start gap-1"><span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_up</span> {t.statsPropsDesc}</p>
            </div>
            <div className="flex flex-col gap-1 text-center md:text-left border-l border-slate-800 md:pl-8">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{t.statsInvestors}</p>
              <p className="text-slate-100 text-3xl font-bold">1.2k</p>
              <p className="text-emerald-400 text-xs font-bold flex items-center justify-center md:justify-start gap-1"><span className="material-symbols-outlined" style={{ fontSize: '14px' }}>trending_up</span> {t.statsInvestorsDesc}</p>
            </div>
            <div className="flex flex-col gap-1 text-center md:text-left border-l border-slate-800 md:pl-8">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{t.statsRoi}</p>
              <p className="text-slate-100 text-3xl font-bold">12.4%</p>
              <p className="text-emerald-400 text-xs font-bold flex items-center justify-center md:justify-start gap-1"><span className="material-symbols-outlined" style={{ fontSize: '14px' }}>verified</span> {t.statsRoiDesc}</p>
            </div>
            <div className="flex flex-col gap-1 text-center md:text-left border-l border-slate-800 md:pl-8">
              <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{t.statsValue}</p>
              <p className="text-slate-100 text-3xl font-bold">$2.4B</p>
              <p className="text-primary text-xs font-bold flex items-center justify-center md:justify-start gap-1"><span className="material-symbols-outlined" style={{ fontSize: '14px' }}>public</span> {t.statsValueDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 bg-background-dark px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-slate-100 mb-4">{t.whyTitle}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">{t.whyDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>cloud_done</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{t.feat1Title}</h3>
              <p className="text-slate-400 leading-relaxed">{t.feat1Desc}</p>
            </div>
            <div className="group bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>insights</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{t.feat2Title}</h3>
              <p className="text-slate-400 leading-relaxed">{t.feat2Desc}</p>
            </div>
            <div className="group bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>language</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">{t.feat3Title}</h3>
              <p className="text-slate-400 leading-relaxed">{t.feat3Desc}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <a className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform" href="#" title="WhatsApp Support">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" style={{ width: '32px', height: '32px' }}>
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.284l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.768-5.764-5.768zm3.393 8.21c-.146.415-.844.762-1.156.81-.283.044-.648.077-1.048-.049-.24-.075-.544-.176-1.129-.427-1.189-.512-1.956-1.721-2.015-1.8-.059-.08-1.012-1.345-1.012-2.566 0-1.22.643-1.819.871-2.064.228-.244.498-.306.664-.306s.332.002.477.01c.153.008.358-.058.558.427.203.489.696 1.7.758 1.826.062.127.104.275.021.442-.083.167-.125.271-.249.415-.125.144-.262.321-.374.43-.125.121-.256.255-.11.505.146.251.649 1.07 1.391 1.731.952.849 1.756 1.112 2.006 1.236.25.124.394.103.541-.064.146-.167.623-.726.789-.974.166-.248.332-.209.56-.124.228.084 1.445.682 1.694.807s.415.188.477.297c.062.109.062.634-.084 1.049z"></path>
          </svg>
        </a>
        <a className="w-14 h-14 bg-[#0088cc] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform" href="#" title="Telegram Channel">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" style={{ width: '32px', height: '32px' }}>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.35-.01-1.02-.2-1.52-.37-.61-.21-1.1-.32-1.05-.67.02-.18.27-.37.75-.56 2.93-1.27 4.88-2.11 5.86-2.51 2.81-1.16 3.39-1.36 3.77-1.37.08 0 .27.02.39.12.1.08.13.19.14.27.01.06.01.24 0 .38z"></path>
          </svg>
        </a>
      </div>

      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="text-primary flex items-center">
              <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>domain</span>
            </div>
            <h2 className="text-lg font-bold tracking-tight text-slate-100">
              Smarterprop<span className="text-primary">.online</span>
            </h2>
          </div>
          <p className="text-slate-500 text-sm">© 2024 Smarterprop.online. {t.footerText}</p>
          <div className="flex gap-6 text-slate-400">
            <a className="hover:text-primary transition-colors cursor-pointer">{t.privacy}</a>
            <a className="hover:text-primary transition-colors cursor-pointer">{t.terms}</a>
            <a className="hover:text-primary transition-colors cursor-pointer">{t.contact}</a>
          </div>
        </div>
      </footer>
    </>
  )
}
