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

	let res;
	let resStatus: number = 0;

	const submitForm = async (data) => {
		const formData = new FormData(data.currentTarget);
		console.log(formData.get('firstName'));

		res = await fetch('api/contact.json', {
			method: 'POST',
			body: formData
		});
		resStatus = res.status;
		console.log(res.status);
	};
</script>

<svelte:head>
	<title>CorporAid - Contact</title>
	<meta
		NAME="description"
		CONTENT="Fresh Finance Perspective: Op zoek naar interim controller of CFO professionals? Wij brengen je finance naar the next level!"
	/>
	<meta
		NAME="keywords"
		CONTENT="Finance, Interim, CFO, Controller, Project management,
		 Financiële hulp, Financiële scan, start up ondersteuning, duurzaam ondernemen,
		 biophylic design, work life balance, productiviteit verhogen, verzuim verlagen, risico analyse,
		 rapportage, consultant, consultancy, opleidings traject, nature by design"
	/>
	<meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" />
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<meta property="og:image" content="https://corporaid.vercel.app/social/corporaid_fb_og.webp" />
	<meta property="og:title" content="CorporAid: finance, control & project management" />
	<meta property="og:url" content="https://corporaid.vercel.app" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Op zoek naar interim controller of CFO professionals? Wij brengen je finance naar the next level"
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
</svelte:head>

<Header contactActive="active" />

<section class="form-section">
	<article class="form-container">
		<div class="row container">
			{#if resStatus == 0}
				<div class="col s2 hide-on-med-and-down" />
				<form
					class="card col s12 m12 l8 contact-form"
					on:submit|preventDefault={submitForm}
					style="border-radius: 4px;"
				>
					<h4 class="center">{$_('contact.title')}</h4>
					<p class="center form-subtitle">{$_('contact.text')}</p>

					<div class="row">
						<div class="input-field col s6">
							<input
								id="first_name"
								bind:value={firstName}
								name="firstName"
								type="text"
								class="validate"
								required
							/>
							<label for="first_name">{$_('contact.form.firstName')}</label>
						</div>
						<div class="input-field col s6">
							<input id="last_name" name="lastName" type="text" class="validate" />
							<label for="last_name">{$_('contact.form.lastName')}</label>
						</div>
					</div>

					<div class="row">
						<div class="input-field col s12">
							<input id="email" name="email" type="email" class="validate" />
							<label for="email">{$_('contact.form.email')}</label>
						</div>
					</div>

					<div class="row">
						<div class="input-field col s12">
							<input id="onderwerp" name="onderwerp" type="text" class="validate" />
							<label for="onderwerp">{$_('contact.form.subject')}</label>
						</div>
					</div>

					<div class="row">
						<div class="input-field col s12">
							<textarea id="textarea1" name="text" class="materialize-textarea" />
							<label for="textarea1">{$_('contact.form.question')}</label>
						</div>
					</div>

					<div class="row">
						<div class="input-field col s12">
							<button
								class="form-button waves-effect waves-light btn hoverable deep-orange accent-2 col s12 hoverable"
								style="border-radius:34px;"
								type="submit"
							>
								{$_('contact.form.button')}
							</button>
						</div>
					</div>
				</form>
			{/if}
			{#if resStatus == 200}
				<div class="row">
					<div class="col s2" />

					<div
						class="card col s12 l8 white-text center"
						style="padding:100px 0;background-color:#323E66"
					>
						<h5>Bedankt voor je aanvraag, {firstName}!</h5>
						<p>We zullen zo spoedig mogelijk contact met je opnemen.</p>
					</div>
				</div>
			{/if}
			{#if resStatus == 404}
				<div class="row">
					<div class="col s2" />

					<div class="card col s12 l8 red lighten-4 center" style="padding:100px 0;">
						<h5>Er is iets mis gegaan met het contact formulier</h5>
						<p>Neem contact op met contact@corporaid.nl.</p>
					</div>
				</div>
			{/if}
		</div>
	</article>
</section>

<Footer />

<style>
	@import 'contact.css';
</style>
