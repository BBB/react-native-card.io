import { NativeModules } from 'react-native';
const { BBBCardIO: { DETECTION_MODE } } = NativeModules;

export const SUPPORTED_LANGUAGES = [
  'ar',
  'da',
  'de',
  'en',
  'en_AU',
  'en_GB',
  'es',
  'es_MX',
  'fr',
  'he',
  'is',
  'it',
  'ja',
  'ko',
  'ms',
  'nb',
  'nl',
  'pl',
  'pt',
  'pt_BR',
  'ru',
  'sv',
  'th',
  'tr',
  'zh-Hans',
  'zh-Hant',
  'zh-Hant_TW',
];

export { DETECTION_MODE };

export const DETECTION_MODES = [ for ( key of Object.keys(DETECTION_MODE) ) DETECTION_MODE[ key ] ];
