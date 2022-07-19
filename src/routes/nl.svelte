<script lang="ts">
	import { setupI18n } from '../services/i18n';
	let localLang = '';

	setupI18n({ withLocale: 'nl' });
	localStorage.setItem('localLang', 'nl');
	const hostname = location.origin;
	console.log(hostname);
	location.href = hostname;

	console.log('nl');
</script>
