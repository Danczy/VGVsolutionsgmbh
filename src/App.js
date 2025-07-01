import React, { useState } from 'react';
import './style.css';

const content = {
  de: {
    nav: ['Startseite', 'Über uns', 'Referenzen', 'Leistungen', 'Kontakt'],
    header: 'Willkommen bei VGV Solutions GmbH',
    about: 'Wir sind spezialisiert auf Metallbau und Gebäudetechnik.',
    contact: 'Kontaktieren Sie uns über das untenstehende Formular.',
    form: {
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      message: 'Ihre Nachricht',
      send: 'Absenden'
    }
  },
  hu: {
    nav: ['Főoldal', 'Rólunk', 'Referenciák', 'Szolgáltatások', 'Kapcsolat'],
    header: 'Üdvözöljük a VGV Solutions GmbH-nál',
    about: 'Cégünk fémipari és épületgépészeti megoldásokra specializálódott.',
    contact: 'Lépjen kapcsolatba velünk az alábbi űrlapon keresztül.',
    form: {
      name: 'Név',
      email: 'Email cím',
      message: 'Üzenet',
      send: 'Küldés'
    }
  }
};

export default function App() {
  const [lang, setLang] = useState('de');
  const [currentPage, setCurrentPage] = useState('home');
  const t = content[lang];

  // Handle navigation clicks
  const handleNavClick = (index) => {
    if (index === 1) {
      // Über uns - open in new tab
      window.open('https://vg-vsolutionsgmbh.vercel.app/ueber-uns', '_blank', 'noopener,noreferrer');
    } else {
      // Set current page for internal navigation
      const pages = ['home', 'referenzen', 'leistungen', 'kontakt'];
      setCurrentPage(index < 2 ? pages[index] : pages[index - 1]);
    }
  };

  return (
    <div className="container">
      <nav>
        <div className="logo">VGV Solutions</div>
        <ul>
          {t.nav.map((item, i) => (
            <li key={i}>
              {i === 1 ? (
                <a
                  href="https://vg-vsolutionsgmbh.vercel.app/ueber-uns"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item}
                </a>
              ) : (
                <button 
                  className="nav-button"
                  onClick={() => handleNavClick(i)}
                >
                  {item}
                </button>
              )}
            </li>
          ))}
        </ul>
        <div className="lang-switch">
          <button onClick={() => setLang('de')}>DE</button>
          <button onClick={() => setLang('hu')}>HU</button>
        </div>
      </nav>

      <header>
        <h1>{t.header}</h1>
      </header>

      <section>
        <h2>{t.nav[1]}</h2>
        <p>{t.about}</p>
      </section>

      {/* Conditionally render contact section */}
      {currentPage !== 'about' && (
        <section>
          <h2>{t.nav[4]}</h2>
          <p>{t.contact}</p>
          <form>
            <input type="text" placeholder={t.form.name} />
            <input type="email" placeholder={t.form.email} />
            <textarea placeholder={t.form.message}></textarea>
            <button type="submit">{t.form.send}</button>
          </form>
        </section>
      )}

      <footer>
        <p>© 2025 VGV Solutions GmbH • Geschäftsführer: Víglási Gábor • Kontakt: Conradi Dániel</p>
      </footer>
    </div>
  );
}

