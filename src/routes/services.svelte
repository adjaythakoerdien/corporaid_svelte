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
	// setupI18n({ withLocale: 'nl' });
	let localLang = '';

	try {
		localLang = localStorage.getItem('localLang');
	} catch {
		console.log('local lang not found');
	}

	if (localLang == 'nl' || localLang == 'en' || localLang == 'it') {
		setupI18n({ withLocale: localLang });
	} else {
		setupI18n({ withLocale: 'nl' });
	}
</script>

<svelte:head>
	<title>CorporAid - Onze diensten</title>
	<meta
		NAME="description"
		CONTENT="Fresh Finance Perspective: Op zoek naar interim controller of CFO professionals? Wij brengen je finance naar the next level!"
	/>
	<meta
		NAME="keywords"
		CONTENT="Finance, Interim, CFO, Controller, Project management,
		 Financiële hulp, Financiële scan, start up ondersteuning, duurzaam ondernemen,
		 biophylic design, work life balance, productiviteit verhogen, verzuim verlagen, risico analyse,
		 rapportage, consultant, consultancy, opleidings traject, nature by design"
	/>
	<meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" />
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<meta property="og:image" content="https://corporaid.vercel.app/social/corporaid_fb_og.webp" />
	<meta property="og:title" content="CorporAid: finance, control & project management" />
	<meta property="og:url" content="https://corporaid.vercel.app" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Op zoek naar interim controller of CFO professionals? Wij brengen je finance naar the next level"
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<Header servicesActive="active" />

<Hero />

<Intro />

<section id="social">
	<Sociaal />
</section>

<section id="finance">
	<Finance />
</section>

<section id="management">
	<Management />
</section>

<section id="interim">
	<Interim />
</section>

<Vraag />

<Footer />

<style>
	@import 'services.css';
</style>
