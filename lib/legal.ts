import { SITE } from './site';

export type LegalSection = { h: string; p: string[] };
export type LegalDoc = { title: string; updated: string; intro: string; sections: LegalSection[] };

const ADDR = `${SITE.company} (kt. ${SITE.kennitala}), ${SITE.address}`;
const UPDATED_EN = 'Last updated: 11 June 2026';
const UPDATED_PL = 'Ostatnia aktualizacja: 11 czerwca 2026';

/* ============================== ENGLISH ============================== */
const EN: { privacy: LegalDoc; terms: LegalDoc } = {
  privacy: {
    title: 'Privacy Policy',
    updated: UPDATED_EN,
    intro:
      `${ADDR} ("Journey Iceland", "we", "us") is the controller of the personal data collected through this website. ` +
      `We respect your privacy and process personal data in line with the Icelandic Act No. 90/2018 on Data Protection and the Processing of Personal Data and the EU General Data Protection Regulation (GDPR).`,
    sections: [
      { h: '1. Who we are', p: [
        `Controller: ${ADDR}.`,
        `Contact for any privacy matter: ${SITE.email}.`,
      ]},
      { h: '2. What data we collect', p: [
        'When you send an "Check availability" / contact request we collect the information you provide: your name, email address, phone number (optional), preferred date, group size, the tour or transfer selected, the language of the request and any message you add.',
        'When you contact us by WhatsApp, phone or email, we receive the details you choose to share.',
        'With your separate consent, we may take photos or short videos during a tour (see "Image consent" below).',
        'Our hosting providers automatically process limited technical data (such as IP address and basic request logs) needed to deliver and secure the website.',
      ]},
      { h: '3. Why we use your data and on what legal basis', p: [
        'To answer your enquiry and to take steps to prepare and provide the service you ask about — legal basis: performance of, or steps prior to, a contract (Art. 6(1)(b) GDPR).',
        'To communicate with you and keep reasonable business and accounting records — legal basis: our legitimate interests and legal obligations (Art. 6(1)(c) and (f) GDPR).',
        'To use guest photos/words as testimonials or marketing — only where you have given consent (Art. 6(1)(a) GDPR).',
      ]},
      { h: '4. How long we keep it', p: [
        'We keep enquiry details only as long as needed to handle your request and to meet our record-keeping and accounting obligations, after which they are deleted.',
        'Photos or testimonials shared with your consent are kept until you withdraw that consent.',
      ]},
      { h: '5. Who we share it with', p: [
        'We use a small number of trusted service providers who process data on our behalf, under contract and only on our instructions:',
        '• Supabase — secure database storage of form submissions (servers within the EU / Frankfurt);',
        '• Vercel — website hosting and delivery;',
        '• Google Workspace — our business email;',
        '• where used: Cal.com — date/availability scheduling, and myPOS — secure card payments arranged after a booking is confirmed.',
        'We never sell your personal data.',
      ]},
      { h: '6. International transfers', p: [
        'Our database is hosted within the European Economic Area (EEA). Where a provider necessarily processes data outside the EEA (for example in the United States), the transfer is protected by appropriate safeguards such as the European Commission’s Standard Contractual Clauses.',
      ]},
      { h: '7. Payments', p: [
        'This website does not take payments. If you proceed with a booking, payment is arranged separately through a secure payment link or a card terminal (myPOS). Your card details are handled by the payment provider and are never stored by us.',
      ]},
      { h: '8. Cookies', p: [
        'This website uses only the strictly necessary technologies required for it to function (for example, remembering your chosen language). We do not use advertising or third-party tracking cookies. If this changes, we will update this policy and ask for consent where required.',
      ]},
      { h: '9. Your rights', p: [
        'Under the GDPR and Act No. 90/2018 you have the right to access your data, to rectification, erasure, restriction of processing, data portability, and to object to processing. Where processing is based on consent, you may withdraw it at any time.',
        `To exercise any of these rights, simply email ${SITE.email}.`,
      ]},
      { h: '10. Image consent', p: [
        'We photograph or film guests only with their explicit consent, and only use such images as testimonials or marketing if you agree. You can ask us to remove your images at any time and we will do so.',
      ]},
      { h: '11. Complaints', p: [
        'If you believe we have not handled your data properly, please contact us first so we can put it right. You also have the right to lodge a complaint with the Icelandic Data Protection Authority:',
        'Persónuvernd, Rauðarárstígur 10, 105 Reykjavík · postur@personuvernd.is · www.personuvernd.is.',
      ]},
      { h: '12. Changes to this policy', p: [
        'We may update this Privacy Policy from time to time. The current version is always available on this page, with the date it was last updated shown above.',
      ]},
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: UPDATED_EN,
    intro:
      `These terms apply to the private driver and guide services offered by ${ADDR} ("Journey Iceland", "we", "us"). ` +
      `By sending a request or making a booking with us, you agree to these terms.`,
    sections: [
      { h: '1. Our service', p: [
        'Journey Iceland is a private driver and guide service offering private tours and airport / spa transfers in Iceland. Tours are always private — only your own group travels in the car.',
      ]},
      { h: '2. Availability requests, not online bookings', p: [
        'This website does not take online bookings or payments. When you submit an "Check availability" request, you are making an enquiry. A booking exists only once we have personally agreed the date, details and price with you by email, phone or WhatsApp.',
      ]},
      { h: '3. Prices', p: [
        'Prices are shown in Icelandic króna (ISK) and are per group, not per person, unless stated otherwise. Amounts shown in other currencies are approximate and for guidance only.',
        'Any value-added tax (VSK), where applicable, is included in the quoted price. Entrance fees, meals, spa tickets and optional extras are not included unless we state otherwise.',
      ]},
      { h: '4. Payment', p: [
        'Once a booking is confirmed, payment is made through a secure payment link or by card on the day via myPOS. No deposit is taken simply for asking about a date.',
      ]},
      { h: '5. Weather, changes and cancellations', p: [
        'Iceland’s weather and road conditions can change quickly. Your safety always comes first, so we may re-route, shorten, postpone or cancel a tour when conditions require it.',
        'If we cancel for safety or weather reasons and cannot offer a suitable alternative date, you will not be charged, and any amount already paid is refunded.',
        'If you need to cancel or change your booking, please let us know as early as possible. The exact cancellation terms for your booking are confirmed with you at the time of booking.',
      ]},
      { h: '6. Right of withdrawal', p: [
        'For leisure services tied to a specific date (such as tours and transfers), the statutory 14-day right of withdrawal under Act No. 46/2000 on distance contracts does not apply once the agreed date has been reserved for you or the service has been provided.',
      ]},
      { h: '7. Your responsibilities', p: [
        'Please give us accurate pick-up details and be ready at the agreed time, and follow reasonable safety instructions during the tour.',
        'For everyone’s safety, we may decline to start or continue where behaviour is unsafe or unlawful.',
      ]},
      { h: '8. Safety, insurance and liability', p: [
        'We operate an experienced, insured private driver service in a well-maintained vehicle. To the extent permitted by Icelandic law, we are not liable for indirect or consequential loss, or for events beyond our reasonable control (force majeure). Nothing in these terms limits any liability that cannot be limited by law.',
      ]},
      { h: '9. Photos', p: [
        'We take photos or video of guests only with consent. How we handle images is described in our Privacy Policy.',
      ]},
      { h: '10. Governing law and complaints', p: [
        'These terms are governed by the laws of Iceland.',
        'If something goes wrong, please contact us first. Consumer disputes may also be referred to the Icelandic Consumer Agency (Neytendastofa), www.neytendastofa.is.',
      ]},
      { h: '11. Contact', p: [ `${ADDR} · ${SITE.email} · ${SITE.phoneDisplay}.` ]},
    ],
  },
};

/* ============================== POLSKI ============================== */
const PL: { privacy: LegalDoc; terms: LegalDoc } = {
  privacy: {
    title: 'Polityka prywatności',
    updated: UPDATED_PL,
    intro:
      `${ADDR} („Journey Iceland", „my") jest administratorem danych osobowych zbieranych za pośrednictwem tej strony. ` +
      `Szanujemy Twoją prywatność i przetwarzamy dane zgodnie z islandzką ustawą nr 90/2018 o ochronie i przetwarzaniu danych osobowych oraz z unijnym RODO (GDPR).`,
    sections: [
      { h: '1. Kim jesteśmy', p: [
        `Administrator: ${ADDR}.`,
        `Kontakt w sprawach prywatności: ${SITE.email}.`,
      ]},
      { h: '2. Jakie dane zbieramy', p: [
        'Gdy wysyłasz zapytanie „Sprawdź dostępność" / formularz kontaktowy, zbieramy podane przez Ciebie informacje: imię, adres e-mail, numer telefonu (opcjonalnie), preferowaną datę, liczbę osób, wybraną wycieczkę lub transfer, język zapytania oraz treść wiadomości.',
        'Gdy kontaktujesz się przez WhatsApp, telefon lub e-mail, otrzymujemy dane, które zdecydujesz się przekazać.',
        'Za Twoją odrębną zgodą możemy zrobić zdjęcia lub krótkie filmy podczas wycieczki (patrz „Zgoda na wizerunek" poniżej).',
        'Nasi dostawcy hostingu automatycznie przetwarzają ograniczone dane techniczne (np. adres IP i podstawowe logi), niezbędne do działania i zabezpieczenia strony.',
      ]},
      { h: '3. W jakim celu i na jakiej podstawie', p: [
        'Aby odpowiedzieć na Twoje zapytanie i podjąć kroki w celu przygotowania i wykonania usługi — podstawa: wykonanie umowy lub działania przed jej zawarciem (art. 6 ust. 1 lit. b RODO).',
        'Aby się z Tobą komunikować oraz prowadzić niezbędną dokumentację i księgowość — podstawa: nasz prawnie uzasadniony interes i obowiązki prawne (art. 6 ust. 1 lit. c i f RODO).',
        'Aby wykorzystać zdjęcia lub słowa gości jako opinie/marketing — wyłącznie za Twoją zgodą (art. 6 ust. 1 lit. a RODO).',
      ]},
      { h: '4. Jak długo przechowujemy dane', p: [
        'Dane z zapytań przechowujemy tylko tak długo, jak to konieczne do obsługi sprawy oraz do wypełnienia obowiązków dokumentacyjnych i księgowych, po czym je usuwamy.',
        'Zdjęcia i opinie udostępnione za zgodą przechowujemy do czasu wycofania tej zgody.',
      ]},
      { h: '5. Komu udostępniamy dane', p: [
        'Korzystamy z niewielu zaufanych dostawców, którzy przetwarzają dane w naszym imieniu, na podstawie umowy i wyłącznie zgodnie z naszymi instrukcjami:',
        '• Supabase — bezpieczne przechowywanie zgłoszeń z formularza (serwery w UE / Frankfurt);',
        '• Vercel — hosting i dostarczanie strony;',
        '• Google Workspace — firmowa poczta e-mail;',
        '• w razie użycia: Cal.com — kalendarz dostępności oraz myPOS — bezpieczne płatności kartą ustalane po potwierdzeniu rezerwacji.',
        'Nigdy nie sprzedajemy Twoich danych.',
      ]},
      { h: '6. Przekazywanie poza EOG', p: [
        'Nasza baza danych jest hostowana w Europejskim Obszarze Gospodarczym (EOG). Jeśli dostawca z konieczności przetwarza dane poza EOG (np. w USA), przekazanie jest zabezpieczone odpowiednimi mechanizmami, takimi jak standardowe klauzule umowne Komisji Europejskiej.',
      ]},
      { h: '7. Płatności', p: [
        'Ta strona nie przyjmuje płatności. Jeśli dojdzie do rezerwacji, płatność ustalana jest osobno przez bezpieczny link do płatności lub terminal kartowy (myPOS). Dane Twojej karty obsługuje dostawca płatności i nigdy nie są przez nas przechowywane.',
      ]},
      { h: '8. Pliki cookie', p: [
        'Strona używa wyłącznie technologii niezbędnych do jej działania (np. zapamiętania wybranego języka). Nie używamy reklamowych ani zewnętrznych plików śledzących. Jeśli to się zmieni, zaktualizujemy politykę i poprosimy o zgodę, gdy będzie wymagana.',
      ]},
      { h: '9. Twoje prawa', p: [
        'Na mocy RODO i ustawy nr 90/2018 masz prawo do dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia oraz do sprzeciwu. Gdy podstawą jest zgoda, możesz ją wycofać w każdej chwili.',
        `Aby skorzystać z tych praw, napisz na ${SITE.email}.`,
      ]},
      { h: '10. Zgoda na wizerunek', p: [
        'Zdjęcia i filmy z udziałem gości robimy wyłącznie za ich wyraźną zgodą i tylko za zgodą wykorzystujemy je jako opinie czy materiały marketingowe. W każdej chwili możesz poprosić o ich usunięcie — zrobimy to.',
      ]},
      { h: '11. Skargi', p: [
        'Jeśli uważasz, że nieprawidłowo obchodzimy się z Twoimi danymi, skontaktuj się najpierw z nami. Masz też prawo wnieść skargę do islandzkiego organu ochrony danych:',
        'Persónuvernd, Rauðarárstígur 10, 105 Reykjavík · postur@personuvernd.is · www.personuvernd.is.',
      ]},
      { h: '12. Zmiany', p: [
        'Możemy od czasu do czasu aktualizować tę politykę. Aktualna wersja jest zawsze dostępna na tej stronie, z datą ostatniej aktualizacji podaną powyżej.',
      ]},
    ],
  },
  terms: {
    title: 'Regulamin',
    updated: UPDATED_PL,
    intro:
      `Niniejszy regulamin dotyczy usług prywatnego kierowcy i przewodnika świadczonych przez ${ADDR} („Journey Iceland", „my"). ` +
      `Wysyłając zapytanie lub dokonując rezerwacji, akceptujesz ten regulamin.`,
    sections: [
      { h: '1. Nasza usługa', p: [
        'Journey Iceland to usługa prywatnego kierowcy i przewodnika — prywatne wycieczki oraz transfery z lotniska / do term na Islandii. Wycieczki są zawsze prywatne — w aucie podróżuje tylko Twoja grupa.',
      ]},
      { h: '2. Zapytania o dostępność, nie rezerwacja online', p: [
        'Ta strona nie przyjmuje rezerwacji ani płatności online. Wysyłając zapytanie „Sprawdź dostępność", składasz zapytanie. Rezerwacja istnieje dopiero wtedy, gdy osobiście ustalimy z Tobą datę, szczegóły i cenę — przez e-mail, telefon lub WhatsApp.',
      ]},
      { h: '3. Ceny', p: [
        'Ceny podawane są w koronach islandzkich (ISK) i dotyczą grupy, nie osoby, o ile nie zaznaczono inaczej. Kwoty w innych walutach są orientacyjne.',
        'Podatek VSK, jeśli ma zastosowanie, jest wliczony w podaną cenę. Bilety wstępu, posiłki, wejścia do term i dodatki opcjonalne nie są wliczone, chyba że zaznaczono inaczej.',
      ]},
      { h: '4. Płatność', p: [
        'Po potwierdzeniu rezerwacji płatność następuje przez bezpieczny link do płatności lub kartą na miejscu (myPOS). Za samo zapytanie o termin nie pobieramy zaliczki.',
      ]},
      { h: '5. Pogoda, zmiany i odwołania', p: [
        'Pogoda i stan dróg na Islandii potrafią zmienić się szybko. Twoje bezpieczeństwo jest najważniejsze, dlatego możemy zmienić trasę, skrócić, przełożyć lub odwołać wycieczkę, gdy wymagają tego warunki.',
        'Jeśli odwołamy wycieczkę ze względów bezpieczeństwa lub pogody i nie zaproponujemy odpowiedniego nowego terminu, nie zostaniesz obciążony, a wszelkie wpłacone kwoty zwracamy.',
        'Jeśli musisz odwołać lub zmienić rezerwację, daj znać jak najwcześniej. Dokładne warunki odwołania potwierdzamy z Tobą przy rezerwacji.',
      ]},
      { h: '6. Prawo odstąpienia', p: [
        'W przypadku usług powiązanych z konkretną datą (wycieczki, transfery) ustawowe 14-dniowe prawo odstąpienia wynikające z ustawy nr 46/2000 o umowach na odległość nie ma zastosowania po zarezerwowaniu dla Ciebie ustalonego terminu lub po wykonaniu usługi.',
      ]},
      { h: '7. Twoje obowiązki', p: [
        'Prosimy o podanie dokładnych danych do odbioru i gotowość o ustalonej godzinie oraz o stosowanie się do rozsądnych zasad bezpieczeństwa podczas wycieczki.',
        'Dla bezpieczeństwa wszystkich możemy odmówić rozpoczęcia lub kontynuowania, gdy zachowanie jest niebezpieczne lub niezgodne z prawem.',
      ]},
      { h: '8. Bezpieczeństwo, ubezpieczenie i odpowiedzialność', p: [
        'Świadczymy usługę doświadczonego, ubezpieczonego prywatnego kierowcy zadbanym pojazdem. W zakresie dozwolonym prawem islandzkim nie ponosimy odpowiedzialności za szkody pośrednie lub następcze ani za zdarzenia poza naszą rozsądną kontrolą (siła wyższa). Żadne z postanowień nie ogranicza odpowiedzialności, której nie można ograniczyć z mocy prawa.',
      ]},
      { h: '9. Zdjęcia', p: [
        'Zdjęcia i filmy z udziałem gości robimy wyłącznie za zgodą. Sposób obchodzenia się z wizerunkiem opisuje nasza Polityka prywatności.',
      ]},
      { h: '10. Prawo właściwe i skargi', p: [
        'Regulamin podlega prawu islandzkiemu.',
        'Jeśli coś pójdzie nie tak, skontaktuj się najpierw z nami. Spory konsumenckie można też skierować do islandzkiego organu ochrony konsumentów (Neytendastofa), www.neytendastofa.is.',
      ]},
      { h: '11. Kontakt', p: [ `${ADDR} · ${SITE.email} · ${SITE.phoneDisplay}.` ]},
    ],
  },
};

export function getLegal(lang: string) {
  return lang === 'pl' ? PL : EN;
}
