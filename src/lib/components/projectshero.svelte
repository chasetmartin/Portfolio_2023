<div class="hero container-fluid">
    <div class="container">
    <h1>Projects</h1>
    <h5>Check out what I'm working on now</h5>
    </div>
</div>

<style>
    .hero {
        background-image: url('/hero4.svg');
        background-position: center;
        background-size: cover;
        height: 300px;
    }

    .hero:not([data-theme=dark]) {
        background-image: url('/otherherolight.svg');
    }

    @media only screen and (prefers-color-scheme: dark) {
      .hero:not([data-theme]) {
      background-image: url('/hero4.svg');
    }
    }
   
   h1 {
    padding-top: 0.5em;
    margin-bottom: 0.3em;
    font-size: 3em;
   }
</style>