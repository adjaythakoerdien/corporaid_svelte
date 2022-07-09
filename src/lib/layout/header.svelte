<script>
	export let homeActive = '';
	export let servicesActive = '';
	export let contactActive = '';
	import { _ } from '../../services/i18n';
	import { setupI18n } from '../../services/i18n';

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
</script>

<div class="navbar-fixed">
	<nav class="blue-grey lighten-3" style="border-bottom: 3px solid #323E66;">
		<div class="nav-wrapper blue-grey lighten-3">
			<a href="/" class="brand-logo black-text">Corpor<span class="sidenav-logo">Aid</span></a>
			<a href="#" data-target="slide-out" class="sidenav-trigger"
				><i class="material-icons" style="color:#323E66;">menu</i></a
			>

			<ul id="nav-mobile" class="right hide-on-med-and-down header-links">
				<li on:click={setLangNl} class="black-text pointer" style="margin-right:15px">NL</li>
				<li on:click={setLangEn} class="black-text pointer" style="margin-right:15px">EN</li>
				<!--				<li on:click={setLangIt} class="black-text pointer" style="margin-right:15px">IT</li>-->
				<li class={homeActive}><a href="/" class="black-text">{$_('header.home')}</a></li>
				<li class={servicesActive}>
					<a href="/services" class="black-text">{$_('header.services')}</a>
				</li>
				<!--				<li><a href="#" class="black-text">Klant cases</a></li>-->
				<li class={contactActive}>
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

<style>
	.pointer:hover {
		cursor: pointer;
	}
</style>
