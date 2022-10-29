import { createI18n } from 'vue-i18n'

import ua from '../locales/ua.json'
import en from '../locales/en.json'
import ru from '../locales/ru.json'

const i18n = createI18n({
    legacy: false,
    locale: import.meta.env.VITE_I18N_LOCALE || 'en',
    fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'ru',
    messages: {
      en,
      ua,
      ru
    }
  })

  export default i18n