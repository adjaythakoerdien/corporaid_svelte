<style>
@import "index.css";
</style>

<script lanbg="ts">
  import Header from '$lib/layout/header.svelte';
    import pijl from '../icons/arrow_up.png';
    import Intro from '$lib/intro-section.svelte';
    import OnzeDiensten from '$lib/home-onze-diensten.svelte';
    import Carousel from '$lib/home-carousel.svelte';
    import Quote from '$lib/home-quote.svelte';
    import Vraag from '$lib/home-vraag.svelte';
    import Footer from '$lib/layout/footer.svelte';

    import sgMail from '@sendgrid/mail';
    import SideBar from '$lib/layout/sidenav.svelte';
    let sidebar_show = false;

    // function submitForm() {
    //   fetch("/api/sendmail");
    // }
</script>

<Header />

<!--<SideBar />-->
<!--<button on:click={() => sidebar_show = !sidebar_show}>Toggle Sidebar</button>-->

<main style="height:722px;width:100%;background-color:#323E66;">
    <section class="hero-section">
        <div class="row">
            <div class="hero-image col m6 hide-on-small-only">

            </div>
            <div class="hero-container col s12 m4">

                <h1 class="hero-title hero-text white-text right">
                    FRESH FINANCE PERSPECTIVE
                </h1>

                <h2 class="hero-subtitle hero-text right">
                    Op zoek naar interim controller of CFO professionals?
                    Wij brengen je finance naar
                    <span class="the-next-level">
                        the next level
                    </span>
                </h2>
                <div class="right" style="width:400px;">
                    <div class="">
                        <a href="/contact" class="hero-button right hero-text waves-effect waves-light btn deep-orange accent-2 hoverable" style="border-radius:34px;">NEEM DIRECT CONTACT OP</a>
                    </div>

                    <div class="right white-text hero-button-subtext arrow">
                        <img src={pijl} alt="">
                    </div>

                    <div class="right white-text hero-button-subtext">
                        Kennismaken is altijd GRATIS
                    </div>
                </div>

            </div>
            <div class="hero-image beneden col s12 hide-on-med-and-up" style="background-color: #323E66">

            </div>
        </div>
    </section>
</main>

<Intro />

<OnzeDiensten />

<Carousel />

<Quote />

<Vraag />

<Footer />
