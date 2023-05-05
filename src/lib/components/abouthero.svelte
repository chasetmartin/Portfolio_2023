<script>
    export let data;
</script>

<div class="hero container-fluid">
    <div class="container">
    <h1>{data.about.title}</h1>
    <h2>{data.about.subtitle}</h2>
    </div>
</div>

<style>
    .hero {
        background-image: var(--background-hero2);
        background-position: center;
        background-size: cover;
        height: 300px;
    }
   
   h1 {
    padding-top: 0.5em;
    margin-bottom: 0.3em;
    font-size: 3em;
   }

   h2 {
    --font-size: 1.1rem;
    --typography-spacing-vertical: 1.65rem;
   }
</style>