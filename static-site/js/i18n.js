// KEEPO — shared i18n dictionaries + icon data for all 3 pages.
window.KEEPO_I18N = (function () {

var DICT = {
  pl: {
    tagline: 'Dbamy o to, co ważne.',
    nav: { home: 'Strona główna', services: 'Usługi', why: 'Dlaczego My', how: 'Jak To Działa', reviews: 'Opinie', faq: 'FAQ', pricing: 'Cennik', contact: 'Kontakt', bookNow: 'Zarezerwuj' },
    hero: { line1: 'MOBILNE CZYSZCZENIE MEBLI', line2: 'I WNĘTRZA SAMOCHODU', sub: 'Przyjeżdżamy do Ciebie i rozwiązujemy problemy szybko, profesjonalnie i wygodnie.',
      chips: [ { icon:'home', label:'Dom' }, { icon:'car', label:'Auto' }, { icon:'sparkle', label:'Czystość' }, { icon:'wrench', label:'Wsparcie' } ],
      cta1: 'Wyceń usługę', cta2: 'Kontakt', badgeTitle: 'Dojazd do klienta', badgeSub: 'Katowice i okolice' },
    services: { eyebrow: 'USŁUGI', title: 'Profesjonalne czyszczenie chemiczne samochodów i domów.', sub: 'Specjalizujemy się w dwóch głównych kierunkach, zapewniając równie wysoką jakość każdego zlecenia.', moreLabel: 'Dowiedz się więcej',
      directions: {
        car: { title: 'Czyszczenie chemiczne samochodów', desc: 'Profesjonalne, głębokie czyszczenie wnętrza samochodu przy użyciu profesjonalnego sprzętu i bezpiecznej chemii samochodowej.', features: ['Pełne czyszczenie wnętrza', 'Czyszczenie parowe', 'Ozonowanie', 'Usuwanie sierści', 'Pielęgnacja plastiku i skóry', 'Usuwanie zapachów'] },
        home: { title: 'Czyszczenie mebli i tekstyliów', desc: 'Przywracamy świeżość i czystość meblom oraz wyrobom tekstylnym w domu i biurze.', features: ['Sofy', 'Materace', 'Fotele', 'Dywany', 'Krzesła', 'Meble biurowe'] }
      } },
    pricingPreview: { title: 'Cennik', sub: 'Przejrzyste ceny bez ukrytych opłat.', cta: 'Zobacz pełny cennik',
      items: [
        { icon: 'car', name: 'Czyszczenie wnętrza samochodu', price: 'od 299 zł' },
        { icon: 'sofa', name: 'Czyszczenie sof', price: 'od 170 zł' },
        { icon: 'bed', name: 'Czyszczenie materacy', price: 'od 80 zł' },
        { icon: 'carpet', name: 'Czyszczenie dywanów', price: 'od 25 zł/m²' },
        { icon: 'chair', name: 'Czyszczenie foteli', price: 'od 45 zł' },
        { icon: 'office', name: 'Meble biurowe', price: 'od 35 zł' }
      ] },
    why: { eyebrow: 'Dlaczego KEEPO', title: 'Stworzeni dla ludzi, którzy dbają o szczegóły.',
      items: {
        mobile: { title: 'Usługa mobilna', desc: 'Przyjeżdżamy do Twojego domu, biura lub na podjazd — bez konieczności dowożenia.' },
        equipment: { title: 'Profesjonalny sprzęt', desc: 'Sprzęt parowy i ekstrakcyjny klasy komercyjnej, nie wiadro i szmatka.' },
        eco: { title: 'Ekologiczne środki', desc: 'Bezpieczne dla dzieci, zwierząt i alergików, bez agresywnych pozostałości.' },
        fast: { title: 'Szybka reakcja', desc: 'Rezerwacja tego samego dnia w większości lokalizacji, wąskie okno przyjazdu.' },
        experienced: { title: 'Doświadczeni specjaliści', desc: 'Przeszkoleni, zweryfikowani technicy, którzy znają się na rzeczy.' },
        pricing: { title: 'Przejrzyste ceny', desc: 'Wycena z góry, zanim zaczniemy — żadnych ukrytych kosztów.' }
      } },
    ba: { eyebrow: 'Efekty', title: 'Zobacz różnicę.', sub: 'Przesuń suwak, aby porównać.', before: 'przed', after: 'po' },
    how: { eyebrow: 'Jak To Działa', title: 'Cztery kroki do świeższej przestrzeni.',
      steps: {
        s1: { title: 'Zarezerwuj online', desc: 'Wybierz usługę i dogodny termin.' },
        s2: { title: 'Przyjeżdżamy', desc: 'Nasz specjalista przyjeżdża w pełni wyposażony, punktualnie.' },
        s3: { title: 'Profesjonalne czyszczenie', desc: 'Głębokie czyszczenie przy użyciu ekologicznych metod premium.' },
        s4: { title: 'Ciesz się efektem', desc: 'Wróć do przestrzeni, która wygląda jak nowa.' }
      } },
    reviews: { eyebrow: 'Opinie', title: 'Zaufali nam ludzie, którzy zauważają szczegóły.' },
    faq: { eyebrow: 'FAQ', title: 'Pytania i odpowiedzi.' },
    contact: { eyebrow: 'Kontakt', title: 'Gotowy na świeższą przestrzeń?', sub: 'Skontaktuj się bezpośrednio lub wypełnij formularz — potwierdzimy termin w ciągu godziny.', whatsapp: 'WhatsApp', telegram: 'Telegram', formTitle: 'Zarezerwuj sprzątanie', namePh: 'Imię i nazwisko', emailPh: 'Adres e-mail', submitBtn: 'Wyślij zapytanie', thanksTitle: 'Zgłoszenie przyjęte.', thanksMsg: 'Skontaktujemy się w ciągu godziny, aby potwierdzić termin.' },
    footer: { desc: 'Mobilne czyszczenie samochodów, domów i biur.', servicesTitle: 'Usługi', companyTitle: 'Firma', companyLinks: { why: 'Dlaczego KEEPO', reviews: 'Opinie', faq: 'FAQ', contact: 'Kontakt' }, legalTitle: 'Informacje prawne', legalLinks: { privacy: 'Polityka prywatności', terms: 'Regulamin' }, copyright: '© 2026 KEEPO. Wszelkie prawa zastrzeżone.' },
    footerServiceLinks: ['Czyszczenie samochodów', 'Tapicerka', 'Czyszczenie dywanów', 'Meble biurowe'],
    baWorkTitles: ['Czyszczenie samochodu', 'Czyszczenie sofy', 'Czyszczenie materaca', 'Czyszczenie dywanu']
  },
  ua: {
    tagline: 'Дбаємо про те, що важливо.',
    nav: { home: 'Головна', services: 'Послуги', why: 'Чому Ми', how: 'Як Це Працює', reviews: 'Відгуки', faq: 'FAQ', pricing: 'Ціни', contact: 'Контакти', bookNow: 'Забронювати' },
    hero: { line1: 'МОБІЛЬНА ХІМЧИСТКА МЕБЛІВ', line2: 'ТА САЛОНУ АВТОМОБІЛЯ', sub: 'Ми приїжджаємо до вас і вирішуємо завдання швидко, професійно та зручно.',
      chips: [ { icon:'home', label:'Дім' }, { icon:'car', label:'Авто' }, { icon:'sparkle', label:'Чистота' }, { icon:'wrench', label:'Підтримка' } ],
      cta1: 'Розрахувати вартість', cta2: 'Контакти', badgeTitle: 'Виїзд до клієнта', badgeSub: 'Катовіце та околиці' },
    services: { eyebrow: 'ПОСЛУГИ', title: 'Професійна хімчистка для автомобілів та дому.', sub: 'Ми спеціалізуємося на двох основних напрямках, забезпечуючи однаково високий рівень якості для кожного замовлення.', moreLabel: 'Детальніше',
      directions: {
        car: { title: 'Хімчистка автомобілів', desc: 'Професійна глибока хімчистка салону автомобіля з використанням професійного обладнання та безпечної автохімії.', features: ['Повна хімчистка салону', 'Парове очищення', 'Озонування', 'Видалення шерсті', 'Догляд за пластиком і шкірою', 'Усунення запахів'] },
        home: { title: 'Хімчистка меблів та текстилю', desc: 'Повертаємо свіжість та чистоту меблям і текстильним виробам вдома або в офісі.', features: ['Дивани', 'Матраци', 'Крісла', 'Килими', 'Стільці', 'Офісні меблі'] }
      } },
    pricingPreview: { title: 'Ціни', sub: 'Прозорі ціни без прихованих платежів.', cta: 'Переглянути весь цінник',
      items: [
        { icon: 'car', name: 'Хімчистка салону авто', price: 'від 299 zł' },
        { icon: 'sofa', name: 'Хімчистка диванів', price: 'від 170 zł' },
        { icon: 'bed', name: 'Хімчистка матраців', price: 'від 80 zł' },
        { icon: 'carpet', name: 'Хімчистка килимів', price: 'від 25 zł/м²' },
        { icon: 'chair', name: 'Хімчистка крісел', price: 'від 45 zł' },
        { icon: 'office', name: 'Офісні меблі', price: 'від 35 zł' }
      ] },
    why: { eyebrow: 'Чому KEEPO', title: 'Створено для тих, хто дбає про деталі.',
      items: {
        mobile: { title: 'Мобільний сервіс', desc: "Приїжджаємо до вашого дому, офісу чи на під'їзну доріжку — без потреби кудись везти." },
        equipment: { title: 'Професійне обладнання', desc: 'Комерційне парове та екстракційне обладнання, а не відро й ганчірка.' },
        eco: { title: 'Екологічні засоби', desc: 'Безпечні для дітей, тварин і алергіків, без агресивних залишків.' },
        fast: { title: 'Швидка реакція', desc: 'Бронювання в той самий день у більшості районів, вузьке вікно приїзду.' },
        experienced: { title: 'Досвідчені фахівці', desc: 'Навчені, перевірені техніки, які знають свою справу.' },
        pricing: { title: 'Прозорі ціни', desc: 'Точна вартість наперед — без прихованих платежів.' }
      } },
    ba: { eyebrow: 'Результати', title: 'Побачте різницю.', sub: 'Перетягніть повзунок, щоб порівняти.', before: 'до', after: 'після' },
    how: { eyebrow: 'Як Це Працює', title: 'Чотири кроки до свіжішого простору.',
      steps: {
        s1: { title: 'Забронюйте онлайн', desc: 'Оберіть послугу та зручний час.' },
        s2: { title: 'Ми приїжджаємо', desc: 'Наш фахівець приїжджає повністю оснащеним, вчасно.' },
        s3: { title: 'Професійне чищення', desc: 'Глибоке чищення з використанням преміальних екологічних методів.' },
        s4: { title: 'Насолоджуйтесь результатом', desc: 'Поверніться у простір, що виглядає як новий.' }
      } },
    reviews: { eyebrow: 'Відгуки', title: 'Нам довіряють ті, хто помічає деталі.' },
    faq: { eyebrow: 'FAQ', title: 'Питання та відповіді.' },
    contact: { eyebrow: 'Контакти', title: 'Готові до свіжішого простору?', sub: "Зв'яжіться напряму або заповніть форму — ми підтвердимо час протягом години.", whatsapp: 'WhatsApp', telegram: 'Telegram', formTitle: 'Забронюйте прибирання', namePh: "Повне ім'я", emailPh: 'Електронна пошта', submitBtn: 'Надіслати запит', thanksTitle: 'Заявку отримано.', thanksMsg: 'Ми зв\u2019яжемося протягом години, щоб підтвердити час.' },
    footer: { desc: 'Мобільна чистка авто, будинків та офісів.', servicesTitle: 'Послуги', companyTitle: 'Компанія', companyLinks: { why: 'Чому KEEPO', reviews: 'Відгуки', faq: 'FAQ', contact: 'Контакти' }, legalTitle: 'Правова інформація', legalLinks: { privacy: 'Політика конфіденційності', terms: 'Умови використання' }, copyright: '© 2026 KEEPO. Усі права захищено.' },
    footerServiceLinks: ['Чистка авто', 'Оббивка', 'Чистка килимів', 'Офісні меблі'],
    baWorkTitles: ['Чистка авто', 'Чистка дивана', 'Чистка матраца', 'Чистка килима']
  },
  en: {
    tagline: 'We care about what matters.',
    nav: { home: 'Home', services: 'Services', why: 'Why Us', how: 'How It Works', reviews: 'Reviews', faq: 'FAQ', pricing: 'Pricing', contact: 'Contact', bookNow: 'Book Now' },
    hero: { line1: 'MOBILE FURNITURE CLEANING', line2: 'AND CAR INTERIOR DETAILING', sub: 'We come to you and get things done fast, professionally and conveniently.',
      chips: [ { icon:'home', label:'Home' }, { icon:'car', label:'Car' }, { icon:'sparkle', label:'Clean' }, { icon:'wrench', label:'Support' } ],
      cta1: 'Get a Quote', cta2: 'Contact', badgeTitle: 'We come to you', badgeSub: 'Katowice & Surrounding area' },
    services: { eyebrow: 'SERVICES', title: 'Professional cleaning for cars and homes.', sub: 'We specialize in two core directions, delivering equally high quality on every job.', moreLabel: 'Learn more',
      directions: {
        car: { title: 'Car Interior Detailing', desc: 'Professional deep cleaning of your car interior using commercial-grade equipment and safe automotive chemistry.', features: ['Full interior detailing', 'Steam cleaning', 'Ozonation', 'Pet hair removal', 'Plastic & leather care', 'Odor removal'] },
        home: { title: 'Furniture & Textile Cleaning', desc: 'We restore freshness and cleanliness to furniture and textiles at home or in the office.', features: ['Sofas', 'Mattresses', 'Armchairs', 'Carpets', 'Chairs', 'Office furniture'] }
      } },
    pricingPreview: { title: 'Pricing', sub: 'Transparent pricing, no hidden fees.', cta: 'See full pricing',
      items: [
        { icon: 'car', name: 'Car Interior Cleaning', price: 'from 299 zł' },
        { icon: 'sofa', name: 'Sofa Cleaning', price: 'from 170 zł' },
        { icon: 'bed', name: 'Mattress Cleaning', price: 'from 80 zł' },
        { icon: 'carpet', name: 'Carpet Cleaning', price: 'from 25 zł/m²' },
        { icon: 'chair', name: 'Armchair Cleaning', price: 'from 45 zł' },
        { icon: 'office', name: 'Office Furniture', price: 'from 35 zł' }
      ] },
    why: { eyebrow: 'Why KEEPO', title: 'Built for people who care about the details.',
      items: {
        mobile: { title: 'Mobile Service', desc: 'We come to your home, office or driveway — no drop-off needed.' },
        equipment: { title: 'Professional Equipment', desc: 'Commercial-grade steam and extraction tools, not a bucket and a rag.' },
        eco: { title: 'Eco-Friendly Chemicals', desc: 'Safe for kids, pets and allergy sufferers, with no harsh residue.' },
        fast: { title: 'Fast Response', desc: 'Same-day booking in most areas, with a tight arrival window.' },
        experienced: { title: 'Experienced Specialists', desc: 'Trained, background-checked technicians who know their craft.' },
        pricing: { title: 'Transparent Pricing', desc: 'Upfront quotes before we start — no surprises, no hidden fees.' }
      } },
    ba: { eyebrow: 'Results', title: 'See the difference.', sub: 'Drag the slider to compare.', before: 'before', after: 'after' },
    how: { eyebrow: 'How It Works', title: 'Four steps to a fresher space.',
      steps: {
        s1: { title: 'Book online', desc: 'Choose a service and pick a time that works for you.' },
        s2: { title: 'We arrive', desc: 'Our specialist arrives fully equipped, right on schedule.' },
        s3: { title: 'Professional cleaning', desc: 'Deep cleaning using premium, eco-safe methods.' },
        s4: { title: 'Enjoy the result', desc: 'Walk back into a space that feels brand new.' }
      } },
    reviews: { eyebrow: 'Reviews', title: 'Trusted by people who notice the details.' },
    faq: { eyebrow: 'FAQ', title: 'Questions, answered.' },
    contact: { eyebrow: 'Contact', title: 'Ready for a fresher space?', sub: "Reach out directly or fill out the form — we'll confirm your slot within the hour.", whatsapp: 'WhatsApp', telegram: 'Telegram', formTitle: 'Book your cleaning', namePh: 'Full name', emailPh: 'Email address', submitBtn: 'Request Booking', thanksTitle: 'Request received.', thanksMsg: "We'll be in touch within the hour to confirm your slot." },
    footer: { desc: 'Mobile detailing and deep cleaning for cars, homes and offices.', servicesTitle: 'Services', companyTitle: 'Company', companyLinks: { why: 'Why KEEPO', reviews: 'Reviews', faq: 'FAQ', contact: 'Contact' }, legalTitle: 'Legal', legalLinks: { privacy: 'Privacy Policy', terms: 'Terms of Service' }, copyright: '© 2026 KEEPO. All rights reserved.' },
    footerServiceLinks: ['Car Detailing', 'Upholstery', 'Carpet Cleaning', 'Office Furniture'],
    baWorkTitles: ['Car Cleaning', 'Sofa Cleaning', 'Mattress Cleaning', 'Carpet Cleaning']
  }
};

var ICON_PATHS = {
  home: ['M4 11l8-7 8 7', 'M6 10v9a1 1 0 0 0 1 1h4v-6h2v6h4a1 1 0 0 0 1-1v-9'],
  car: ['M3 13h18l-1.2-4.8A2 2 0 0 0 17.9 7H6.1a2 2 0 0 0-1.9 1.2L3 13z', 'M3 13v3a1 1 0 0 0 1 1h1', 'M20 13v3a1 1 0 0 1-1 1h-1'],
  sparkle: ['M12 3l1.5 6.5L20 11l-6.5 1.5L12 19l-1.5-6.5L4 11l6.5-1.5L12 3z'],
  wrench: ['M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-2.7 2.7-2-2 2.7-2.7z'],
  sofa: ['M4 12V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3', 'M3 12h18v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4z', 'M5 17v2', 'M19 17v2'],
  bed: ['M3 10V7a1 1 0 0 1 1-1h4v4', 'M3 10h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7z', 'M3 17v2', 'M21 17v2'],
  carpet: ['M4 5h16v14H4z', 'M7.5 8.5h9v7h-9z'],
  chair: ['M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3', 'M5 10h14v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6z', 'M5 13H3v3a1 1 0 0 0 1 1h1', 'M19 13h2v3a1 1 0 0 1-1 1h-1'],
  office: ['M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16', 'M12 10h7a1 1 0 0 1 1 1v10', 'M7 7h.01', 'M7 11h.01', 'M7 15h.01', 'M15 13h.01', 'M15 17h.01'],
  star: ['M12 3l1.5 6.5L20 11l-6.5 1.5L12 19l-1.5-6.5L4 11l6.5-1.5L12 3z']
};

var FAQ_DATA = {
  pl: [
    { q: 'Jak działa mobilne sprzątanie?', a: 'Przywozimy cały potrzebny sprzęt i chemię — potrzebujesz jedynie dostępu do prądu i wody.' },
    { q: 'Jak długo trwa typowa usługa?', a: 'Nie działamy w pośpiechu — naszym celem jest nienaganny efekt. Większość zleceń realizujemy w ciągu 1–6 godzin, w zależności od rodzaju przedmiotu, jego rozmiaru i stopnia zabrudzenia.' },
    { q: 'Czy Wasze produkty są bezpieczne dla dzieci i zwierząt?', a: 'Tak — używamy ekologicznych, nietoksycznych środków czyszczących przy każdym zleceniu.' },
    { q: 'Czy muszę być obecny podczas usługi?', a: 'Nie, wystarczy zapewnić dostęp do przestrzeni lub pojazdu w umówionym czasie.' },
    { q: 'Jaki obszar obsługujecie?', a: 'Obecnie obsługujemy aglomerację — dokładną dostępność sprawdzisz podczas rezerwacji.' },
    { q: 'Czy udzielacie gwarancji na wykonaną usługę?', a: 'Tak. Dążymy do jak najwyższej jakości efektu. Jeśli po wykonaniu usługi pojawią się uzasadnione uwagi, rozpatrzymy sytuację i zaproponujemy rozwiązanie.' }
  ],
  ua: [
    { q: 'Як працює мобільне прибирання?', a: 'Ми привозимо все необхідне обладнання та хімію - від вас потрібен лише доступ до розетки та води' },
    { q: 'Скільки триває типова послуга?', a: 'Ми не працюємо поспіхом — наша мета забезпечити бездоганний результат. Більшість замовлень виконується протягом 1–6 годин, залежно від типу виробу, його розміру та ступеня забруднення.' },
    { q: 'Чи безпечні ваші засоби для дітей і тварин?', a: 'Так — ми використовуємо екологічні, нетоксичні засоби на кожному завданні.' },
    { q: 'Чи потрібно бути вдома під час послуги?', a: 'Ні, достатньо забезпечити доступ до приміщення чи авто у призначений час.' },
    { q: 'Які райони ви обслуговуєте?', a: 'Наразі ми обслуговуємо міську агломерацію — точну доступність перевірте під час бронювання.' },
    { q: 'Чи надаєте гарантію на виконані роботи?', a: 'Так. Ми прагнемо до максимально якісного результату. Якщо після виконання роботи виникнуть обґрунтовані зауваження, ми розглянемо ситуацію та запропонуємо рішення.' }
  ],
  en: [
    { q: 'How does mobile cleaning work?', a: 'We bring all the necessary equipment and cleaning chemicals — all you need to provide is access to a power outlet and water.' },
    { q: 'How long does a typical service take?', a: 'We never rush — our goal is a flawless result. Most jobs are completed within 1–6 hours, depending on the item type, its size, and how soiled it is.' },
    { q: 'Are your products safe for kids and pets?', a: 'Yes — we use eco-friendly, non-toxic cleaning solutions on every job.' },
    { q: 'Do I need to be home during the service?', a: 'No, as long as we have access to the space or vehicle at the scheduled time.' },
    { q: 'What areas do you cover?', a: 'We currently serve the greater metro area — check exact availability when you book.' },
    { q: 'Do you offer a guarantee on completed work?', a: 'Yes. We aim for the highest possible quality. If reasonable concerns arise after the job is done, we will review the situation and offer a solution.' }
  ]
};

var TESTIMONIALS = {
  pl: [
    { initial: 'M', name: 'Marta K.', role: 'Właścicielka samochodu', text: 'KEEPO wyczyściło wnętrze mojego samochodu na podjeździe i wyglądało lepiej niż u dealera. Niesamowita dbałość o szczegóły.' },
    { initial: 'D', name: 'David R.', role: 'Kierownik biura', text: 'Nasze sofy biurowe nie były czyszczone od lat. Ekipa była szybka, profesjonalna i nie zostawiła bałaganu.' },
    { initial: 'A', name: 'Anna W.', role: 'Rodzic', text: 'Czyszczenie materaca naprawdę pomogło alergii mojej córki. Rezerwacja była bezproblemowa.' }
  ],
  ua: [
    { initial: 'M', name: 'Marta K.', role: 'Власниця авто', text: 'KEEPO почистили салон мого авто прямо на під\u2019їзній доріжці, і виглядало це краще, ніж у дилера. Неймовірна увага до деталей.' },
    { initial: 'D', name: 'David R.', role: 'Офіс-менеджер', text: 'Наші офісні дивани не чистили роками. Команда працювала швидко, професійно і не залишила безладу.' },
    { initial: 'A', name: 'Anna W.', role: 'Батько/мати', text: 'Чищення матраца справді допомогло з алергією моєї доньки. Бронювання пройшло без зусиль.' }
  ],
  en: [
    { initial: 'M', name: 'Marta K.', role: 'Car Owner', text: 'KEEPO detailed my car in my driveway and it looked better than the dealership. Ridiculous attention to detail.' },
    { initial: 'D', name: 'David R.', role: 'Office Manager', text: "Our office sofas hadn't been cleaned in years. The team was fast, professional and left zero mess." },
    { initial: 'A', name: 'Anna W.', role: 'Parent', text: "Mattress cleaning made a real difference for my daughter's allergies. Booking was effortless." }
  ]
};

var PDICT = {
  pl: {
    tagline: 'Dbamy o to, co ważne.',
    nav: { services: 'Usługi', pricing: 'Cennik', why: 'Dlaczego My', reviews: 'Opinie', faq: 'FAQ', contact: 'Kontakt', bookNow: 'Zarezerwuj' },
    hero: { eyebrow: 'Cennik i rezerwacja', title: 'Cennik', sub: 'Stałe i przejrzyste ceny. Bez ukrytych kosztów.' },
    booking: { eyebrow: 'Rezerwacja online', title: 'Zarezerwuj sprzątanie w 60 sekund.', namePh: 'Imię i nazwisko', emailPh: 'Adres e-mail', submitBtn: 'Potwierdź rezerwację', note: 'Ostateczna cena jest potwierdzana na miejscu przed rozpoczęciem pracy.', thanksTitle: 'Rezerwacja przyjęta.', thanksMsg: 'Potwierdzimy termin i ostateczną cenę w ciągu godziny.', tierOptions: ['Mały', 'Średni', 'Duży'] },
    footer: { copyright: '© 2026 KEEPO. Wszelkie prawa zastrzeżone.', back: '← Powrót do strony głównej' },
    categories: [
      { icon: 'car', title: 'Czyszczenie samochodu', rows: [['Mały samochód','299 zł'],['Sedan','329 zł'],['Kombi','349 zł'],['SUV','379 zł'],['Van','449 zł']] },
      { icon: 'sofa', title: 'Sofy', rows: [['Fotel','45 zł'],['Pufa','30 zł'],['Sofa 2-osobowa','170 zł'],['Sofa 3-osobowa','220 zł'],['Narożnik','280 zł'],['Sofa U','350 zł']] },
      { icon: 'bed', title: 'Materace', rows: [['90×200','80 zł'],['140×200','100 zł'],['160–180×200','130 zł'],['Druga strona','+40 zł']] },
      { icon: 'carpet', title: 'Dywany', rows: [['Do 5 m²','25 zł/m²'],['5–10 m²','22 zł/m²'],['Powyżej 10 m²','wycena indywidualna']] },
      { icon: 'chair', title: 'Krzesła', rows: [['Krzesło','25 zł'],['Fotel','45 zł'],['Krzesło biurowe','35 zł']] },
      { icon: 'star', title: 'Usługi dodatkowe', rows: [['Usuwanie sierści','30 zł'],['Usuwanie trudnych plam','30 zł'],['Impregnacja','50 zł'],['Ozonowanie','60 zł']] }
    ],
    notice: 'Ceny dotyczą standardowego stopnia zabrudzenia. W przypadku bardzo silnych zabrudzeń, sierści zwierząt lub specjalistycznego czyszczenia dodatkowy koszt jest zawsze ustalany z klientem przed rozpoczęciem pracy.'
  },
  ua: {
    tagline: 'Дбаємо про те, що важливо.',
    nav: { services: 'Послуги', pricing: 'Ціни', why: 'Чому Ми', reviews: 'Відгуки', faq: 'FAQ', contact: 'Контакти', bookNow: 'Забронювати' },
    hero: { eyebrow: 'Ціни та бронювання', title: 'Ціни', sub: 'Стабільні та прозорі ціни. Без прихованих витрат.' },
    booking: { eyebrow: 'Онлайн бронювання', title: 'Забронюйте прибирання за 60 секунд.', namePh: "Повне ім'я", emailPh: 'Електронна пошта', submitBtn: 'Підтвердити бронювання', note: 'Остаточна ціна підтверджується на місці перед початком роботи.', thanksTitle: 'Бронювання отримано.', thanksMsg: 'Ми підтвердимо час і остаточну ціну протягом години.', tierOptions: ['Малий', 'Середній', 'Великий'] },
    footer: { copyright: '© 2026 KEEPO. Усі права захищено.', back: '← Повернутися на головну' },
    categories: [
      { icon: 'car', title: 'Чищення авто', rows: [['Малий автомобіль','299 zł'],['Седан','329 zł'],['Універсал','349 zł'],['SUV','379 zł'],['Фургон','449 zł']] },
      { icon: 'sofa', title: 'Дивани', rows: [['Крісло','45 zł'],['Пуф','30 zł'],['Диван 2-місний','170 zł'],['Диван 3-місний','220 zł'],['Кутовий диван','280 zł'],['П-подібний диван','350 zł']] },
      { icon: 'bed', title: 'Матраци', rows: [['90×200','80 zł'],['140×200','100 zł'],['160–180×200','130 zł'],['Друга сторона','+40 zł']] },
      { icon: 'carpet', title: 'Килими', rows: [['До 5 м²','25 zł/м²'],['5–10 м²','22 zł/м²'],['Понад 10 м²','індивідуальна оцінка']] },
      { icon: 'chair', title: 'Стільці', rows: [['Стілець','25 zł'],['Крісло','45 zł'],['Офісне крісло','35 zł']] },
      { icon: 'star', title: 'Додаткові послуги', rows: [['Видалення шерсті','30 zł'],['Видалення складних плям','30 zł'],['Просочення (захист)','50 zł'],['Озонування','60 zł']] }
    ],
    notice: 'Ціни вказані для стандартного рівня забруднення. У разі дуже сильного забруднення, шерсті тварин або спеціалізованого чищення додаткова вартість завжди узгоджується з клієнтом до початку роботи.'
  },
  en: {
    tagline: 'We care about what matters.',
    nav: { services: 'Services', pricing: 'Pricing', why: 'Why Us', reviews: 'Reviews', faq: 'FAQ', contact: 'Contact', bookNow: 'Book Now' },
    hero: { eyebrow: 'Pricing & Booking', title: 'Pricing', sub: 'Fixed, transparent pricing. No hidden costs.' },
    booking: { eyebrow: 'Online Booking', title: 'Book your cleaning in 60 seconds.', namePh: 'Full name', emailPh: 'Email address', submitBtn: 'Confirm Booking', note: 'Final price is confirmed on site before work begins.', thanksTitle: 'Booking requested.', thanksMsg: "We'll confirm your slot and final price within the hour.", tierOptions: ['Small', 'Medium', 'Large'] },
    footer: { copyright: '© 2026 KEEPO. All rights reserved.', back: '← Back to home' },
    categories: [
      { icon: 'car', title: 'Car Cleaning', rows: [['Small car','299 zł'],['Sedan','329 zł'],['Wagon','349 zł'],['SUV','379 zł'],['Van','449 zł']] },
      { icon: 'sofa', title: 'Sofas', rows: [['Armchair','45 zł'],['Pouf','30 zł'],['2-seat sofa','170 zł'],['3-seat sofa','220 zł'],['Corner sofa','280 zł'],['U-shaped sofa','350 zł']] },
      { icon: 'bed', title: 'Mattresses', rows: [['90×200','80 zł'],['140×200','100 zł'],['160–180×200','130 zł'],['Other side','+40 zł']] },
      { icon: 'carpet', title: 'Carpets', rows: [['Up to 5 m²','25 zł/m²'],['5–10 m²','22 zł/m²'],['Over 10 m²','custom quote']] },
      { icon: 'chair', title: 'Chairs', rows: [['Chair','25 zł'],['Armchair','45 zł'],['Office chair','35 zł']] },
      { icon: 'star', title: 'Additional Services', rows: [['Pet hair removal','30 zł'],['Tough stain removal','30 zł'],['Fabric protection','50 zł'],['Ozone treatment','60 zł']] }
    ],
    notice: 'Prices apply to standard soiling levels. For very heavy soiling, pet hair, or specialized cleaning, any extra cost is always agreed with the client before work begins.'
  }
};

var CDICT = {
  pl: {
    tagline: 'Dbamy o to, co ważne.',
    nav: { services: 'Usługi', pricing: 'Cennik', why: 'Dlaczego My', reviews: 'Opinie', faq: 'FAQ', contact: 'Kontakt', bookNow: 'Zarezerwuj' },
    hero: { eyebrow: 'Skontaktuj się z nami', title: 'Skontaktuj się z KEEPO', sub: 'Odpowiadamy szybko i pomożemy dobrać najlepsze rozwiązanie czyszczące — do auta, domu lub biura.', cta: 'Wyceń usługę' },
    cardsSection: { eyebrow: 'Kontakt', title: 'Wybierz wygodny sposób kontaktu' },
    cards: {
      phone: { label: 'Telefon', value: '+48 500 100 200' }, email: { label: 'Email', value: 'hello@keepo.co' },
      whatsapp: { label: 'WhatsApp', value: 'Napisz na czacie' }, telegram: { label: 'Telegram', value: '@keepo_clean' },
      location: { label: 'Lokalizacja', value: 'Katowice, Polska' }, hours: { label: 'Godziny pracy', value: 'Pon–Nd, 8:00–20:00' }
    },
    form: { eyebrow: 'Zapytanie', title: 'Powiedz nam, co wymaga czyszczenia', namePh: 'Imię i nazwisko', emailPh: 'Adres e-mail', cityPh: 'Miasto', submitBtn: 'Otrzymaj bezpłatną wycenę', thanksTitle: 'Zgłoszenie wysłane.', thanksMsg: 'Skontaktujemy się w ciągu godziny z wyceną.' },
    area: { eyebrow: 'Obszar działania', title: 'Jesteśmy blisko, gdziekolwiek jesteś', sub: 'Obsługujemy Katowice i okoliczne miasta.' },
    footer: { copyright: '© 2026 KEEPO. Wszelkie prawa zastrzeżone.', back: '← Powrót do strony głównej' }
  },
  ua: {
    tagline: 'Дбаємо про те, що важливо.',
    nav: { services: 'Послуги', pricing: 'Ціни', why: 'Чому Ми', reviews: 'Відгуки', faq: 'FAQ', contact: 'Контакти', bookNow: 'Забронювати' },
    hero: { eyebrow: "Зв'яжіться з нами", title: "Зв'яжіться з KEEPO", sub: 'Ми відповідаємо швидко і допоможемо підібрати найкраще рішення для чищення — авто, дому чи офісу.', cta: 'Отримати розрахунок' },
    cardsSection: { eyebrow: 'Контакти', title: 'Оберіть зручний спосіб зв\u2019язку' },
    cards: {
      phone: { label: 'Телефон', value: '+48 500 100 200' }, email: { label: 'Email', value: 'hello@keepo.co' },
      whatsapp: { label: 'WhatsApp', value: 'Написати в чат' }, telegram: { label: 'Telegram', value: '@keepo_clean' },
      location: { label: 'Локація', value: 'Катовіце, Польща' }, hours: { label: 'Графік роботи', value: 'Пн–Нд, 8:00–20:00' }
    },
    form: { eyebrow: 'Заявка', title: 'Розкажіть, що потрібно почистити', namePh: "Повне ім'я", emailPh: 'Електронна пошта', cityPh: 'Місто', submitBtn: 'Отримати безкоштовний розрахунок', thanksTitle: 'Заявку надіслано.', thanksMsg: 'Ми зв\u2019яжемося з вами протягом години з розрахунком вартості.' },
    area: { eyebrow: 'Зона обслуговування', title: 'Ми поруч, де б ви не були', sub: 'Ми обслуговуємо Катовіце та прилеглі міста.' },
    footer: { copyright: '© 2026 KEEPO. Усі права захищено.', back: '← Повернутися на головну' }
  },
  en: {
    tagline: 'We care about what matters.',
    nav: { services: 'Services', pricing: 'Pricing', why: 'Why Us', reviews: 'Reviews', faq: 'FAQ', contact: 'Contact', bookNow: 'Book Now' },
    hero: { eyebrow: 'Get in touch', title: 'Get in touch with KEEPO', sub: 'We reply fast and help you pick the best cleaning solution — for your car, home, or office.', cta: 'Get a quote' },
    cardsSection: { eyebrow: 'Contact', title: 'Choose a convenient way to reach us' },
    cards: {
      phone: { label: 'Phone', value: '+48 500 100 200' }, email: { label: 'Email', value: 'hello@keepo.co' },
      whatsapp: { label: 'WhatsApp', value: 'Message us' }, telegram: { label: 'Telegram', value: '@keepo_clean' },
      location: { label: 'Location', value: 'Katowice, Poland' }, hours: { label: 'Working Hours', value: 'Mon–Sun, 8am–8pm' }
    },
    form: { eyebrow: 'Request', title: 'Tell us what needs cleaning', namePh: 'Full name', emailPh: 'Email address', cityPh: 'City', submitBtn: 'Get a free quote', thanksTitle: 'Request sent.', thanksMsg: "We'll get back to you within the hour with a quote." },
    area: { eyebrow: 'Service Area', title: "We're nearby, wherever you are", sub: 'We serve Katowice and surrounding cities.' },
    footer: { copyright: '© 2026 KEEPO. All rights reserved.', back: '← Back to home' }
  }
};

var PICON_PATHS = {
  car: ['M3 13h18l-1.2-4.8A2 2 0 0 0 17.9 7H6.1a2 2 0 0 0-1.9 1.2L3 13z', 'M3 13v3a1 1 0 0 0 1 1h1', 'M20 13v3a1 1 0 0 1-1 1h-1'],
  sofa: ['M4 12V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3', 'M3 12h18v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4z', 'M5 17v2', 'M19 17v2'],
  bed: ['M3 10V7a1 1 0 0 1 1-1h4v4', 'M3 10h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7z', 'M3 17v2', 'M21 17v2'],
  carpet: ['M4 5h16v14H4z', 'M7.5 8.5h9v7h-9z'],
  chair: ['M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3', 'M5 10h14v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-6z', 'M5 13H3v3a1 1 0 0 0 1 1h1', 'M19 13h2v3a1 1 0 0 1-1 1h-1'],
  star: ['M12 3l1.5 6.5L20 11l-6.5 1.5L12 19l-1.5-6.5L4 11l6.5-1.5L12 3z']
};

var CONTACT_ICONS = {
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.9a16 16 0 0 0 6 6l1.4-1.4a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z"></path>',
  email: '<rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M2 7l10 6 10-6"></path>',
  whatsapp: '<path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z"></path><path d="M8.5 8.7c0-.4.4-.7 1-.7.4 0 .8.2 1 .6l.6 1.2c.2.4.1.9-.2 1.2l-.5.5a5.6 5.6 0 0 0 2.6 2.6l.5-.5c.3-.3.8-.4 1.2-.2l1.2.6c.4.2.6.6.6 1 0 .6-.3 1-.7 1-3.9 0-7.3-3.4-7.3-7.3z"></path>',
  telegram: '<path d="M22 2 11 13"></path><path d="M22 2 15 22l-4-9-9-4 20-7z"></path>',
  location: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path><circle cx="12" cy="10" r="3"></circle>',
  hours: '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3.5 2"></path>'
};

return { DICT: DICT, ICON_PATHS: ICON_PATHS, FAQ_DATA: FAQ_DATA, TESTIMONIALS: TESTIMONIALS, PDICT: PDICT, CDICT: CDICT, PICON_PATHS: PICON_PATHS, CONTACT_ICONS: CONTACT_ICONS };
})();
