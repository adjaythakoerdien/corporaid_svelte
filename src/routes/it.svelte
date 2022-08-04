<script>
	import { setupI18n } from '../services/i18n';

	if (typeof window !== 'undefined') {
		console.log('You are on the browser');
		// 👉️ can use localStorage here
	} else {
		console.log('You are on the server');
		// 👉️ can't use localStorage
	}

	let localLang = '';
	localStorage.setItem('localLang', '');

	setupI18n({ withLocale: 'it' });
	localStorage.setItem('localLang', 'it');
	const hostname = location.origin;
	console.log(hostname);
	location.href = hostname;

	console.log('it');
</script>
