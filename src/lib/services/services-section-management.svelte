<script>
	import FinanceImage from '$lib/assets/finance.webp';
	import { _ } from 'svelte-i18n';
</script>

<section class="services-section section-management">
	<article class="container services-container banner">
		<div class="row">
			<div class="col s12 l5 services-column white-text">
				<i class="material-icons" style="font-size:50px;color: white">event</i>
				<h5>{$_('services.projectSection.title')}</h5>
				<p class="services-column-text banner">
					{$_('services.projectSection.text')}
				</p>
				<a
					href="/contact"
					class="waves-effect waves-effect waves-light btn hoverable deep-orange accent-2"
					style="border-radius:34px;margin-top:30px;">{$_('services.projectSection.button')}</a
				>
			</div>

			<div class="col l1" />

			<div class="col s12 l6 services-column">
				<div class="services-management-image" />
			</div>
		</div>
	</article>
</section>

<style>
	@import 'services-section-management.css';
</style>
