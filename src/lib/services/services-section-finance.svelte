<script>
	import { _ } from 'svelte-i18n';
</script>

<section class="services-section">
	<article class="container services-container finance">
		<div class="row" role="presentation">
			<div class="col s12 l6 services-column finance-photo" role="presentation">
				<div class="services-finance-image" role="image" />
			</div>

			<div class="col l1" role="presentation" />

			<div class="col s12 l5 services-column" role="presentation">
				<i class="material-icons" style="font-size:50px;color: #566BB3">euro</i>
				<h5>{$_('services.financeSection.title')}</h5>
				<div class="services-column-text" style="display:flex">
					<div class="letter">A</div>
					<div>
						{$_('services.financeSection.textA')}
					</div>
				</div>
				<div class="services-column-text" style="display:flex">
					<div class="letter">B</div>
					<div>
						{$_('services.financeSection.textB')}
					</div>
				</div>
				<div class="services-column-text" style="display:flex">
					<div class="letter">1</div>
					<div>
						{$_('services.financeSection.textB1')}
					</div>
				</div>
				<div class="services-column-text" style="display:flex">
					<div class="letter">2</div>
					<div>
						{$_('services.financeSection.textB2')}
					</div>
				</div>
				<div class="services-column-text" style="display:flex">
					<div class="letter">C</div>
					<div>
						{$_('services.financeSection.textC')}
					</div>
				</div>
				<div class="services-column-text" style="display:flex">
					<div class="letter">D</div>
					<div>
						{$_('services.financeSection.textD')}
					</div>
				</div>
				<div class="services-column-text" style="display:flex">
					<div class="letter">1</div>
					<div>
						{$_('services.financeSection.textD1')}
					</div>
				</div>
				<div class="services-column-text" style="display:flex">
					<div class="letter">2</div>
					<div>
						{$_('services.financeSection.textD2')}
					</div>
				</div>
				<div class="services-column-text" style="display:flex">
					<div class="letter">3</div>
					<div>
						{$_('services.financeSection.textD3')}
					</div>
				</div>
				<!--	{$_('services.financeSection.textB')}-->
				<!--	{$_('services.financeSection.textB1')}-->
				<!--	{$_('services.financeSection.textB2')}-->
				<!--	{$_('services.financeSection.textC')}-->
				<!--	{$_('services.financeSection.textD')}-->
				<!--	{$_('services.financeSection.textD1')}-->
				<!--	{$_('services.financeSection.textD2')}-->
				<!--	{$_('services.financeSection.textD3')}-->
				<!--</div>-->

				<!--				<ul class="services-column-text">-->
				<!--					<li>{$_('services.financeSection.textA')}</li>-->
				<!--					<li>{$_('services.financeSection.textB')}</li>-->
				<!--					<li>{$_('services.financeSection.textB1')}</li>-->
				<!--					<li>{$_('services.financeSection.textB2')}</li>-->
				<!--					<li>{$_('services.financeSection.textC')}</li>-->
				<!--					<li>{$_('services.financeSection.textD')}</li>-->
				<!--					<li>{$_('services.financeSection.textD1')}</li>-->
				<!--					<li>{$_('services.financeSection.textD2')}</li>-->
				<!--					<li>{$_('services.financeSection.textD3')}</li>-->
				<!--				</ul>-->
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
