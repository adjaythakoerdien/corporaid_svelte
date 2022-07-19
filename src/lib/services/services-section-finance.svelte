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
				<p>
					{$_('services.financeSection.text1')}
				</p>
				<p>
					{$_('services.financeSection.text2')}
				</p>
				<p>
					{$_('services.financeSection.text3')}
				</p>
				<div class="services-column-text" style="display:flex">
					<div class="letter">-</div>
					<div>
						{$_('services.financeSection.list1')}
					</div>
				</div>
				<div class="services-column-text" style="display:flex">
					<div class="letter">-</div>
					<div>
						{$_('services.financeSection.list2')}
					</div>
				</div>
				<div class="services-column-text" style="display:flex">
					<div class="letter">-</div>
					<div>
						{$_('services.financeSection.list3')}
					</div>
				</div>
				<div class="services-column-text" style="display:flex">
					<div class="letter">-</div>
					<div>
						{$_('services.financeSection.list4')}
					</div>
				</div>
				<p>
					{$_('services.financeSection.text4')}
				</p>

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
