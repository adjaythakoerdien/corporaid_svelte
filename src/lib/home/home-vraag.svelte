<script>
	import { _ } from 'svelte-i18n';
</script>

<section>
	<article class="home-container container center">
		<h2 class="home-vraag-title">{$_('question.title')}</h2>
		<p>
			{$_('question.text')}
		</p>
		<div class="row home-vraag-icons">
			<a href="tel:+31612345678">
				<div class="col s12 m4 home-vraag-telephone hoverable">
					<i class="material-icons" style="font-size:50px;">phone</i>
					<p>06-1234 5678</p>
				</div>
			</a>
			<a href="mailto:info@corporaid.fake">
				<div class="col s12 m4 home-vraag-email hoverable">
					<i class="material-icons" style="font-size:50px;">mail</i>
					<p>info@corporaid.nl</p>
				</div>
			</a>
			<a href="/contact">
				<div class="col s12 m4 hoverable">
					<i class="material-icons" style="font-size:50px;">contact_page</i>
					<p>{$_('question.page')}</p>
				</div>
			</a>
			<div class="col m2" />
		</div>
	</article>
</section>

<style>
	@import 'home-vraag.css';
</style>
