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
  const [page, setPage] = useState('home');
  const t = content[lang];

  // Menüponthoz tartozó oldalnevek
  const pageKeys = ['home', 'about', 'referenzen', 'leistungen', 'kontakt'];

  return (
    <div className="container">
      <nav>
        <div className="logo">VGV Solutions</div>
        <ul>
          {t.nav.map((item, i) => (
            <li key={i}>
              <button
                className="nav-button"
                onClick={() => setPage(pageKeys[i])}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                  padding: 0,
                  font: 'inherit'
                }}
              >
                {item}
              </button>
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

      {/* Tartalom oldalanként */}
      {page === 'home' && (
        <section>
          <h2>{t.nav[0]}</h2>
          <p>{t.header}</p>
        </section>
      )}

      {page === 'about' && (
        <section>
          <h2>{t.nav[1]}</h2>
          <p>{t.about}</p>
        </section>
      )}

      {page === 'referenzen' && (
        <section>
          <h2>{t.nav[2]}</h2>
          <p>Referenciáink / Referenzen tartalom ide jön.</p>
        </section>
      )}

      {page === 'leistungen' && (
        <section>
          <h2>{t.nav[3]}</h2>
          <p>Szolgáltatásaink / Leistungen tartalom ide jön.</p>
        </section>
      )}

      {/* A kontakt szekció CSAK akkor jelenik meg, ha NEM az about oldalon vagy */}
      {page !== 'about' && (
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

