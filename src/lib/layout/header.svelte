<script>
	export let homeActive = '';
	export let servicesActive = '';
	export let contactActive = '';
</script>

<div class="navbar-fixed">
	<nav class="blue-grey lighten-3" style="border-bottom: 3px solid #323E66;">
		<div class="nav-wrapper blue-grey lighten-3">
			<a href="/" class="brand-logo black-text">Corpor<span class="sidenav-logo">Aid</span></a>
			<a href="#" data-target="slide-out" class="sidenav-trigger"
				><i class="material-icons" style="color:#323E66;">menu</i></a
			>

			<ul id="nav-mobile" class="right hide-on-med-and-down header-links">
				<li class={homeActive}><a href="/" class="black-text">Home</a></li>
				<li class={servicesActive}><a href="/services" class="black-text">Onze diensten</a></li>
				<!--				<li><a href="#" class="black-text">Klant cases</a></li>-->
				<li class={contactActive}>
					<a
						href="mailto:contact@corporaid.nl"
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
