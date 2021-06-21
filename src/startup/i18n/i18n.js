import i18n from 'i18next';
import * as config from 'locales/config';

i18n
  .init({
    debug: process.env.NODE_ENV === 'development',
    lng: config.main,
    fallbackLng: config.main,
    whitelist: config.langs,
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
    resources: config.sources,
  });

export default i18n;
