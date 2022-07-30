<script lang="ts">
	import { setupI18n } from '../services/i18n';
	let localLang = '';

	setupI18n({ withLocale: 'it' });
	localStorage.setItem('localLang', 'it');
	const hostname = location.origin;
	console.log(hostname);
	location.href = hostname;

	console.log('it');
</script>
