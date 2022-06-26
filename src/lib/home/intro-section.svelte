<script>
	import { _ } from 'svelte-i18n';
</script>

<section>
	<article class="container center" style="margin-top: 120px;">
		<h1 class="intro-title">
			{$_('home.intro.title')}<span class="h1-span">{$_('home.intro.titleHighlight')}</span>?
		</h1>
		<p class="intro-subtitle" style="margin-bottom:30px;">
			{$_('home.intro.text')}
		</p>
		<p class="intro-subtitle">
			{$_('home.intro.text2')}
		</p>
	</article>
</section>

<section>
	<article class="columns container center">
		<div class="row" role="presentation">
			<div class="column-container col s12 l6" role="presentation">
				<div class="column-logo" role="presentation">
					<i
						class="column-icon material-icons"
						style="font-size:50px;margin-bottom:20px;font-weight:200">euro</i
					>
				</div>
				<div class="column-title">{$_('home.intro.column1.title')}</div>
				<div class="column-text">
					{$_('home.intro.column1.text')}
				</div>
				<div class="column-button hide-on-large-only" role="presentation">
					<a
						href="/services"
						class="column-button waves-effect waves-light btn hoverable deep-orange accent-2"
						style="border-radius:34px;"
					>
						{$_('home.intro.column1.button')}
					</a>
				</div>
			</div>

			<div class="column-container col s12 l6" role="presentation">
				<div class="column-logo" role="presentation">
					<i
						class="column-icon material-icons"
						style="font-size:50px;margin-bottom:20px;font-weight:200">people</i
					>
				</div>
				<div class="column-title" role="presentation">{$_('home.intro.column2.title')}</div>
				<div class="column-text" role="presentation">
					{$_('home.intro.column2.text')}
				</div>
				<div class="column-button hide-on-large-only" role="presentation">
					<a
						href="/services"
						class="column-button waves-effect waves-light btn hoverable deep-orange accent-2"
						style="border-radius:34px;"
					>
						{$_('home.intro.column2.button')}
					</a>
				</div>
			</div>
		</div>

		<!--			BUTTONS-->
		<div class="row button-row">
			<div class="col s6">
				<div class="column-button-bottom hide-on-med-and-down" role="presentation">
					<a
						href="/services"
						class="column-button waves-effect waves-light btn hoverable deep-orange accent-2"
						style="border-radius:34px;"
					>
						{$_('home.intro.column1.button')}
					</a>
				</div>
			</div>
			<div class="col s6" role="presentation">
				<div class="column-button-bottom hide-on-med-and-down" role="presentation">
					<a
						href="/services"
						class="column-button waves-effect waves-light btn hoverable deep-orange accent-2"
						style="border-radius:34px;"
					>
						{$_('home.intro.column1.button')}
					</a>
				</div>
			</div>
		</div>
		<!--			END BUTTONS-->
		<div class="row" role="presentation">
			<div class="column-container col s12 l6" role="presentation">
				<div class="column-logo" role="presentation">
					<i
						class="column-icon material-icons"
						style="font-size:50px;margin-bottom:20px;font-weight:200">event</i
					>
				</div>
				<div class="column-title" role="presentation">{$_('home.intro.column3.title')}</div>
				<div class="column-text" role="presentation">
					{$_('home.intro.column3.text')}
				</div>
				<div class="column-button hide-on-large-only" role="presentation">
					<a
						href="/services"
						class="column-button waves-effect waves-light btn hoverable deep-orange accent-2"
						style="border-radius:34px;"
					>
						{$_('home.intro.column3.button')}
					</a>
				</div>
			</div>

			<div class="column-container col s12 l6" role="presentation">
				<div class="column-logo" role="presentation">
					<i
						class="column-icon material-icons"
						style="font-size:50px;margin-bottom:20px;font-weight:200">event</i
					>
				</div>
				<div class="column-title" role="presentation">{$_('home.intro.column4.title')}</div>
				<div class="column-text" role="presentation">
					{$_('home.intro.column4.text')}
				</div>
				<div class="column-button hide-on-large-only" role="presentation">
					<a
						href="/services"
						class="column-button waves-effect waves-light btn hoverable deep-orange accent-2"
						style="border-radius:34px;"
					>
						{$_('home.intro.column4.button')}
					</a>
				</div>
			</div>
		</div>

		<div class="row button-row" role="presentation">
			<div class="col s6" role="presentation">
				<div class="column-button-bottom hide-on-med-and-down" role="presentation">
					<a
						href="/services"
						class="column-button waves-effect waves-light btn hoverable deep-orange accent-2"
						style="border-radius:34px;"
					>
						{$_('home.intro.column1.button')}
					</a>
				</div>
			</div>
			<div class="col s6" role="presentation">
				<div class="column-button-bottom hide-on-med-and-down" role="presentation">
					<a
						href="/services"
						class="column-button waves-effect waves-light btn hoverable deep-orange accent-2"
						style="border-radius:34px;"
					>
						{$_('home.intro.column1.button')}
					</a>
				</div>
			</div>
		</div>
	</article>
</section>

<style>
	@import 'intro-section.css';
</style>
