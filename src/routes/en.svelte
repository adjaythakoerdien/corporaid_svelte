<script lang="ts">
	import { setupI18n } from '../services/i18n';
	let localLang = '';

	setupI18n({ withLocale: 'en' });
	localStorage.setItem('localLang', 'en');
	const hostname = location.origin;
	console.log(hostname);
	location.href = hostname;

	console.log('en');
</script>
