<script>
	import { _ } from 'svelte-i18n';
</script>

<section class="services-section hero">
	<article class="container">
		<h1 class="onze-diensten-hero title">{$_('services.hero.title')}</h1>
		<p class="onze-diensten-hero subtitle">
			{$_('services.hero.subtitle')}
		</p>
		<a
			href="/contact"
			class="services-hero-button waves-effect waves-light btn deep-orange accent-2 hoverable"
			style="border-radius:34px;">{$_('services.hero.button')}</a
		>
	</article>
</section>

<style>
	@import 'services-hero.css';
</style>
