<script>
	import { _ } from 'svelte-i18n';
</script>

<section class="services-section">
	<article class="container services-container finance">
		<div class="row" role="presentation">
			<div class="col s12 l6 services-column finance-photo hide-on-large-only" role="presentation">
				<div class="services-sociaal-image" role="image" />
			</div>

			<div class="col s12 l5 services-column" role="presentation">
				<i class="material-icons" style="font-size:50px;color: #566BB3">groups</i>
				<h5>{$_('services.socialSection.title')}</h5>
				<p class="services-column-text">
					{$_('services.socialSection.subtitle')}<br /><br />
					{$_('services.socialSection.text')}
				</p>
				<ul>
					<li>- {$_('services.socialSection.list1')}</li>
					<li>- {$_('services.socialSection.list2')}</li>
					<li>- {$_('services.socialSection.list3')}</li>
					<li>- {$_('services.socialSection.list4')}</li>
				</ul>
				<a
					href="/contact"
					class="waves-effect waves-effect waves-light btn hoverable deep-orange accent-2"
					style="border-radius:34px;margin-top:30px;">{$_('services.socialSection.button')}</a
				>
			</div>

			<div class="col l1" role="presentation" />

			<div
				class="col s12 l6 services-column finance-photo hide-on-med-and-down"
				role="presentation"
			>
				<div class="services-sociaal-image" role="image" />
			</div>
		</div>
	</article>
</section>

<style>
	@import 'services-section-sociaal.css';
</style>
