import React, { useState } from 'react';
import './style.css';

const content = {
  de: {
    nav: ['Startseite', 'Über uns', 'Referenzen', 'Leistungen', 'Kontakt'],
    header: 'Willkommen bei VGV Solutions GmbH',
    about: `Mit mehr als 20 Jahren Erfahrung (seit 1993) sind wir auf dem Markt in der Branche Arbeitnehmerüberlassung sowohl als Subunternehmer stabil präsent. Während dieses Zeitraums haben wir uns bemüht, kontinuierlich zu innovieren, uns weiterzuentwickeln und sowohl unseren Mitarbeiter suchenden Kooperationspartnern als auch unseren arbeitssuchenden Kunden stets die aktuellste und professionellste Unterstützung zu bieten, um sicherzustellen, dass Angebot und Nachfrage übereinstimmen. In einer Form, in der Sie das Gefühl haben, die gesamte Unterstützung und den fachlichen Hintergrund zu erhalten, um den richtigen Mitarbeiter oder nur den idealen Job zu finden.

Für Unternehmen können wir dank der kontinuierlichen Weiterentwicklung mit einer erheblichen Anzahl von fachlich kompetenten Kollegen, zuverlässigen, genauen und präzisen Mitarbeitern zur Verfügung stellen.`,
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
    <h2 style={{ color: "white", textAlign: "center" }}>{t.nav[1]}</h2>
    <p
      className="about-text"
      style={{ whiteSpace: 'pre-line' }}
    >
      {t.about}
    </p>
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
      {page === 'about' && (
  <section className="about-section">
    <h2 className="about-title">{t.nav[1]}</h2>
    <p className="about-text">{t.about}</p>
  </section>
)}


      <footer>
        <p>© 2025 VGV Solutions GmbH • Geschäftsführer: Víglási Gábor • Kontakt: Conradi Dániel</p>
      </footer>
    </div>
  );
}
