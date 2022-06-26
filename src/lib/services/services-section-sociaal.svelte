<script>
	import SociaalImage from '$lib/assets/sociaal.webp';
	import { _ } from 'svelte-i18n';
</script>

<section class="services-section">
	<article class="container services-container">
		<div class="row" role="presentation">
			<div class="col s12 l5 services-column" role="presentation">
				<i class="material-icons" style="font-size:50px;color: #566BB3">groups</i>
				<h5>{$_('services.socialSection.title')}</h5>
				<p>{$_('services.socialSection.subtitle')}</p>
				<p class="services-column-text">
					{$_('services.socialSection.text')}
				</p>
				<a
					href="/contact"
					class="waves-effect waves-effect waves-light btn hoverable deep-orange accent-2"
					style="border-radius:34px;margin-top:30px;">{$_('services.socialSection.button')}</a
				>
			</div>

			<div class="col l1" role="presentation" />

			<div class="col s12 l6 center services-column" role="image">
				<img class="responsive-img" src={SociaalImage} alt="" />
			</div>
		</div>
	</article>
</section>

<style>
	/*@import 'services-section-sociaal.css';*/
</style>
