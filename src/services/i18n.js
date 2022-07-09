import { dictionary, locale, _ } from 'svelte-i18n';
import Nl from './lang/nl.json';
import En from './lang/en.json';

function setupI18n({ withLocale: _locale } = { withLocale: '' }) {
	locale.set('nl');
	switch (_locale) {
		case 'nl':
			dictionary.set({ ...Nl });
			break;
		case 'en':
			dictionary.set({ ...En });
			break;
		default:
			dictionary.set({ ...Nl });
	}
}

export { _, setupI18n };
