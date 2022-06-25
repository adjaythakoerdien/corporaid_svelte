import { dictionary, locale, _ } from 'svelte-i18n';

function setupI18n({ withLocale: _locale } = { withLocale: 'nl' }) {
	dictionary.set({
		nl: {
			hero: {
				title: 'FRESH FINANCE PERSPECTIVE',
				subtitle:
					'Op zoek naar interim controller of CFO professionals? ' + 'Wij brengen je finance naar',
				subtitleHighlight: 'the next level',
				button: 'Neem direct contact op',
				buttonSubtitle: 'Kennismaken is altijd GRATIS'
			}
		}
	});
	locale.set('nl');
}

export { _, setupI18n };
