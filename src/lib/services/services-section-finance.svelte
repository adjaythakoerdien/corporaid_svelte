<script>
	import FinanceImage from '$lib/assets/finance.webp';
	import { _ } from 'svelte-i18n';
</script>

<section class="services-section">
	<article class="container services-container">
		<div class="row">
			<div class="col s12 l6 services-column">
				<div class="services-finance-image" />
			</div>

			<div class="col l1" />

			<div class="col s12 l5 services-column">
				<i class="material-icons" style="font-size:50px;color: #566BB3">groups</i>
				<h5>{$_('services.financeSection.title')}</h5>
				<p class="services-column-text">
					{$_('services.financeSection.text')}
				</p>
				<a
					href="/contact"
					class="waves-effect waves-effect waves-light btn hoverable deep-orange accent-2"
					style="border-radius:34px;margin-top:30px;">{$_('services.financeSection.button')}</a
				>
			</div>
		</div>
	</article>
</section>

<style>
	@import 'services-section-finance.css';
</style>
