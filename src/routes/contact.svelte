<script lang="ts">
	import { _ } from '../services/i18n';
	import { setupI18n } from '../services/i18n';
	setupI18n({ withLocale: 'nl' });

	import Header from '$lib/layout/header.svelte';
	import Footer from '$lib/layout/footer.svelte';

	let firstName: string = '';
	let lastName: string = '';
	let email: string = '';
	let onderwerp: string = '';
	let text: string = '';

	function submitForm() {
		fetch('/api/sendmail');
	}

	function submitFormTest(e) {
		firstName = e.target[0].value;
		lastName = e.target[1].value;
		email = e.target[2].value;
		onderwerp = e.target[3].value;
		text = e.target[4].value;
		alert(
			'Hier komt een mooie popup met een tekst dat de email succesvol is verstuurd naar:\n\n' +
				firstName +
				' ' +
				lastName +
				'\n' +
				email +
				'\n**********\n' +
				onderwerp +
				'\n\n' +
				text
		);
	}
</script>

<Header contactActive="active" />

<section class="form-section">
	<article class="form-container">
		<div class="row container">
			<form
				class="card col s12 m12 l12 contact-form"
				on:submit|preventDefault={submitFormTest}
				style="border-radius: 4px;"
			>
				<h4 class="center">{$_('contact.title')}</h4>
				<p class="center form-subtitle">{$_('contact.text')}</p>

				<div class="row">
					<div class="input-field col s6">
						<input id="first_name" type="text" class="validate" required />
						<label for="first_name">{$_('contact.form.firstName')}</label>
					</div>
					<div class="input-field col s6">
						<input id="last_name" type="text" class="validate" required />
						<label for="last_name">{$_('contact.form.lastName')}</label>
					</div>
				</div>

				<div class="row">
					<div class="input-field col s12">
						<input id="email" type="email" class="validate" required />
						<label for="email">{$_('contact.form.email')}</label>
					</div>
				</div>

				<div class="row">
					<div class="input-field col s12">
						<input id="onderwerp" type="text" class="validate" required />
						<label for="onderwerp">{$_('contact.form.subject')}</label>
					</div>
				</div>

				<div class="row">
					<div class="input-field col s12">
						<textarea id="textarea1" class="materialize-textarea" required />
						<label for="textarea1">{$_('contact.form.question')}</label>
					</div>
				</div>

				<div class="row">
					<div class="input-field col s12">
						<button
							href="#modal1"
							class="form-button waves-effect waves-light btn hoverable deep-orange accent-2 col s12 hoverable"
							style="border-radius:34px;"
							type="submit"
						>
							{$_('contact.form.button')}
						</button>
					</div>
				</div>
			</form>
		</div>
	</article>
</section>

<Footer />

<style>
	@import 'contact.css';
</style>
