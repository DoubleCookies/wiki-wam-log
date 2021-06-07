import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';

export const resources = {
  en: {
    translation: {
      wamIntroStart: 'WAM (Wiki Activity Monitor) — rating of the largest wikis on FANDOM. ' +
        'Every wiki get score based on various (and unknown) params from 0 to 100 (higher — better), ' +
        'and after that rating was made (and it was updated every day).',
      wamIntroFinish: 'I saved rating values with special scripts and built graphs with this data.',
      undertale: 'Undertale Wiki (ru)',
      geometryDash: 'Geometry Dash Wiki (ru)',
      stevenUniverse: 'Steven Universe Wiki (ru)',
      battleCats: 'The Battle Cats Wiki (ru)',

    }
  },
  ru: {
    translation: {
      wamIntroStart: 'WAM (Wiki Activity Monitor) — рейтинг крупнейших википроектов на FANDOM\'е. ' +
        'Каждой вики на основе различных (и неизвестных) параметров проставлялся балл от 0 до 100 (больше — лучше), ' +
        'после чего составлялся рейтинг (который обновлялся каждый день).',
      wamIntroFinish: 'С помощью специальных скриптов я сохранил у себя значения рейтинга ' +
        'и построил графики на основе этих данных ',
      undertale: 'Undertale вики',
      geometryDash: 'Geometry Dash вики',
      stevenUniverse: 'Steven Universe вики',
      battleCats: 'The Battle Cats вики',
    }
  }
}

i18n.use(detector).use(initReactI18next).init({
  fallbackLng: 'en',
  resources,
});

export default i18n;