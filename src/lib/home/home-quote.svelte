<script>
	import { _ } from 'svelte-i18n';
</script>

<section class="quote-section white-text">
	<article class="container quote-container center">
		<div>
			<i class="material-icons white-text" style="font-size:20px;">star</i>
			<i class="material-icons white-text" style="font-size:20px;">star</i>
			<i class="material-icons white-text" style="font-size:20px;">star</i>
			<i class="material-icons white-text" style="font-size:20px;">star</i>
			<i class="material-icons white-text" style="font-size:20px;">star</i>
		</div>
		<p class="quote-text">
			{$_('home.quote.text')}
		</p>
		<div class="quote-person-container">
			<div class="quote-photo">
				<img src="/logos/avatar.webp" alt="" />
			</div>
			<div class="quote-person">
				{$_('home.quote.name')}
				<br />
				{$_('home.quote.company')}
			</div>
		</div>
	</article>
</section>

<style>
	@import 'home-quote.css';
</style>
