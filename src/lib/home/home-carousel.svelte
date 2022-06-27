<script>
	import { _ } from 'svelte-i18n';
</script>

<section>
	<article class="container carousel-container center">
		<h2 class="carousel-title">{$_('home.logosSectie.title')}</h2>
		<div class="logos-container" role="presentation">
			<img class="carousel-logo" src="/logos/nyerode.webp" alt="Nyenrode logo" />
			<img class="carousel-logo" src="/logos/dgb.webp" alt="DGB Group logo" />
			<img class="carousel-logo" src="/logos/kroonenberg.webp" alt="Kroonenberg Groep logo" />
			<img
				class="carousel-logo"
				src="/logos/rappange.webp"
				alt="Rappange & Partners Architecten logo"
			/>
			<img class="carousel-logo" src="/logos/crop.webp" alt="CROP logo" />
			<img class="carousel-logo" src="/logos/museum-kaart.webp" alt="Museum Kaart logo" />
			<img class="carousel-logo" src="/logos/museum-vereniging.webp" alt="Museum Vereniging logo" />
			<img class="carousel-logo" src="/logos/i-love-sushi.webp" alt="I Love Sushi logo" />
		</div>
		<p class="carousel-subtitle">
			{$_('home.logosSectie.subtitle')}
		</p>
	</article>
</section>

<style>
	@import 'home-carousel.css';
</style>
