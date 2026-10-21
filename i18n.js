const TRANSLATIONS_PATH = '../translations';
const SUPPORTED_LANGS = ['en', 'ar', 'zh'];
const DEFAULT_LANG = 'en';
const RTL_LANGS = ['ar'];

const dictCache = {};

async function loadDict(lang) {
  if (dictCache[lang]) return dictCache[lang];
  const res = await fetch(`${TRANSLATIONS_PATH}/${lang}.json`);
  if (!res.ok) throw new Error(`Could not load ${lang}.json`);
  dictCache[lang] = await res.json();
  return dictCache[lang];
}

// بتجيب القيمة من المفتاح المتداخل مثل "nav.menu"
function getValue(dict, key) {
  return key.split('.').reduce((obj, k) => (obj ? obj[k] : undefined), dict);
}

async function setLang(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;

  let dict;
  try {
    dict = await loadDict(lang);
  } catch (err) {
    console.error(err);
    if (lang !== DEFAULT_LANG) return setLang(DEFAULT_LANG);
    return;
  }

  // النصوص العادية (innerHTML عشان تدعم <br>)
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = getValue(dict, el.dataset.i18n);
    if (value === undefined) return;
    el.innerHTML = value;
    // تأثيرات الـ CSS اللي بتعتمد على data-text
    if (el.hasAttribute('data-text')) el.setAttribute('data-text', value);
  });

  // الـ placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const value = getValue(dict, el.dataset.i18nPlaceholder);
    if (value !== undefined) el.placeholder = value;
  });

  // اللغة والاتجاه
  document.documentElement.lang = lang;
  document.documentElement.dir = RTL_LANGS.includes(lang) ? 'rtl' : 'ltr';

  const select = document.getElementById('language-select');
  if (select) select.value = lang;

  try {
    localStorage.setItem('lang', lang);
  } catch (e) {}
}

function getInitialLang() {
  let saved = null;
  try {
    saved = localStorage.getItem('lang');
  } catch (e) {}
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;

  const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
  return SUPPORTED_LANGS.includes(browserLang) ? browserLang : DEFAULT_LANG;
}

document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('language-select');
  if (select) select.addEventListener('change', (e) => setLang(e.target.value));
  setLang(getInitialLang());
});