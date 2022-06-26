<script lanbg="ts">
	import { _ } from 'svelte-i18n';
	import { setupI18n } from '../services/i18n';

	import Header from '$lib/layout/header.svelte';
	import pijl from '../icons/arrow_up.png';
	import Intro from '$lib/home/intro-section.svelte';
	import OnzeDiensten from '$lib/home/home-onze-diensten.svelte';
	import Carousel from '$lib/home/home-carousel.svelte';
	import Quote from '$lib/home/home-quote.svelte';
	import Vraag from '$lib/home/home-vraag.svelte';
	import Footer from '$lib/layout/footer.svelte';
	setupI18n({ withLocale: 'nl' });
</script>

<svelte:head>
	<title>CorporAid - Fresh Finance Perspective</title>
	<meta
		NAME="description"
		CONTENT="Fresh Finance Perspective: Op zoek naar interim controller of CFO professionals? Wij brengen je finance naar the next level!"
	/>
	<meta NAME="keywords" CONTENT="Finance, Interim, CFO, Controller, Project management" />
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

<Header homeActive="active" />

<main style="height:722px;width:100%;background-color:#323E66;">
	<section class="hero-section">
		<article class="row">
			<div class="hero-image col m6 hide-on-small-only" />
			<div class="hero-container col s12 m4" role="presentation">
				<h1 class="hero-title hero-text white-text right">{$_('home.hero.title')}</h1>

				<h2 class="hero-subtitle hero-text right">
					{$_('home.hero.subtitle')}
					<span class="the-next-level"> {$_('home.hero.subtitleHighlight')} </span>
				</h2>
				<div class="right" style="width:400px;" role="presentation">
					<div class="" role="presentation">
						<a
							href="/contact"
							class="hero-button right hero-text waves-effect waves-light btn deep-orange accent-2 hoverable"
							style="border-radius:34px;">{$_('home.hero.button')}</a
						>
					</div>

					<div class="right white-text hero-button-subtext arrow" role="presentation">
						<img src={pijl} alt="" />
					</div>

					<div class="right white-text hero-button-subtext" role="presentation">
						{$_('home.hero.buttonSubtitle')}
					</div>
				</div>
			</div>
			<div
				class="hero-image beneden col s12 hide-on-med-and-up"
				style="background-color: #323E66"
				role="presentation"
			/>
		</article>
	</section>
</main>

<Intro />

<OnzeDiensten />

<Carousel />

<Quote />

<Vraag />

<Footer />

<style>
	@import 'index.css';
</style>
