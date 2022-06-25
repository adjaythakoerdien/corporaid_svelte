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
	// locale.set('nl');
</script>

<main style="height:722px;width:100%;background-color:#323E66;">
	<section class="hero-section">
		<div class="row">
			<div class="hero-image col m6 hide-on-small-only" />
			<div class="hero-container col s12 m4">
				<h1 class="hero-title hero-text white-text right">{$_('hero.title')}</h1>

				<h2 class="hero-subtitle hero-text right">
					{$_('hero.subtitle')}
					<span class="the-next-level"> {$_('hero.subtitleHighlight')} </span>
				</h2>
				<div class="right" style="width:400px;">
					<div class="">
						<a
							href="/contact"
							class="hero-button right hero-text waves-effect waves-light btn deep-orange accent-2 hoverable"
							style="border-radius:34px;">{$_('hero.button')}</a
						>
					</div>

					<div class="right white-text hero-button-subtext arrow">
						<img src={pijl} alt="" />
					</div>

					<div class="right white-text hero-button-subtext">{$_('hero.buttonSubtitle')}</div>
				</div>
			</div>
			<div
				class="hero-image beneden col s12 hide-on-med-and-up"
				style="background-color: #323E66"
			/>
		</div>
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
