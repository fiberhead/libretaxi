/**
 * @typedef LocaleMap
 * @desc Key/value map where:
 * - key - locale
 * - value - title
 * Note: Map _guarantees_ the keys order. But it shouldn't be initialized with object (where
 * order is not guaranteed). This data structure is similar to rails OrderedHash where we can
 * rely on order and have advantage of quick lookup by the key.
 * @extends {Map}
 * @see https://mzl.la/2jRpmTI
 */
const localeMap = new Map();
localeMap.set('en', 'English');
localeMap.set('es', 'Español');
localeMap.set('fa', 'فارسی');
localeMap.set('zh-cn', '官话');
localeMap.set('zh-tw', '繁體中文');
localeMap.set('fr', 'Français');
localeMap.set('de', 'Deutsch');
localeMap.set('it', '🇮🇹 Italiano');
localeMap.set('pt-br', '🇧🇷 Português');
localeMap.set('pl', '🇵🇱 Polski');
localeMap.set('cz', '🇨🇿 Česky');
localeMap.set('tr', '🇹🇷 Türkçe');
localeMap.set('id', '🇮🇩 Bahasa Indonesia');
localeMap.set('ru', '🇷🇺 Русский');
localeMap.set('hi', 'हिन्दी');
localeMap.set('ta', 'தமிழ்');
localeMap.set('vi', '🇻🇳 Tiếng Việt');

/**
 * @typedef SupportedLocales
 * @desc Array set that represents the list of currently supported locales:
 * - `en` - English locale
 * - `ru` - Russian locale
 * etc..
 * @extends {Array}
 * @author Roman Pushkin (roman.pushkin@gmail.com)
 * @date 2016-06-17
 * @version 1.1
 * @since 0.1.0
 * @example
 * import SupportedLocales from './supported-locales';
 * if (!SupportedLocales.includes('cn')) {
 *   console.log('locale "cn" is not supported yet');
 * }
 */
export default Array.from(localeMap.keys());
export { localeMap };
