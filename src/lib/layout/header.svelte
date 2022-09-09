<script>
	export let homeActive = '';
	export let servicesActive = '';
	export let contactActive = '';
	import { _ } from '../../services/i18n';
	import { setupI18n } from '../../services/i18n';

	let localLang = '';
	let NlActive = '';
	let EnActive = '';
	let ItActive = '';

	function setLangNl() {
		setupI18n({ withLocale: 'nl' });
		localStorage.setItem('localLang', 'nl');
		location.reload();
	}

	function setLangEn() {
		setupI18n({ withLocale: 'en' });
		localStorage.setItem('localLang', 'en');
		location.reload();
	}

	function setLangIt() {
		setupI18n({ withLocale: 'it' });
		localStorage.setItem('localLang', 'it');
		location.reload();
	}

	try {
		localLang = localStorage.getItem('localLang');
	} catch {
		console.log('local lang not found');
	}

	if (localLang == 'nl') {
		NlActive = 'active';
	}
	if (localLang == 'en') {
		EnActive = 'active';
	}
	if (localLang == 'it') {
		ItActive = 'active';
	}
</script>

<div class="navbar-fixed">
	<nav class="blue-grey lighten-3" style="border-bottom: 3px solid #323E66;">
		<div class="nav-wrapper">
			<a href="#" data-target="slide-out" class="sidenav-trigger left"
				><i class="material-icons" style="color:#323E66;">menu</i></a
			>
			<a
				href="/"
				class="left black-text hide-on-med-and-down"
				style="font-size:30px;margin-left:8%;margin-right:30px;font-weight:300"
				>Corpor<span class="sidenav-logo">Aid</span></a
			>
			<a href="/" class="brand-logo black-text hide-on-large-only"
				>Corpor<span class="sidenav-logo">Aid</span></a
			>

			<ul id="nav-mobile" class="left hide-on-med-and-down header-links">
				<!--				<li on:click={setLangIt} class="black-text pointer" style="margin-right:15px">IT</li>-->
				<li class={homeActive}><a href="/" class="black-text">{$_('header.home')}</a></li>
				<li class={servicesActive}>
					<a href="/services" class="black-text">{$_('header.services')}</a>
				</li>
				<!--				<li><a href="#" class="black-text">Klant cases</a></li>-->
			</ul>
			<ul class="right hide-on-med-and-down header-links">
				<li on:click={setLangNl} class="black-text pointer col {NlActive}" style="padding: 0 10px">
					<img src="/flags/flagNl.webp" alt="flag netherlands" width="20px" />
				</li>
				<li on:click={setLangEn} class="black-text pointer {EnActive}" style="padding: 0 10px">
					<img src="/flags/flagEn.webp" alt="flag england" width="20px" />
				</li>
				<!--				<li on:click={setLangIt} class="black-text pointer" style="margin-right:15px">IT</li>-->

				<!--				<li><a href="#" class="black-text">Klant cases</a></li>-->
				<li class={contactActive}>
					<a
						href="/contact"
						class="waves-effect waves-light btn hoverable deep-orange accent-2"
						style="border-radius:34px;"
					>
						{$_('header.contact')}
					</a>
				</li>
			</ul>
		</div>
	</nav>
</div>

<style>
	.pointer:hover {
		cursor: pointer;
	}
</style>
