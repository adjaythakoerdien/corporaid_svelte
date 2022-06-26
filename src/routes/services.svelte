<script>
	import Header from '$lib/layout/header.svelte';
	import Hero from '$lib/services/services-hero.svelte';
	import Intro from '$lib/services/services-intro.svelte';
	import Sociaal from '$lib/services/services-section-sociaal.svelte';
	import Finance from '$lib/services/services-section-finance.svelte';
	import Interim from '$lib/services/services-section-interim.svelte';
	import Management from '$lib/services/services-section-management.svelte';

	import Vraag from '$lib/home/home-vraag.svelte';
	import Footer from '$lib/layout/footer.svelte';
	import { _ } from 'svelte-i18n';
	import { setupI18n } from '../services/i18n';
	setupI18n({ withLocale: 'nl' });
</script>

<Header servicesActive="active" />

<Hero />

<Intro />

<Sociaal />

<Finance />

<Management />

<Interim />

<Vraag />

<Footer />

<style>
	@import 'services.css';
</style>
