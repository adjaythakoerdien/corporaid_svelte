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

<!--<Header contactActive="active" />-->

<div class="navbar-fixed">
	<nav class="blue-grey lighten-3" style="border-bottom: 3px solid #323E66;">
		<div class="nav-wrapper blue-grey lighten-3">
			<a href="/" class="brand-logo black-text">Corpor<span class="sidenav-logo">Aid</span></a>
			<a href="" data-target="slide-out" class="sidenav-trigger"
				><i class="material-icons" style="color:#323E66;">menu</i></a
			>

			<ul id="nav-mobile" class="right hide-on-med-and-down header-links">
				<li><a href="/" class="black-text">Home</a></li>
				<li><a href="/services" class="black-text">Onze diensten</a></li>
				<!--				<li><a href="#" class="black-text">Klant cases</a></li>-->
				<li class="active">
					<a
						href="/contact"
						class="waves-effect waves-light btn hoverable deep-orange accent-2"
						style="border-radius:34px;"
					>
						Contact
					</a>
				</li>
			</ul>
		</div>
	</nav>
</div>

<ul class="sidenav" id="slide-out">
	<li>
		<div class="user-view">
			<a href="/">
				<h3 class="white-text sidenav-title">
					Corpor<span class="sidenav-logo">Aid</span>
				</h3>
			</a>
		</div>
	</li>
	<li><a href="/" class="black-text sidenav-close">Home</a></li>
	<li>
		<a href="/services" class="black-text sidenav-close">Onze diensten</a>
	</li>
	<!--		<li><a href="/" class="black-text sidenav-close">Klant cases</a></li>-->
	<li>
		<a
			href="/contact"
			class="waves-effect waves-light btn hoverable deep-orange accent-2 sidenav-close"
			style="border-radius:34px;">Contact</a
		>
	</li>
</ul>

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
