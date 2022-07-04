<script>
	import { _ } from 'svelte-i18n';
</script>

<section class="section-onze-diensten">
	<div class="container" role="presentation">
		<article class="row white-text" style="min-height:100%;">
			<div class="col s12 l6" role="presentation">
				<h5 class="home-onze-diensten-title">
					{$_('home.onzeDiensten.title')}
				</h5>
				<p class="home-onze-diensten-text">
					{$_('home.onzeDiensten.text1')}
				</p>
				<p class="home-onze-diensten-text beneden">
					{$_('home.onzeDiensten.text2')}
				</p>
				<a
					href="services"
					class="column-button waves-effect waves-light btn hoverable deep-orange accent-2"
					style="border-radius:34px;"
				>
					{$_('home.onzeDiensten.button')}
				</a>
			</div>
			<div class="col s12 l6" role="presentation">
				<div class="home-onze-diensten-image" role="img" aria-label="onze financiele diensten" />
			</div>
		</article>
	</div>
</section>

<style>
	@import 'home-onze-diensten.css';
</style>
