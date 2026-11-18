// Modelldaten. Pro Modell ein Objekt; die App baut alle Seiten daraus.
//
// Seiten (pages) bestehen aus Blöcken:
//   { type: 'kv',    title?, items: [['Bezeichnung', 'Wert'], ...] }        Wertetabelle
//   { type: 'defl',  title?, items: [{ name, plus, minus, hint? }] }         Ruderausschläge als Balken (mm, + oben / − unten)
//   { type: 'table', title?, head: [...], rows: [[...], ...] }               Tabelle mit mehreren Spalten
//   { type: 'steps', title?, items: ['Text' | ['Aktion', 'Detail'], ...] }   nummerierte Anleitung
//   { type: 'list',  title?, items: ['Punkt', ...] }                         Aufzählung
//   { type: 'text',  title?, text }                                          Fließtext
//   { type: 'note',  text }                                                  Hinweis (gelb)
// `collapsed: true` an einem Block mit Titel: zugeklappt, erst beim Antippen sichtbar.
//
// Quellen Arcus: Anleitung Tomahawk Arcus V20260319, eigene Daten (Tomahawk Arcus.csv),
// Testbericht AUFWIND 2/2026, Voltario T70 Anleitung (HEPF, FW 1.05),
// DPSI OCP Bedienungsanleitung V1.0 (EMCOTEC), KAVAN Plus R-120SB Bedienungsanleitung (KAVAN Wiki).

window.MODELS = [
  {
    id: 'arcus-45',
    name: 'Arcus 4,48 m',
    maker: 'Tomahawk Aviation',
    photo: 'img/arcus-45.jpg',   // D-KRPK über dem Wald
    // silhouette: true  → nur für Umriss-Grafiken statt Foto (wird weiß eingefärbt)
    highlights: [
      ['Schwerpunkt', '55 mm'],
      ['Spannweite', '4,48 m'],
      ['Akku', '6S'],
    ],

    // Zusätzliche Blöcke auf der Übersicht, unter der Kapitelliste
    overview: [
      { type: 'table', title: 'Checkliste · Einpacken', head: ['Teil', 'Wo / Zustand'], rows: [
        ['Flügel', 'in Tasche'],
        ['Rumpf', 'in Tasche'],
        ['Höhenleitwerk', 'in Tasche'],
        ['Winglets', 'in Tasche'],
        ['Verbinder', 'in Tasche'],
        ['Bungeehaken', 'im Rumpf'],
        ['Akkus Backup', 'im Rumpf'],
        ['Antriebsakkus', 'geladen'],
      ]},
      { type: 'table', title: 'Checkliste · Aufbau', head: ['Teil', 'Aktion'], rows: [
        ['Backupakku', 'anschließen und on'],
        ['Fahrwerk', 'ein'],
      ]},
    ],

    pages: [
      {
        id: 'specs', label: 'Specs', sub: 'Abmessungen, Bauweise, Antrieb',
        blocks: [
          { type: 'kv', title: 'Technische Daten', items: [
            ['Maßstab', '1:4,5'],
            ['Spannweite', '4480 mm'],
            ['Länge über alles', '2000 mm'],
            ['Transportlänge', '2,11 m'],
            ['Flügelfläche', '78 dm²'],
            ['Tragflächenprofil', 'Aerodyn. Spezial'],
            ['Rumpf', 'GFK/CFK'],
            ['Tragflächen', 'CFK mit GFK-Überzug'],
            ['Klappen', '6 (Tiplets optional separat)'],
          ]},
          { type: 'kv', title: 'Antrieb · Leopard LC5065', items: [
            ['Motor', 'Leopard LC5065 14-pol, Glider-Adapter'],
            ['KV', '430'],
            ['Luftschraube', 'GM Scale 16×10 Klapp'],
            ['Spinner', '42 mm Scale'],
            ['Akku', '6S LiPo'],
            ['Strombereich Motor', '30–70 A, kurz 2000 W'],
            ['Gewicht mit Adapter', '410 g'],
            ['Welle', '6 mm'],
            ['Timing (Hersteller)', '12° bei 8 kHz'],
          ]},
          { type: 'kv', title: 'Antrieb · Rechenwerte', items: [
            ['Leistung (Heizkoffer)', 'ca. 1,6 kW'],
            ['Strom (Heizkoffer)', 'ca. 72 A'],
            ['Schub (Heizkoffer)', 'ca. 5580 g'],
            ['Strom (Höllein)', 'ca. 53 A'],
          ]},
          { type: 'note', text: 'Erster Lauf: Strom mit Telemetrie oder Zangenamperemeter messen.' },
          { type: 'kv', title: 'Testbericht AUFWIND 2/2026', collapsed: true, items: [
            ['Fluggewicht Testmodell', '6622 g'],
            ['Flächenbelastung', '84,6 g/dm²'],
            ['Blei für Schwerpunkt', '110 g (mit leichtem Getriebeantrieb)'],
            ['Passende Höchstgeschwindigkeit', 'ca. 220 km/h'],
            ['Servos (CHA)', '2× HV85H äußere QR, 5× HV95H, 1× HV95 Höhe'],
          ]},
        ],
      },
      {
        id: 'settings', label: 'Settings', sub: 'Schwerpunkt, Ruderausschläge, Flugphasen',
        blocks: [
          { type: 'kv', title: 'Schwerpunkt', items: [
            ['Schwerpunkt', '55 mm'],
          ]},
          { type: 'note', text: 'Testbericht: Für den Erstflug Schwerpunkt eher etwas weiter vorne, dann erfliegen. Akku so weit vorne wie möglich.' },
          { type: 'defl', title: 'Servowege (benötigt) · mm, + oben / − unten', items: [
            { name: 'Höhe', plus: 11, minus: 8, hint: 'mittig gemessen' },
            { name: 'Seite', plus: 45, minus: 45 },
            { name: 'Wölbklappe', plus: 9, minus: 55, hint: 'innen gemessen' },
            { name: 'Inneres QR', plus: 32, minus: 10, hint: 'innen gemessen' },
            { name: 'Äußeres QR', plus: 23, minus: 10, hint: 'innen gemessen' },
          ]},
          { type: 'defl', title: 'Querruderausschläge · mm', items: [
            { name: 'Wölbklappe', plus: 9, minus: 6 },
            { name: 'Inneres QR', plus: 22, minus: 10 },
            { name: 'Äußeres QR', plus: 23, minus: 9 },
          ]},
          { type: 'kv', title: 'Butterfly', items: [
            ['Wölbklappe', '−55 mm'],
            ['Inneres QR', '+28 mm'],
            ['Äußeres QR', 'neutral'],
            ['Höhenruder', '−2 mm'],
          ]},
          { type: 'table', title: 'Flugphasen · mm', head: ['Phase', 'WK', 'inn. QR', 'äuß. QR'], rows: [
            ['Gleiten', '−5', '−3', 'neutral'],
            ['Thermik & Start', '−8', '−6', 'neutral'],
            ['Speed', 'neutral', 'neutral', 'neutral'],
          ]},
          { type: 'note', text: 'Laut Hersteller gibt es keine eigene Normal-Phase: alle Klappen neutral = Speed.' },
        ],
      },
      {
        id: 'dpsi', label: 'DPSI', sub: 'EMCOTEC DPSI OCP: Überstromschutz je Servo',
        blocks: [
          { type: 'text', text: 'Elektronische Sicherung zwischen Stromquelle (Empfänger, Akkuweiche) und Verbraucher (Servo). Lernt den Maximalstrom des Servos, schaltet bei Überstrom oder Kurzschluss ab und kappt Spannungsspitzen von Hochlastservos (Dynamoeffekt). Empfohlen für jedes Quer-, Höhen- und Seitenruderservo.' },
          { type: 'note', text: 'JR-Version nur bis 7 V Betriebsspannung! Bei 2S-Versorgung (bis 8,4 V, z. B. Backup-Akku über T70 oder BEC auf 7,4/8,4 V) nur die MPX-Version (bis 12,6 V) verwenden.' },
          { type: 'steps', title: 'Maximalstrom einlernen', items: [
            ['Anlage einschalten', 'rote + blaue LED blinken je 3× kurz (LED-Test)'],
            ['Taster gut 5 s halten', 'rote LED blitzt regelmäßig = Programmiermodus'],
            ['Knüppel rühren + Flug am Limit', 'große Ausschläge und Figuren, Maximalstrom wird gelernt'],
            ['Taster gut 5 s halten', 'rote LED 10 s ein = Programmierung beendet'],
            ['Reaktivierung wählen', 'in den 10 s Taster kurz drücken = EIN, nicht drücken = AUS'],
          ]},
          { type: 'list', title: 'Gut zu wissen', items: [
            'Abschaltschwelle = gelernter Maximalstrom + 50 %. Beispiel: Servo max. 2 A → Abschaltung bei 3 A.',
            'Während der Programmierung schaltet er nur bei Kurzschluss (> 8 A) ab.',
            'Ab Werk unprogrammiert und Reaktivierung aus.',
            'Reaktivierung lässt sich nur zusammen mit dem Strom neu programmieren.',
          ]},
          { type: 'note', text: 'Neu programmieren nach jeder Änderung an Servo, Ruder oder Gestänge.' },
          { type: 'kv', title: 'Abschaltung', items: [
            ['Programmiert', '> 150 % Maximalstrom für 500 ms oder > 8 A für 16 ms'],
            ['Unprogrammiert', 'nur > 8 A für 16 ms'],
            ['Mit Reaktivierung', 'nach 5 s wieder ein (wiederholt sich)'],
            ['Ohne Reaktivierung', 'bleibt aus bis Anlage aus'],
          ]},
          { type: 'table', title: 'LED-Anzeige', head: ['Rot', 'Blau', 'Bedeutung'], rows: [
            ['3× kurz', '3× kurz', 'nach Einschalten: LED-Test'],
            ['aus', '2 s ein', 'Reaktivierung aktiv'],
            ['aus', 'aus', 'Reaktivierung gesperrt'],
            ['blitzt', 'Strom', 'Programmiermodus'],
            ['10 s ein', 'Strom', 'Programmierung beendet'],
            ['aus', 'Strom', 'Betrieb: alles ok'],
            ['blinkt gleichm.', 'Strom', 'Servo abgeschaltet'],
            ['dauernd ein', 'dauernd ein', 'Gerätefehler, einsenden'],
          ]},
          { type: 'kv', title: 'Stromanzeige blaue LED', items: [
            ['1× lang (1 s)', '1 A'],
            ['1× kurz (0,1 s)', '0,1 A'],
            ['Beispiel', '1× lang + 3× kurz = 1,3 A'],
            ['Wiederholung', 'nach ca. 4 s Dunkelphase'],
          ]},
          { type: 'list', title: 'Einbau', items: [
            'Möglichst nahe an der Stromquelle: am Empfänger- bzw. Weichenausgang, nicht am Servo.',
            'Mit Klett an Rumpfwand oder Spant befestigen; Stecker gegen Herausrutschen sichern.',
            'Kabel fern von Servos und Gestängen verlegen, vor Nässe schützen.',
          ]},
          { type: 'table', title: 'Technische Daten', head: ['', 'JR', 'MPX'], rows: [
            ['Betriebsspannung', '4,8–7,0 V', '4,8–12,6 V'],
            ['Eingang max.', '7,5 V', '14 V'],
            ['Spitzen gekappt ab', 'ca. 7,5 V', 'ca. 15 V'],
            ['Dauerstrom', '8 A', '8 A'],
            ['Eigenverbrauch', 'ca. 10 mA', 'ca. 10 mA'],
            ['Maße', '70×17×4 mm', '74×17×7 mm'],
            ['Gewicht', 'ca. 9 g', 'ca. 9 g'],
            ['Betriebstemperatur', '−10 bis 70 °C', '−10 bis 70 °C'],
          ]},
        ],
      },
      {
        id: 'esc', label: 'ESC', sub: 'KAVAN Plus R-120SB: Einschalten, Kalibrieren, Programmieren',
        blocks: [
          { type: 'kv', title: 'Meine Einstellung', items: [
            ['Zellenzahl', '6S = Funktion 4, Wert 1× lang'],
            ['Timing', 'Mittel 15° = Funktion 7, Wert 2× kurz (Werk)'],
            ['Abschaltung bei 6S', 'Mittel 3,0 V × 6 = 18,0 V (Werk)'],
          ]},
          { type: 'note', text: 'BEC-Spannung (Funktion 10, Werk 5 V) nach jedem Programmieren oder Reset prüfen. Muss zu Empfänger, Servos, T70 und DPSI passen (DPSI JR max. 7 V).' },
          { type: 'steps', title: 'Einschalten (normal)', items: [
            ['Sender ein', 'Gas ganz unten'],
            ['Antriebsakku anstecken', 'Melodie ♪123 = Versorgung ok'],
            ['Kurze Pieptöne', 'Anzahl = LiPo-Zellenzahl'],
            ['Langer Piepton', 'Regler betriebsbereit'],
          ]},
          { type: 'note', text: 'Vor Kalibrieren und Programmieren: Propeller abnehmen!' },
          { type: 'steps', title: 'Gasweg kalibrieren', items: [
            ['Sender ein', 'Gas auf Vollgas'],
            ['Antriebsakku anstecken', 'Melodie ♪123'],
            ['Piep–Piep', 'oberer Endpunkt bestätigt'],
            ['Binnen 5 s', 'Gas ganz nach unten (nach 1 s übernommen)'],
            ['Kurze Pieptöne', 'Anzahl = LiPo-Zellenzahl'],
            ['Langer Piepton', 'Kalibrierung fertig'],
          ]},
          { type: 'text', text: 'Kalibrieren beim ersten Einsatz und nach jedem Senderwechsel. Werks-Gasbereich 1100–1940 µs (Futaba-Standard).' },
          { type: 'steps', title: 'Programmieren mit Sender', items: [
            ['Sender ein', 'Gas auf Vollgas'],
            ['Antriebsakku anstecken', 'nach 2 s Ton B-B-'],
            ['Weitere 5 s warten', 'Melodie ♪56712 = Programmiermodus'],
            ['Funktion wählen', 'nach gewünschter Beepfolge binnen 3 s Gas ganz unten'],
            ['Wert wählen', 'nach gewünschter Beepfolge Gas auf Vollgas'],
            ['Melodie ♪1515', 'Wert gespeichert, zurück zur Funktionswahl'],
            ['Beenden', 'nach 2× lang + 2× kurz binnen 3 s Gas ganz unten'],
            ['Danach', 'Zellenzahl-Piepser + langer Ton, Gas unten lassen'],
            ['Neustart', 'Akku ab- und wieder anstecken, sonst wirken die Werte nicht'],
          ]},
          { type: 'note', text: 'Zählregel: 1× lang = 5× kurz.' },
          { type: 'table', title: 'Funktionen (Beepfolge)', head: ['Beeps', 'Funktion'], rows: [
            ['1× kurz', '1 Bremsart'],
            ['2× kurz', '2 Bremskraft'],
            ['3× kurz', '3 Unterspannungsabschaltung'],
            ['4× kurz', '4 LiPo-Zellenzahl'],
            ['1× lang', '5 Abschaltspannung'],
            ['1L + 1k', '6 Anlaufverhalten'],
            ['1L + 2k', '7 Timing'],
            ['1L + 3k', '8 Aktiver Freilauf'],
            ['1L + 4k', '9 Suchmodus'],
            ['2× lang', '10 BEC-Spannung'],
            ['2L + 1k', '11 Werkseinstellungen'],
            ['2L + 2k', '12 Beenden'],
          ]},
          { type: 'table', title: '1 Bremsart', collapsed: true, head: ['Beeps', 'Wert'], rows: [
            ['1× kurz', 'Deaktiviert (Werk)'], ['2× kurz', 'Normal: bremst bei Gas auf Minimum'],
            ['3× kurz', 'Umkehrbremse (gelbes Kabel, Schalter)'], ['4× kurz', 'Lineare Umkehr (gelbes Kabel, Drehgeber)'],
          ]},
          { type: 'table', title: '2 Bremskraft', collapsed: true, head: ['Beeps', 'Wert'], rows: [
            ['1× kurz', 'Niedrig 60 % (Werk)'], ['2× kurz', 'Mittel 90 %'], ['3× kurz', 'Hoch 100 %'],
          ]},
          { type: 'table', title: '3 Unterspannungsabschaltung', collapsed: true, head: ['Beeps', 'Wert'], rows: [
            ['1× kurz', 'Weich: in 3 s auf 60 % (Werk)'], ['2× kurz', 'Hart: sofort aus'],
          ]},
          { type: 'table', title: '4 LiPo-Zellenzahl', collapsed: true, head: ['Beeps', 'Wert'], rows: [
            ['1× kurz', 'Automatisch (Werk, rechnet mit 3,7 V/Zelle)'], ['2× kurz', '3S'], ['3× kurz', '4S'], ['4× kurz', '5S'],
            ['1× lang', '6S (manuell empfohlen)'], ['1L + 1k', '7S'], ['1L + 2k', '8S'],
          ]},
          { type: 'table', title: '5 Abschaltspannung', collapsed: true, head: ['Beeps', 'Wert'], rows: [
            ['1× kurz', 'Deaktiviert'], ['2× kurz', 'Niedrig 2,8 V/Zelle'], ['3× kurz', 'Mittel 3,0 V/Zelle (Werk)'], ['4× kurz', 'Hoch 3,4 V/Zelle'],
          ]},
          { type: 'table', title: '6 Anlaufverhalten', collapsed: true, head: ['Beeps', 'Wert'], rows: [
            ['1× kurz', 'Normal 200 ms (Werk)'], ['2× kurz', 'Sanft 500 ms'], ['3× kurz', 'Sehr sanft 800 ms'],
          ]},
          { type: 'table', title: '7 Timing', collapsed: true, head: ['Beeps', 'Wert'], rows: [
            ['1× kurz', 'Niedrig 5°'], ['2× kurz', 'Mittel 15° (Werk)'], ['3× kurz', 'Hoch 25°'],
          ]},
          { type: 'table', title: '8 Aktiver Freilauf', collapsed: true, head: ['Beeps', 'Wert'], rows: [
            ['1× kurz', 'Aktiviert (Werk), gleichmäßigere Gasannahme'], ['2× kurz', 'Deaktiviert'],
          ]},
          { type: 'table', title: '9 Suchmodus', collapsed: true, head: ['Beeps', 'Wert'], rows: [
            ['1× kurz', 'Aus (Werk)'], ['2× kurz', '5 min'], ['3× kurz', '10 min'], ['4× kurz', '15 min'],
          ]},
          { type: 'table', title: '10 BEC-Spannung', collapsed: true, head: ['Beeps', 'Wert'], rows: [
            ['1× kurz', '5 V (Werk)'], ['2× kurz', '6 V'], ['3× kurz', '7,4 V'], ['4× kurz', '8,4 V'],
          ]},
          { type: 'table', title: 'Warntöne & Abhilfe', head: ['Ton / Symptom', 'Ursache → Abhilfe'], rows: [
            ['Kein Ton, Motor läuft nicht', 'Verbindung Akku–Regler → Stecker prüfen/tauschen'],
            ['BB, BB, BB … nach Einschalten', 'Akkuspannung außerhalb 3–8S → passenden Akku verwenden'],
            ['B- B- B- … nach Einschalten', 'kein Gassignal → Bindung und Kabel zum Empfänger prüfen'],
            ['B- B- B- … nach Einschalten', 'Gas nicht ganz unten → Gas auf Minimum, ggf. kalibrieren'],
            ['B- B- B- … nach Kalibrierung', 'Gasweg zu klein → Weg am Sender vergrößern, neu kalibrieren'],
            ['60 % Leistung, danach BB, BB …', 'Überhitzung (> 120 °C) → Kühlung verbessern, Last senken'],
            ['60 % Leistung, danach BBB, BBB …', 'Unterspannung → anderer Akku oder Abschaltspannung senken'],
            ['Motor aus im Flug', 'Gassignal > 0,25 s weg oder Überlast (z. B. blockierte Luftschraube)'],
          ]},
          { type: 'list', title: 'Schutzfunktionen', collapsed: true, items: [
            'Anlaufschutz: Bei Gas unter 15 % startet er selbst neu; über 20 % erst Gas ganz zurück, dann neu starten.',
            'Signalverlust: Ausgang sofort aus, läuft bei gültigem Signal wieder an.',
            'Überlast: schaltet ab oder startet neu (blockierte Luftschraube, Synchronverlust).',
            'Überhitzung > 120 °C: weich auf ca. 60 %, bei harter Abschaltung sofort aus.',
          ]},
          { type: 'kv', title: 'Anschlüsse', collapsed: true, items: [
            ['Langes Kabel weiß/rot/schwarz', 'Gaskanal; Rot/Schwarz = BEC-Versorgung'],
            ['Gelbes Kabel', 'Umkehrsignal, freier Kanal (nur für Umkehrbremse)'],
            ['Kurzes Kabel weiß/rot/schwarz', 'Programmierkarte KAVAN PRO'],
          ]},
          { type: 'list', title: 'Sicherheit', items: [
            'Akku erst direkt vor dem Flug anstecken und nach jedem Einsatz abstecken (Regler zieht sonst Strom).',
            'Erst Sender ein, Gas auf Minimum, dann Akku. Sender nie ausschalten, solange der Akku dran ist.',
            'Mit angestecktem Akku so handeln, als könnte der Motor jederzeit anlaufen.',
            'Polarität prüfen: Rot +, Schwarz −. Verpolung zerstört den Regler.',
          ]},
          { type: 'kv', title: 'Technische Daten', collapsed: true, items: [
            ['Dauerstrom', '120 A'],
            ['Spitzenstrom', '150 A'],
            ['Eingangsspannung', '3–8S LiPo'],
            ['BEC', 'Schalt-BEC 5 / 6 / 7,4 / 8,4 V'],
            ['BEC-Strom', '10 A Dauer / 30 A Spitze'],
            ['Gasbereich ab Werk', '1100–1940 µs'],
            ['Gewicht', '117 g'],
            ['Abmessungen', '85×35×22 mm'],
          ]},
        ],
      },
      {
        id: 't70', label: 'T70 Voltario', sub: 'Doppelakkuweiche: Bedienung, Backup, Einstellungen',
        blocks: [
          { type: 'text', text: 'Digitale Doppelakkuweiche mit Telemetrie, Ladeschaltung für den Backup-Akku und Touch-Schalter. Sie nutzt Eingang B1 (Akku oder BEC) als Hauptquelle und schaltet bei Spannungsabfall auf B2 um. Ersetzt den mechanischen Schalter und merkt sich den letzten Zustand: Wird der Akku versehentlich abgesteckt, fährt sie beim Wiederanstecken selbst hoch.' },
          { type: 'steps', title: 'Einschalten mit Touch-Taste', items: [
            ['Empfängerakku anstecken', 'Taste kurz berühren: Status-LED blinkt 1×'],
            ['Taste ca. 2 s halten', 'nach dem ersten Blinken beginnt die LED erneut zu blinken'],
            ['Jetzt loslassen', 'Hauptausgang ist aktiv'],
          ]},
          { type: 'note', text: 'Blinkt die LED beim kurzen Berühren nicht: Berührungsempfindlichkeit in den Einstellungen erhöhen. Touch wirkt durch bis zu 3 mm nichtleitendes Material.' },
          { type: 'steps', title: 'Anschluss', items: [
            ['B1', 'zwischen Empfänger und Primärakku bzw. Regler-BEC'],
            ['B2', 'Sekundär- bzw. Backup-Akku'],
            ['Schalter (optional)', 'Magnet-/Hall-, mechanischer oder Funkschalter statt Touch'],
            ['Status-LED', 'von außen sichtbar machen, Touch-Aufkleber auf die Tastfläche'],
          ]},
          { type: 'list', title: 'Backup-Funktion', items: [
            'Normal wird nur B1 genutzt. Fällt B1 unter die Spannungsschwelle, wird die Quelle mit der höheren Spannung verwendet.',
            'Steigt B1 wieder über Schwelle + Hysterese, schaltet der T70 automatisch zurück auf B1.',
            'Strom kommt immer nur aus einem Eingang. Die rote LED zeigt den aktiven Eingang.',
          ]},
          { type: 'table', title: 'Spannungsschwelle einstellen', head: ['Anwendung', 'Schwelle'], rows: [
            ['Regler-BEC + Puffer-Akku', 'unter der BEC-Spannung: BEC versorgt, B2 nur Backup'],
            ['Zwei gleiche Akkus, gleichmäßig entladen', 'über der max. Akkuspannung; gleiche Chemie, Zellenzahl, Kapazität'],
          ]},
          { type: 'note', text: 'Bei BEC + Puffer müssen BEC und Puffer-Akku jeweils die volle Servolast schaffen.' },
          { type: 'table', title: 'Hysterese', head: ['Stufe', 'Wert', 'Einsatz'], rows: [
            ['Hoch (LiPo)', '≈ 1,2 V', 'Standard, LiPo/LiIon oder BEC + LiPo/LiIon'],
            ['Mittel', '≈ 0,5 V', 'gleichmäßige Entladung niederohmiger LiPo/LiIon'],
            ['Niedrig (LiFe)', '≈ 0,3 V', 'niederohmige LiFe'],
          ]},
          { type: 'list', title: 'Backup-Akku laden (optional)', items: [
            'Lädt 2S Li-Ion/LiPo oder 2S LiFe an B2 aus B1, ohne Balancer, bis 200 mA. Lädt nie ganz voll.',
            'Nur wenn B1 aktiv ist und höher liegt als B2, Differenz unter 5 V, Temperatur unter 70 °C.',
            'B2 muss im Bereich liegen: 5,5–8,3 V (LiPo/LiIon) bzw. 5,0–7,1 V (LiFe).',
            'Mindestens 1× im Monat extern mit Balancer laden.',
          ]},
          { type: 'kv', title: 'Einstellungen (Sender, JETIBOX, MAV Manager)', items: [
            ['Schaltertyp', 'Touch / Elektronisch / Mechanisch / Hall / Knopf'],
            ['Berührungsempfindlichkeit', 'höher = dickere Rümpfe, aber anfälliger für Fehlauslösung'],
            ['Spannungsschwelle', 'Umschaltspannung B1 → B2'],
            ['Spannungshysterese', 'Hoch / Mittel / Niedrig'],
            ['Kapazität zurücksetzen', 'Power-On (Standard) / Spannungsänderung ≥ 15 % / Manuell'],
            ['Laden', '2S Li-Ion/LiPo oder 2S LiFe an B2'],
            ['E1 / E2', 'EX-Sensor-Eingang, Digitaleingang oder -ausgang'],
          ]},
          { type: 'list', title: 'Telemetrie-Anzeige (JETIBOX)', collapsed: true, items: [
            'Hauptbildschirm: Temperatur, Spannung und Strom des aktiven Akkus, „CHG“ beim Laden.',
            'Kapazität: Links + Rechts gleichzeitig setzt zurück. Stern = aktiver Eingang.',
            'Zeit: wie lange B1 bzw. B2 versorgt hat.',
            'Min/Max: Links + Rechts gleichzeitig setzt zurück.',
          ]},
          { type: 'table', title: 'Futaba / Multiplex Sensorplätze', collapsed: true, head: ['Wert', 'S.Bus2', 'MSB'], rows: [
            ['Strom 1', '1', '2'], ['Spannung 1', '1', '3'], ['Kapazität 1', '1', '4'],
            ['Strom 2', '5', '6'], ['Spannung 2', '5', '5'], ['Kapazität 2', '5', '7'],
          ]},
          { type: 'note', text: 'Mit R3/RSW-Funkschalter: Schaltertyp von „Touch“ auf „Standard“ stellen und Backup-Akku bei längerer Lagerung abstecken.' },
          { type: 'kv', title: 'Technische Daten (T70-JR)', items: [
            ['Abmessungen', '40 × 21 × 6 mm'],
            ['Gewicht inkl. Kabel', '21 g (T70-C: 23 g)'],
            ['Dauerstrom / Spitze (2 s)', '15 A / 30 A'],
            ['Versorgungsspannung', '4–12,6 V, empfohlen 5–8,4 V'],
            ['Ruhestrom / Betrieb', '100 µA / 40 mA'],
            ['Ladestrom B2', 'bis 200 mA'],
            ['Betriebstemperatur', '−20 bis 85 °C'],
            ['BEC', 'nein'],
            ['Firmware', '1.05, Update per USB mit MAV Manager'],
          ]},
          { type: 'list', title: 'Sicherheit', items: [
            'Polarität der Kabel immer prüfen; vertauscht zerstört das Gerät.',
            'Stromquelle passend zum Servoverbrauch wählen, max. Servospannung nie überschreiten.',
            'Schrumpfschlauch nicht entfernen, trocken betreiben.',
          ]},
        ],
      },
    ],
  },
];
