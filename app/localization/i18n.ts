import {languagesDefault, languagesSupported} from './resource';

export default {
  supportedLngs: languagesSupported,
  fallbackLng: languagesDefault,
  defaultNS: 'common',
} as const;
