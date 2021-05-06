import i18n, { TFunction } from 'i18next';
import { ELanguages } from '../models/models';

export interface Translations {
  [key: string]: string | { [key: string]: string };
}

export type TranslationMap = {
  [key in ELanguages]: Translations;
};

export const initTranslations = (translationsMap: TranslationMap): Promise<TFunction> =>
  i18n.init(
    {
      supportedLngs: Object.values(ELanguages),
      fallbackLng: ELanguages.en,
      // allow keys to be phrases having `:`, `.`
      nsSeparator: false,
      keySeparator: false,
      resources: {
        en: {
          translation: translationsMap.en,
        },
        de: {
          translation: translationsMap.de,
        },
      },
      debug: false,
    }
  );
