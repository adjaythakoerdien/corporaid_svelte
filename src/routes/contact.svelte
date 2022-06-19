<style>
    @import 'contact.css';
</style>

<script lang="ts">
  import Header from '$lib/layout/header.svelte';
  import Footer from '$lib/layout/footer.svelte';

  let firstName: string = '';
  let lastName: string = '';
  let email: string = '';
  let text: string = '';


  function submitForm() {
    fetch("/api/sendmail");
  }

  function submitFormTest(e) {
    firstName = e.target[0].value;
    lastName = e.target[1].value;
    email = e.target[2].value;
    text = e.target[3].value;
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(text);
    alert('Hier komt een mooie popup met een tekst dat de email succesvol is verstuurd naar:\n\n'
    + firstName + ' ' + lastName + '\n'
    + email + '\n\n**********\n\n' + text
    )
  }


</script>

<!--<Header />-->

<section class="form-section">
    <article class="form-container">
        <div class="row container">
                <form
                        class="card col s12 m12 l12 contact-form"
                        on:submit|preventDefault={submitFormTest}
                        style="border-radius: 4px;">

                    <h4 class="center">Contact</h4>
                    <p class="center form-subtitle">
                        Kleine toelichting voor het contact formmulier
                    </p>

                    <div class="row">
                        <div class="input-field col s6">
                            <input id="first_name" type="text" class="validate" required>
                            <label for="first_name">Voornaam</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="last_name" type="text" class="validate" required>
                            <label for="last_name">Achternaam</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate" required>
                            <label for="email">Email</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <textarea id="textarea1" class="materialize-textarea" required></textarea>
                            <label for="textarea1">Textarea</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="input-field col s12">
                            <button
                                    href="#modal1"
                                    class="form-button waves-effect waves-light btn hoverable deep-orange accent-2 col s12 hoverable"
                                    style="border-radius:34px;"
                                    type="submit">
                                Stuur email
                            </button>
                        </div>
                    </div>

            </form>
        </div>
    </article>
</section>



<Footer />
