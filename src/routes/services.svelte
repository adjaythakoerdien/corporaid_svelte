<style>
    @import 'services.css';
</style>

<script>
    import Hero from '$lib/services/services-hero.svelte';
    import Intro from '$lib/services/services-intro.svelte';
    import Sociaal from '$lib/services/services-section-sociaal.svelte';
    import Finance from '$lib/services/services-section-finance.svelte';
    import Interim from '$lib/services/services-section-interim.svelte';
    import Management from '$lib/services/services-section-management.svelte';

    import Vraag from '$lib/home/home-vraag.svelte';
    import Footer from '$lib/layout/footer.svelte';
</script>


<Hero />

<Intro />

<Sociaal />

<Finance />

<Management />

<Interim />

<Vraag />

<Footer />
