import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';

const options = {
    order: ['cookie'],
    lookupCookie: 'selected_language',
    caches: ['cookie'],
    cookieOptions: { path: '/', sameSite: 'strict' },
};

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        backend: {
            /* translation file path */
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
        fallbackLng: 'en',
        ns: ['example'],
        keySeparator: false, // we do not use keys in form messages.welcome
        interpolation: {
            escapeValue: false, // react already safes from xss
            formatSeparator: ',',
        },
        react: {
            useSuspense: true,
        },
        detection: options,
    });

export default i18n;
