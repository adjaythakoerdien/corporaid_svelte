<script>
	import { _ } from 'svelte-i18n';
</script>

<section>
	<article class="container carousel-container center">
		<h2 class="carousel-title">{$_('logosSectie.title')}</h2>
		<div class="logos-container">
			<img class="carousel-logo" src="/logos/crop.webp" alt="" />
			<img class="carousel-logo" src="/logos/nyerode.webp" alt="" />
			<img class="carousel-logo" src="/logos/museum-kaart.webp" alt="" />
			<img class="carousel-logo" src="/logos/museum-vereniging.webp" alt="" />
			<img class="carousel-logo" src="/logos/i-love-sushi.webp" alt="" />
		</div>
		<p class="carousel-subtitle">
			{$_('logosSectie.title')}
		</p>
	</article>
</section>

<style>
	@import 'home-carousel.css';
</style>
