// Shared booking form config/logic — single source of truth for all 3 KEEPO forms
// (Landing #contact, Pricing #book, Contacts #form). Loaded as a plain global script.
window.KEEPO_BOOKING_SHARED = (function () {
  var SERVICE_OPTIONS = {
    pl: [
      { value: 'car', label: '🚗 Czyszczenie wnętrza samochodu', placeholder: 'Podaj markę i model samochodu oraz preferowany termin.' },
      { value: 'furniture', label: '🛋️ Czyszczenie mebli', placeholder: 'Napisz jaki mebel chcesz wyczyścić (np. sofa narożna, fotel, krzesła) oraz podaj adres.' },
      { value: 'mattress', label: '🛏️ Czyszczenie materaca', placeholder: 'Podaj rozmiar materaca (np. 90×200 lub 160×200) oraz adres.' },
      { value: 'carpet', label: '🧶 Czyszczenie dywanu', placeholder: 'Podaj przybliżony rozmiar dywanu oraz adres.' },
      { value: 'commercial', label: '🏢 Czyszczenie powierzchni komercyjnych', placeholder: 'Opisz pomieszczenie, ilość mebli lub powierzchnię do wyczyszczenia.' },
      { value: 'other', label: '❓ Inna usługa', placeholder: 'Opisz czego potrzebujesz.' }
    ],
    ua: [
      { value: 'car', label: '🚗 Хімчистка салону авто', placeholder: 'Вкажіть марку і модель авто та бажану дату.' },
      { value: 'furniture', label: '🛋️ Чистка меблів', placeholder: 'Напишіть який меблевий виріб потрібно почистити (напр. кутовий диван, крісло, стільці) та вкажіть адресу.' },
      { value: 'mattress', label: '🛏️ Чистка матраца', placeholder: 'Вкажіть розмір матраца (напр. 90×200 або 160×200) та адресу.' },
      { value: 'carpet', label: '🧶 Чистка килима', placeholder: 'Вкажіть приблизний розмір килима та адресу.' },
      { value: 'commercial', label: '🏢 Чистка комерційних приміщень', placeholder: 'Опишіть приміщення, кількість меблів або площу для чищення.' },
      { value: 'other', label: '❓ Інша послуга', placeholder: 'Опишіть, що вам потрібно.' }
    ],
    en: [
      { value: 'car', label: '🚗 Car Interior Cleaning', placeholder: 'Tell us your car make/model and preferred date.' },
      { value: 'furniture', label: '🛋️ Furniture Cleaning', placeholder: "Tell us which furniture you'd like cleaned (e.g. corner sofa, armchair, chairs) and your address." },
      { value: 'mattress', label: '🛏️ Mattress Cleaning', placeholder: 'Tell us the mattress size (e.g. 90×200 or 160×200) and your address.' },
      { value: 'carpet', label: '🧶 Carpet Cleaning', placeholder: 'Tell us the approximate carpet size and your address.' },
      { value: 'commercial', label: '🏢 Commercial Space Cleaning', placeholder: 'Describe the space, amount of furniture, or area to clean.' },
      { value: 'other', label: '❓ Other Service', placeholder: 'Describe what you need.' }
    ]
  };
  var DEFAULT_PLACEHOLDER = { pl: 'Wpisz dodatkowe informacje (opcjonalnie)', ua: 'Додаткова інформація (необов’язково)', en: 'Additional info (optional)' };
  var CHOOSE_LABEL = { pl: 'Wybierz usługę', ua: 'Оберіть послугу', en: 'Select a service' };
  var DATE_PLACEHOLDER = { pl: 'Wybierz datę', ua: 'Оберіть дату', en: 'Select a date' };
  function getDatePlaceholder(lang) { return DATE_PLACEHOLDER[lang] || DATE_PLACEHOLDER.pl; }

  function getServiceOptions(lang) { return SERVICE_OPTIONS[lang] || SERVICE_OPTIONS.pl; }
  function getChooseLabel(lang) { return CHOOSE_LABEL[lang] || CHOOSE_LABEL.pl; }
  function getPlaceholder(lang, value) {
    var list = getServiceOptions(lang);
    var found = list.filter(function (o) { return o.value === value; })[0];
    return found ? found.placeholder : (DEFAULT_PLACEHOLDER[lang] || DEFAULT_PLACEHOLDER.pl);
  }
  function formatPolishPhone(raw) {
    var d = (raw || '').replace(/\D/g, '').slice(0, 9);
    var parts = [d.slice(0, 3), d.slice(3, 6), d.slice(6, 9)].filter(Boolean);
    return parts.join(' ');
  }
  function isValidPolishPhone(raw) { return /^\d{9}$/.test((raw || '').replace(/\D/g, '')); }

  return {
    PHONE_PREFIX: '+48',
    SERVICE_OPTIONS: SERVICE_OPTIONS,
    getServiceOptions: getServiceOptions,
    getChooseLabel: getChooseLabel,
    getPlaceholder: getPlaceholder,
    getDatePlaceholder: getDatePlaceholder,
    formatPolishPhone: formatPolishPhone,
    isValidPolishPhone: isValidPolishPhone
  };
})();
