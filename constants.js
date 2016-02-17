import { NativeModules } from 'react-native';
const {
  BBBCardIO: {
    LIBRARY_VERSION,
    DETECTION_MODE,
    CAN_READ_CARD_WITH_CAMERA
  }
} = NativeModules;

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

export { LIBRARY_VERSION, DETECTION_MODE, CAN_READ_CARD_WITH_CAMERA };

export const DETECTION_MODES = Object.keys(DETECTION_MODE).reduce(( arr, key ) => arr.concat([ DETECTION_MODE[ key ] ]), []);
