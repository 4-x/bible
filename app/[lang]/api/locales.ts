interface Langs {
  readonly [key: string]: string
}

export const langs: Langs = {
  'fr': 'fr_apee',
  'es': 'es_rvr',
  'en-US': 'en_kjv',
  'ru': 'ru_synodal',
  'eo': 'eo_esperanto'
}

// export const langs2: Langs = {
//   'fr': {
//     bible: 'fr_apee',
//     lang: 'french'
//   },
//   'es': 'es_rvr',
//   'en-US': 'en_kjv',
//   'ru': 'ru_synodal',
//   'eo': 'eo_esperanto'
// }

export const locales = Object.keys(langs)