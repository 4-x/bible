export interface BibleBookNames {
  [index: string]: string;
  Genesis: string;
  Exodus: string;
  Leviticus: string;
  Numbers: string;
  Deuteronomy: string;
  Joshua: string;
  Judges: string;
  Ruth: string;
  '1 Samuel': string;
  '2 Samuel': string;
  '1 Kings': string;
  '2 Kings': string;
  '1 Chronicles': string;
  '2 Chronicles': string;
  Ezra: string;
  Nehemiah: string;
  Esther: string;
  Job: string;
  Psalms: string;
  Proverbs: string;
  Ecclesiastes: string;
  'Song of Solomon': string;
  Isaiah: string;
  Jeremiah: string;
  Lamentations: string;
  Ezekiel: string;
  Daniel: string;
  Hosea: string;
  Joel: string;
  Amos: string;
  Obadiah: string;
  Jonah: string;
  Micah: string;
  Nahum: string;
  Habakkuk: string;
  Zephaniah: string;
  Haggai: string;
  Zechariah: string;
  Malachi: string;
  Matthew: string;
  Mark: string;
  Luke: string;
  John: string;
  Acts: string;
  Romans: string;
  '1 Corinthians': string;
  '2 Corinthians': string;
  Galatians: string;
  Ephesians: string;
  Philippians: string;
  Colossians: string;
  '1 Thessalonians': string;
  '2 Thessalonians': string;
  '1 Timothy': string;
  '2 Timothy': string;
  Titus: string;
  Philemon: string;
  Hebrews: string;
  James: string;
  '1 Peter': string;
  '2 Peter': string;
  '1 John': string;
  '2 John': string;
  '3 John': string;
  Jude: string;
  Revelation: string;
}

export interface LangRef {
  [index: string]: string | BibleBookNames,
  name: string,
  language: string,
  code: string,
  books: BibleBookNames
}

export const ru: BibleBookNames = {
  'Genesis': 'Бытие',
  'Exodus': 'Исход',
  'Leviticus': 'Левит',
  'Numbers': 'Числа',
  'Deuteronomy': 'Второзаконие',
  'Joshua': 'Иисус Навин',
  'Judges': 'Судьи',
  'Ruth': 'Руфь',
  '1 Samuel': '1 Царств',
  '2 Samuel': '2 Царств',
  '1 Kings': '1 Царей',
  '2 Kings': '2 Царей',
  '1 Chronicles': '1 Паралипоменон',
  '2 Chronicles': '2 Паралипоменон',
  'Ezra': 'Ездра',
  'Nehemiah': 'Неемия',
  'Esther': 'Есфирь',
  'Job': 'Иов',
  'Psalms': 'Псалмы',
  'Proverbs': 'Притчи',
  'Ecclesiastes': 'Екклесиаст',
  'Song of Solomon': 'Песня Песней',
  'Isaiah': 'Исаия',
  'Jeremiah': 'Иеремия',
  'Lamentations': 'Плач Иеремии',
  'Ezekiel': 'Иезекииль',
  'Daniel': 'Даниил',
  'Hosea': 'Осия',
  'Joel': 'Иоиль',
  'Amos': 'Амос',
  'Obadiah': 'Авдий',
  'Jonah': 'Иона',
  'Micah': 'Михей',
  'Nahum': 'Наум',
  'Habakkuk': 'Аввакум',
  'Zephaniah': 'Софония',
  'Haggai': 'Аггей',
  'Zechariah': 'Захария',
  'Malachi': 'Малахия',
  'Matthew': 'Матфей',
  'Mark': 'Марк',
  'Luke': 'Лука',
  'John': 'Иоанн',
  'Acts': 'Деяния',
  'Romans': 'Римлянам',
  '1 Corinthians': '1 Коринфянам',
  '2 Corinthians': '2 Коринфянам',
  'Galatians': 'Галатам',
  'Ephesians': 'Ефесянам',
  'Philippians': 'Филиппийцам',
  'Colossians': 'Колоссянам',
  '1 Thessalonians': '1 Фессалоникийцам',
  '2 Thessalonians': '2 Фессалоникийцам',
  '1 Timothy': '1 Тимофею',
  '2 Timothy': '2 Тимофею',
  'Titus': 'Титу',
  'Philemon': 'Филимону',
  'Hebrews': 'Евреям',
  'James': 'Иакова',
  '1 Peter': '1 Петра',
  '2 Peter': '2 Петра',
  '1 John': '1 Иоанна',
  '2 John': '2 Иоанна',
  '3 John': '3 Иоанна',
  'Jude': 'Иуда',
  'Revelation': 'Откровение'
}


export const fr: BibleBookNames = {
  'Genesis': 'Genèse',
  'Exodus': 'Exode',
  'Leviticus': 'Lévitique',
  'Numbers': 'Nombres',
  'Deuteronomy': 'Deutéronome',
  'Joshua': 'Josué',
  'Judges': 'Juges',
  'Ruth': 'Ruth',
  '1 Samuel': '1 Samuel',
  '2 Samuel': '2 Samuel',
  '1 Kings': '1 Rois',
  '2 Kings': '2 Rois',
  '1 Chronicles': '1 Chroniques',
  '2 Chronicles': '2 Chroniques',
  'Ezra': 'Esdras',
  'Nehemiah': 'Néhémie',
  'Esther': 'Esther',
  'Job': 'Job',
  'Psalms': 'Psaumes',
  'Proverbs': 'Proverbes',
  'Ecclesiastes': 'Ecclésiaste',
  'Song of Solomon': 'Cantique des Cantiques',
  'Isaiah': 'Ésaïe',
  'Jeremiah': 'Jérémie',
  'Lamentations': 'Lamentations',
  'Ezekiel': 'Ézéchiel',
  'Daniel': 'Daniel',
  'Hosea': 'Osée',
  'Joel': 'Joël',
  'Amos': 'Amos',
  'Obadiah': 'Abdias',
  'Jonah': 'Jonas',
  'Micah': 'Michée',
  'Nahum': 'Nahum',
  'Habakkuk': 'Habacuc',
  'Zephaniah': 'Sophonie',
  'Haggai': 'Aggée',
  'Zechariah': 'Zacharie',
  'Malachi': 'Malachie',
  'Matthew': 'Matthieu',
  'Mark': 'Marc',
  'Luke': 'Luc',
  'John': 'Jean',
  'Acts': 'Actes',
  'Romans': 'Romains',
  '1 Corinthians': '1 Corinthiens',
  '2 Corinthians': '2 Corinthiens',
  'Galatians': 'Galates',
  'Ephesians': 'Éphésiens',
  'Philippians': 'Philippiens',
  'Colossians': 'Colossiens',
  '1 Thessalonians': '1 Thessaloniciens',
  '2 Thessalonians': '2 Thessaloniciens',
  '1 Timothy': '1 Timothée',
  '2 Timothy': '2 Timothée',
  'Titus': 'Tite',
  'Philemon': 'Philémon',
  'Hebrews': 'Hébreux',
  'James': 'Jacques',
  '1 Peter': '1 Pierre',
  '2 Peter': '2 Pierre',
  '1 John': '1 Jean',
  '2 John': '2 Jean',
  '3 John': '3 Jean',
  'Jude': 'Jude',
  'Revelation': 'Apocalypse'
}



export const es: BibleBookNames = {
  'Genesis': 'Génesis',
  'Exodus': 'Éxodo',
  'Leviticus': 'Levítico',
  'Numbers': 'Números',
  'Deuteronomy': 'Deuteronomio',
  'Joshua': 'Josué',
  'Judges': 'Jueces',
  'Ruth': 'Rut',
  '1 Samuel': '1 Samuel',
  '2 Samuel': '2 Samuel',
  '1 Kings': '1 Reyes',
  '2 Kings': '2 Reyes',
  '1 Chronicles': '1 Crónicas',
  '2 Chronicles': '2 Crónicas',
  'Ezra': 'Esdras',
  'Nehemiah': 'Nehemías',
  'Esther': 'Ester',
  'Job': 'Job',
  'Psalms': 'Salmos',
  'Proverbs': 'Proverbios',
  'Ecclesiastes': 'Eclesiastés',
  'Song of Solomon': 'Cantares',
  'Isaiah': 'Isaías',
  'Jeremiah': 'Jeremías',
  'Lamentations': 'Lamentaciones',
  'Ezekiel': 'Ezequiel',
  'Daniel': 'Daniel',
  'Hosea': 'Oseas',
  'Joel': 'Joel',
  'Amos': 'Amós',
  'Obadiah': 'Abdías',
  'Jonah': 'Jonás',
  'Micah': 'Miqueas',
  'Nahum': 'Nahúm',
  'Habakkuk': 'Habacuc',
  'Zephaniah': 'Sofonías',
  'Haggai': 'Hageo',
  'Zechariah': 'Zacarías',
  'Malachi': 'Malaquías',
  'Matthew': 'Mateo',
  'Mark': 'Marcos',
  'Luke': 'Lucas',
  'John': 'Juan',
  'Acts': 'Hechos',
  'Romans': 'Romanos',
  '1 Corinthians': '1 Corintios',
  '2 Corinthians': '2 Corintios',
  'Galatians': 'Gálatas',
  'Ephesians': 'Efesios',
  'Philippians': 'Filipenses',
  'Colossians': 'Colosenses',
  '1 Thessalonians': '1 Tesalonicenses',
  '2 Thessalonians': '2 Tesalonicenses',
  '1 Timothy': '1 Timoteo',
  '2 Timothy': '2 Timoteo',
  'Titus': 'Tito',
  'Philemon': 'Filemón',
  'Hebrews': 'Hebreos',
  'James': 'Santiago',
  '1 Peter': '1 Pedro',
  '2 Peter': '2 Pedro',
  '1 John': '1 Juan',
  '2 John': '2 Juan',
  '3 John': '3 Juan',
  'Jude': 'Judas',
  'Revelation': 'Apocalipsis'
}

export const eo: BibleBookNames = {
  'Genesis': 'Genezo',
  'Exodus': 'Elira Libro',
  'Leviticus': 'Levidika Libro',
  'Numbers': 'Nombroj',
  'Deuteronomy': 'Deuteronomio',
  'Joshua': 'Josuo',
  'Judges': 'Juĝistoj',
  'Ruth': 'Rut',
  '1 Samuel': '1 Samuel',
  '2 Samuel': '2 Samuel',
  '1 Kings': '1 Reĝoj',
  '2 Kings': '2 Reĝoj',
  '1 Chronicles': '1 Kronikoj',
  '2 Chronicles': '2 Kronikoj',
  'Ezra': 'Esra',
  'Nehemiah': 'Nehemio',
  'Esther': 'Estroj',
  'Job': 'Jobo',
  'Psalms': 'Saĝecaj Vortoj',
  'Proverbs': 'La Proverboj',
  'Ecclesiastes': 'Predikanto',
  'Song of Solomon': 'La Kanto de la Kantoj',
  'Isaiah': 'Esaja',
  'Jeremiah': 'Jeremia',
  'Lamentations': 'La Plorado',
  'Ezekiel': 'Jeĥezkel',
  'Daniel': 'Danielo',
  'Hosea': 'Hozea',
  'Joel': 'Joelo',
  'Amos': 'Amoso',
  'Obadiah': 'ʼOvadja',
  'Jonah': 'Jonao',
  'Micah': 'Miĥeo',
  'Nahum': 'Naĥumo',
  'Habakkuk': 'Ĥabakuko',
  'Zephaniah': 'Zefanja',
  'Haggai': 'Ĥagaj',
  'Zechariah': 'Zeĥarja',
  'Malachi': 'Malaĥi',
  'Matthew': 'Mateo',
  'Mark': 'Marko',
  'Luke': 'Laŭko',
  'John': 'Johano',
  'Acts': 'Apostoloj',
  'Romans': 'La Romanoj',
  '1 Corinthians': '1 Korintanoj',
  '2 Corinthians': '2 Korintanoj',
  'Galatians': 'La Galatoj',
  'Ephesians': 'La Efesanoj',
  'Philippians': 'La Filipianoj',
  'Colossians': 'La Kolosanoj',
  '1 Thessalonians': '1 Tesalonikanoj',
  '2 Thessalonians': '2 Tesalonikanoj',
  '1 Timothy': '1 Timoteo',
  '2 Timothy': '2 Timoteo',
  'Titus': 'Tito',
  'Philemon': 'Filémon',
  'Hebrews': 'La Hebreoj',
  'James': 'Jakobo',
  '1 Peter': '1 Petro',
  '2 Peter': '2 Petro',
  '1 John': '1 Johano',
  '2 John': '2 Johano',
  '3 John': '3 Johano',
  'Jude': 'Juda',
  'Revelation': 'Apokalipso'
}

export const en: BibleBookNames = {
  'Genesis': 'Genesis',
  'Exodus': 'Exodus',
  'Leviticus': 'Leviticus',
  'Numbers': 'Numbers',
  'Deuteronomy': 'Deuteronomy',
  'Joshua': 'Joshua',
  'Judges': 'Judges',
  'Ruth': 'Ruth',
  '1 Samuel': '1 Samuel',
  '2 Samuel': '2 Samuel',
  '1 Kings': '1 Kings',
  '2 Kings': '2 Kings',
  '1 Chronicles': '1 Chronicles',
  '2 Chronicles': '2 Chronicles',
  'Ezra': 'Ezra',
  'Nehemiah': 'Nehemiah',
  'Esther': 'Esther',
  'Job': 'Job',
  'Psalms': 'Psalms',
  'Proverbs': 'Proverbs',
  'Ecclesiastes': 'Ecclesiastes',
  'Song of Solomon': 'Song of Solomon',
  'Isaiah': 'Isaiah',
  'Jeremiah': 'Jeremiah',
  'Lamentations': 'Lamentations',
  'Ezekiel': 'Ezekiel',
  'Daniel': 'Daniel',
  'Hosea': 'Hosea',
  'Joel': 'Joel',
  'Amos': 'Amos',
  'Obadiah': 'Obadiah',
  'Jonah': 'Jonah',
  'Micah': 'Micah',
  'Nahum': 'Nahum',
  'Habakkuk': 'Habakkuk',
  'Zephaniah': 'Zephaniah',
  'Haggai': 'Haggai',
  'Zechariah': 'Zechariah',
  'Malachi': 'Malachi',
  'Matthew': 'Matthew',
  'Mark': 'Mark',
  'Luke': 'Luke',
  'John': 'John',
  'Acts': 'Acts',
  'Romans': 'Romans',
  '1 Corinthians': '1 Corinthians',
  '2 Corinthians': '2 Corinthians',
  'Galatians': 'Galatians',
  'Ephesians': 'Ephesians',
  'Philippians': 'Philippians',
  'Colossians': 'Colossians',
  '1 Thessalonians': '1 Thessalonians',
  '2 Thessalonians': '2 Thessalonians',
  '1 Timothy': '1 Timothy',
  '2 Timothy': '2 Timothy',
  'Titus': 'Titus',
  'Philemon': 'Philemon',
  'Hebrews': 'Hebrews',
  'James': 'James',
  '1 Peter': '1 Peter',
  '2 Peter': '2 Peter',
  '1 John': '1 John',
  '2 John': '2 John',
  '3 John': '3 John',
  'Jude': 'Jude',
  'Revelation': 'Revelation'
}

export const theBible: LangRef[] = [
  { name: 'The Holy Bible', language: 'English', code: 'en', books: en },
  { name: 'La Santa Biblia', language: 'Spanish', code: 'es', books: es },
  { name: 'La Bible Sainte', language: 'French', code: 'fr', books: fr },
  // { name: 'Die Heilige Schrift', language: 'German', code: 'de' },
  // { name: '聖經', language: 'Chinese', code: 'zh' },
  // { name: '聖書', language: 'Japanese', code: 'ja' },
  // { name: 'Sacro Bibbia', language: 'Italian', code: 'it' },
  // { name: 'A Bíblia Sagrada', language: 'Portuguese', code: 'pt' },
  // { name: 'Библия', language: 'Russian', code: 'ru', books: ru },
  // { name: 'الكتاب المقدس', language: 'Arabic', code: 'ar' },
  // { name: 'होली बाइबल', language: 'Hindi', code: 'hi' },
  // { name: '성경', language: 'Korean', code: 'ko' },
  // { name: 'Suci Alkitab', language: 'Indonesian', code: 'id' },
  // { name: 'Biblia Sacra', language: 'Latin', code: 'la' },
  { name: 'La Sagrada Biblia', language: 'Esperanto', code: 'eo', books: eo }
]