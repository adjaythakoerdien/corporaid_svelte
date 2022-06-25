import { dictionary, locale, _ } from 'svelte-i18n';
import Nl from './lang/nl.json';

function setupI18n({ withLocale: _locale } = { withLocale: 'nl' }) {
	locale.set('nl');
	switch (_locale) {
		case 'nl':
			dictionary.set({ ...Nl });
			break;
		default:
			dictionary.set({ ...Nl });
	}
}

export { _, setupI18n };
