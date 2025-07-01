import React, { useState } from 'react';
import './style.css';

const content = {
  de: {
    nav: ['Startseite', 'Über uns', 'Referenzen', 'Leistungen', 'Kontakt'],
    header: 'Willkommen bei VGV Solutions GmbH',
    about: `Mit mehr als 20 Jahren Erfahrung (seit 1993) sind wir auf dem Markt in der Branche Arbeitnehmerüberlassung sowohl als Subunternehmer stabil präsent. Während dieses Zeitraums haben wir uns bemüht, kontinuierlich zu innovieren, uns weiterzuentwickeln und sowohl unseren Mitarbeiter suchenden Kooperationspartnern als auch unseren arbeitssuchenden Kunden stets die aktuellste und professionellste Unterstützung zu bieten, um sicherzustellen, dass Angebot und Nachfrage übereinstimmen. In einer Form, in der Sie das Gefühl haben, die gesamte Unterstützung und den fachlichen Hintergrund zu erhalten, um den richtigen Mitarbeiter oder nur den idealen Job zu finden.

Für Unternehmen können wir dank der kontinuierlichen Weiterentwicklung mit einer erheblichen Anzahl von fachlich kompetenten Kollegen, zuverlässigen, genauen und präzisen Mitarbeitern zur Verfügung stellen.

Warum sollten Sie sich für die VGV Solutions GmbH entscheiden?

Unsere Kollegen verfügen über einen hervorragenden beruflichen Hintergrund, Erfahrung und ein hohes Maß an Kenntnissen des sich ständig ändernden Arbeitsmarktes und Arbeitsrechts sowie über alle erforderlichen aktuellen Informationen.

Wir passen unsere Qualitätsdienstleistungen vollständig an die individuellen Bedürfnisse unserer Kunden an. Wir werden gemeinsam sowohl individuelle als auch gewünschte Bedürfnisse bewerten und dann in einer persönlichen Beratung die für Sie am besten geeignete Lösung finden.

Wir bemühen uns, ein Vertrauensverhältnis sowohl zu unseren kooperierenden Partnerunternehmen als auch zu unseren Mitarbeitern aufzubauen, da wir der Ansicht sind, dass dies die wichtigste Grundlage für eine erfolgreiche Zusammenarbeit ist.

Wir unterstützen, organisieren, führen und überwachen den gesamten Auswahlprozess. Sie haben keinen extra Aufgaben damit.`,
    services: `Wir können für Sie unsere freien Kapazitäten in folgenden Bereichen anbieten:

• Elektroarbeiten
• Elektriker
• Elektrotechniker
• Kabelzieher
• Solarmodul Installateur
• Elektroinstallation

• Stahlindustrie
• Schlosser
• Schweisser mit Prüfung (MAG,WIG,Autogen)
• Vorrichter
• Installateur für Lufttechnik
• Metallbaukonstruktion
• Industrieservice

Gebäudetechnik
• Trockenbau
• Sanitärbau
• Plattenisolierung und Reparatur
• Reparatur und Bau von Geberit Systemen
• Bau von Wasser- und Heizungsanlagen

Sonstige Arbeiten
• Malerarbeit
• Stahlbetonbauer
• Operatoren/Helfer
• Maschienenführer
• Punktuelle und komplette Abbrucharbeiten im Bereich Mauerwerk, Stahlbau und Trockenarchitektur
• Industrielle Reinigung`,
    contactDetails: `VGV Solutions GmbH
93073 Neutraubling
Pommernstr. 19
vgvsolutionsgmbh@gmail.com
+49 (0) 173 6319 456

Geschäftsführer: Gábor Víglási`,
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
    about: `Több mint 20 év tapasztalattal (1993 óta) stabilan jelen vagyunk a piacon az alkalmazotti közvetítés területén, mint alvállalkozó. Ez idő alatt folyamatosan innováltunk, fejlődtünk, és mind a munkatársakat kereső partnercégeknek, mind a munkát kereső ügyfeleinknek mindig a legfrissebb és legprofesszionálisabb támogatást nyújtottuk, hogy az ellátás és a kereslet egyeztethető legyen. Olyan formában, ahol úgy érzi, hogy teljes körű támogatást és szakmai hátteret kap a megfelelő munkatárs vagy csak az ideális állás megtalálásához.

Vállalatok számára a folyamatos fejlesztésnek köszönhetően jelentős számú szakmailag képzett, megbízható, pontos és precíz munkatársat tudunk biztosítani.

Miért válassza a VGV Solutions GmbH-t?

Munkatársaink kiváló szakmai háttérrel, tapasztalattal és magas szintű ismerettel rendelkeznek a folyamatosan változó munkaerőpiacról és munkaügyi jogszabályokról, valamint minden szükséges aktuális információval.

Minőségi szolgáltatásainkat teljes mértékben az ügyfeleink egyéni igényeihez igazítjuk. Közösen értékeljük ki mind az egyéni, mind a kívánt igényeket, majd egy személyes konzultáció során megtaláljuk Önnek leginkább megfelelő megoldást.

Igyekszünk bizalmi kapcsolatot kiépíteni mind az együttműködő partnervállalatokkal, mind a munkatársainkkal, mert úgy véljük, hogy ez a legsikeresebb együttműködés alapja.

Támogatjuk, szervezzük, vezetjük és felügyeljük a teljes kiválasztási folyamatot. Önnek nem lesz extra feladata ezzel kapcsolatban.`,
    services: `Szabad kapacitásainkat az alábbi területeken tudjuk Önöknek felajánlani:

• Elektromos munkák
• Villanyszerelő
• Elektrotechnikus
• Kábelehúzó
• Napelem telepítő
• Elektromos szerelések

• Acélipar
• Lakatos
• Hegesztő vizsgával (MAG, WIG, Autogén)
• Előkészítő
• Légtechnikai szerelő
• Fémépítési szerkezetek
• Ipari szolgáltatások

Épületgépészet
• Gipszkartonozás
• Víz- és csatornaszerelés
• Lapkaszigetelés és javítás
• Geberit rendszerek javítása és építése
• Víz- és fűtési rendszerek építése

Egyéb munkák
• Festőmunka
• Vasbetonszerelő
• Operátorok/Segédmunkások
• Gépkezelők
• Pontos és teljes bontási munkák téglafal, acélszerkezet és gipszkarton területen
• Ipari takarítás`,
    contactDetails: `VGV Solutions GmbH
93073 Neutraubling
Pommernstr. 19
vgvsolutionsgmbh@gmail.com
+49 (0) 173 6319 456

Ügyvezető: Víglási Gábor`,
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

  // Oldalak definiálása
  const pages = ['home', 'about', 'referenzen', 'leistungen', 'kontakt'];

  return (
    <div className="container">
      <nav>
        <div className="logo">VGV Solutions</div>
        <ul>
          {t.nav.map((item, i) => (
            <li key={i}>
              <button
                className="nav-button"
                onClick={() => setPage(pages[i])}
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

      <div className="content">
        {/* Főoldal */}
        {page === 'home' && (
          <section className="page-section">
            <h1 className="main-title">{t.header}</h1>
          </section>
        )}

        {/* Rólunk/Über uns */}
        {page === 'about' && (
          <section className="page-section">
            <div className="text-container">
              <h2 className="section-title">{t.nav[1]}</h2>
              <p className="section-text">{t.about}</p>
            </div>
          </section>
        )}

        {/* Referenciák */}
        {page === 'referenzen' && (
          <section className="page-section">
            <div className="text-container">
              <h2 className="section-title">{t.nav[2]}</h2>
              <p className="section-text">Referenzen-Inhalte kommen hier...</p>
            </div>
          </section>
        )}

        {/* Szolgáltatások/Leistungen */}
        {page === 'leistungen' && (
          <section className="page-section">
            <div className="text-container">
              <h2 className="section-title">{t.nav[3]}</h2>
              <p className="section-text">{t.services}</p>
            </div>
          </section>
        )}

        {/* Kapcsolat/Kontakt */}
        {page === 'kontakt' && (
          <section className="page-section">
            <div className="text-container">
              <h2 className="section-title">{t.nav[4]}</h2>
              
              <div className="contact-details">
                <pre>{t.contactDetails}</pre>
              </div>
              
              <div className="form-section">
                <p className="section-text">{t.contact}</p>
                <form action="mailto:c.daniel.vgvgmbh@gmail.com" method="post" encType="text/plain">
                  <input type="text" name="name" placeholder={t.form.name} required />
                  <input type="email" name="email" placeholder={t.form.email} required />
                  <textarea name="message" placeholder={t.form.message} required></textarea>
                  <button type="submit">{t.form.send}</button>
                </form>
              </div>
            </div>
          </section>
        )}
      </div>

      <footer>
        <p>© 2025 VGV Solutions GmbH • Geschäftsführer: Víglási Gábor • Kontakt: Conradi Dániel</p>
      </footer>
    </div>
  );
}
