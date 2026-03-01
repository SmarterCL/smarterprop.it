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
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-stone-200/50 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-amber-600 flex items-center">
              <span className="material-symbols-outlined" style={{ fontSize: '38px' }}>domain</span>
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-stone-800">
              Smarterprop<span className="text-amber-600">.online</span>
            </h2>
          </div>
          <div className="flex items-center gap-8">
            <a className="hidden md:block text-sm font-semibold text-stone-600 hover:text-amber-600 transition-colors cursor-pointer">{t.propLink}</a>
            <a className="hidden md:block text-sm font-semibold text-stone-600 hover:text-amber-600 transition-colors cursor-pointer">{t.howLink}</a>

            <div className="flex items-center gap-2 bg-stone-100/80 p-1.5 rounded-full border border-stone-200/50 shadow-inner">
              <button
                onClick={() => setLang('es')}
                className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-all ${lang === 'es' ? 'bg-white shadow-sm border border-stone-200 scale-105' : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'}`}
                title="Chile (ES)"
              >
                🇨🇱
              </button>
              <button
                onClick={() => setLang('it')}
                className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-all ${lang === 'it' ? 'bg-white shadow-sm border border-stone-200 scale-105' : 'opacity-50 hover:opacity-100 grayscale hover:grayscale-0'}`}
                title="Italy (IT)"
              >
                🇮🇹
              </button>
            </div>

            <button className="bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200/50 px-7 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm hover:shadow-md">
              {t.loginBtn}
            </button>
          </div>
        </div>
      </nav>

      <section className="relative h-screen min-h-[850px] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-stone-100">
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent z-10"></div>
          <img alt="Background Tuscany" className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" />
        </div>

        <div className="relative z-20 w-full max-w-5xl px-4 flex flex-col items-center justify-center text-center mt-8">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6 drop-shadow-xl">
            {t.heroTitle} <span className="text-amber-400 drop-shadow-lg">{t.heroHighlight}</span> {t.heroTitleEnd}
          </h1>
          <p className="text-stone-100 text-lg md:text-2xl font-medium max-w-3xl mx-auto mb-14 drop-shadow-md">
            {t.heroDesc}
          </p>

          <div className="w-full max-w-5xl mx-auto bg-white/95 backdrop-blur-2xl border border-white/40 p-3 sm:p-4 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col md:flex-row gap-3 md:gap-4 mb-14">
            <div className="flex-1 flex items-center gap-3 px-6 bg-stone-100/50 hover:bg-stone-100/80 rounded-full border border-stone-200/60 focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-400/20 transition-all h-[70px]">
              <span className="material-symbols-outlined text-amber-500 text-2xl">location_on</span>
              <input className="w-full bg-transparent border-none focus:ring-0 text-stone-800 placeholder:text-stone-400 py-4 outline-none text-lg font-medium" placeholder={t.searchLoc} type="text" />
            </div>
            <div className="flex-1 flex items-center gap-3 px-6 bg-stone-100/50 hover:bg-stone-100/80 rounded-full border border-stone-200/60 focus-within:border-amber-400 focus-within:ring-2 focus-within:ring-amber-400/20 transition-all h-[70px]">
              <span className="material-symbols-outlined text-amber-500 text-2xl">home_work</span>
              <input className="w-full bg-transparent border-none focus:ring-0 text-stone-800 placeholder:text-stone-400 py-4 outline-none text-lg font-medium" placeholder={t.searchType} type="text" />
            </div>
            <button className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white h-[70px] md:h-auto px-12 rounded-full font-bold text-lg shadow-[0_10px_30px_-10px_rgba(217,119,6,0.5)] transform hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(217,119,6,0.6)] transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">search</span> {t.searchBtn}
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-amber-600 hover:bg-amber-500 text-white px-10 py-4.5 rounded-full font-bold text-lg shadow-[0_8px_25px_-8px_rgba(217,119,6,0.6)] transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3 group">
              {t.exploreBtn} <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/40 px-10 py-4.5 rounded-full font-bold text-lg transform hover:-translate-y-1 transition-all">
              {t.portfolioBtn}
            </button>
          </div>
        </div>

      </section>

      <div className="bg-white py-16 border-b border-stone-100 shadow-sm relative z-30 -mt-8 rounded-t-[3rem] max-w-[95%] mx-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <p className="text-stone-400 text-sm font-bold uppercase tracking-widest">{t.statsProps}</p>
              <p className="text-stone-800 text-4xl font-extrabold">500+</p>
              <p className="text-emerald-600 text-sm font-bold flex items-center justify-center md:justify-start gap-1"><span className="material-symbols-outlined" style={{ fontSize: '16px' }}>trending_up</span> {t.statsPropsDesc}</p>
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left md:border-l border-stone-200 md:pl-10">
              <p className="text-stone-400 text-sm font-bold uppercase tracking-widest">{t.statsInvestors}</p>
              <p className="text-stone-800 text-4xl font-extrabold">1.2k</p>
              <p className="text-emerald-600 text-sm font-bold flex items-center justify-center md:justify-start gap-1"><span className="material-symbols-outlined" style={{ fontSize: '16px' }}>trending_up</span> {t.statsInvestorsDesc}</p>
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left md:border-l border-stone-200 md:pl-10">
              <p className="text-stone-400 text-sm font-bold uppercase tracking-widest">{t.statsRoi}</p>
              <p className="text-stone-800 text-4xl font-extrabold">12.4%</p>
              <p className="text-emerald-600 text-sm font-bold flex items-center justify-center md:justify-start gap-1"><span className="material-symbols-outlined" style={{ fontSize: '16px' }}>verified</span> {t.statsRoiDesc}</p>
            </div>
            <div className="flex flex-col gap-2 text-center md:text-left md:border-l border-stone-200 md:pl-10">
              <p className="text-stone-400 text-sm font-bold uppercase tracking-widest">{t.statsValue}</p>
              <p className="text-stone-800 text-4xl font-extrabold">$2.4B</p>
              <p className="text-amber-600 text-sm font-bold flex items-center justify-center md:justify-start gap-1"><span className="material-symbols-outlined" style={{ fontSize: '16px' }}>public</span> {t.statsValueDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-32 bg-stone-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-6">
              Excellence in Real Estate
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6">{t.whyTitle}</h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto font-medium">{t.whyDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-amber-900/5 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>cloud_done</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">{t.feat1Title}</h3>
              <p className="text-stone-500 leading-relaxed font-medium">{t.feat1Desc}</p>
            </div>
            <div className="group bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-amber-900/5 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>insights</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">{t.feat2Title}</h3>
              <p className="text-stone-500 leading-relaxed font-medium">{t.feat2Desc}</p>
            </div>
            <div className="group bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:shadow-amber-900/5 hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-8 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>language</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-800 mb-4">{t.feat3Title}</h3>
              <p className="text-stone-500 leading-relaxed font-medium">{t.feat3Desc}</p>
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
