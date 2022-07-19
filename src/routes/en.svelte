<script lang="ts">
	import { setupI18n } from '../services/i18n';
	let localLang = '';

	setupI18n({ withLocale: 'en' });
	localStorage.setItem('localLang', 'en');
	const hostname = location.origin;
	location.href = hostname;
</script>
