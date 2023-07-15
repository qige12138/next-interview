const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ch: () => import('./dictionaries/ch.json').then((module) => module.default),
}

export const getDictionary = async (locale) => dictionaries[locale]()