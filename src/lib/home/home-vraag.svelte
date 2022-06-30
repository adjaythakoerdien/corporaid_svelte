<script>
	import { _ } from 'svelte-i18n';
</script>

<section>
	<article class="home-container container center">
		<h2 class="home-vraag-title">{$_('home.question.title')}</h2>
		<p>
			{$_('home.question.text')}
		</p>
		<div class="row home-vraag-icons">
			<a href="tel:+31612345678">
				<div class="col s12 m6 home-vraag-telephone hoverable">
					<i class="material-icons contact-icon" style="font-size:50px;">phone</i>
					<p class="contact-text">06-1486 5297</p>
				</div>
			</a>
			<a href="mailto:info@corporaid.fake">
				<div class="col s12 m6 home-vraag-email hoverable">
					<i class="material-icons contact-icon" style="font-size:50px;">mail</i>
					<p class="contact-text">info@corporaid.nl</p>
				</div>
			</a>
			<!--			<a href="mailto:info@corporaid.nl">-->
			<!--				<div class="col s12 m4 hoverable contact-card">-->
			<!--					<i class="material-icons contact-icon" style="font-size:50px;">contact_page</i>-->
			<!--					<p class="contact-text">{$_('home.question.page')}</p>-->
			<!--				</div>-->
			<!--			</a>-->
			<div class="col m2" />
		</div>
	</article>
</section>

<style>
	@import 'home-vraag.css';
</style>
