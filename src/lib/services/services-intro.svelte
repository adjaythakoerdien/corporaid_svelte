<script>
	import { _ } from 'svelte-i18n';
</script>

<section class="">
	<article class="container center">
		<h1 class="intro-title services-section intro">
			{$_('services.intro.title')}<span class="h1-span">{$_('services.intro.titleHighlight')}</span>
		</h1>
		<p class="services-intro-text">
			{$_('services.intro.text')}
		</p>
	</article>
</section>

<style>
	@import 'services-intro.css';
</style>
