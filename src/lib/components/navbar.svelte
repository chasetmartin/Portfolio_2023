<script>
    import { onMount } from "svelte";
   import { fade } from "svelte/transition";
   onMount(() => { 
   const menu = document.getElementById('menu');
    document.addEventListener('click', (event) => {
    const isLinkInMenu = menu.contains(event.target) && event.target.tagName === 'A';
    if (isLinkInMenu) {
      menu.open = false;
    }
  });
});
</script>

<nav class="container">
    <a class="contrast CMicon" href="/">C | M</a>
    <details role="list" dir="rtl" id="menu">
      <summary aria-haspopup="listbox" role="link" class="contrast">menu</summary>
      <ul role="listbox">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
        <li>
          <a href="/projects">projects</a>
        </li>
        <li>
            <a href="/blog">blog</a>
        </li>
      </ul>
    </details>
  </nav>

<style>

    summary[role="link"].contrast:is([aria-current], :hover, :active, :focus) {
    background-color: transparent;
    color: var(--contrast-hover);
    }

    nav {
        padding-top: 1.5em;
        padding-bottom: 0;
        margin-bottom: 0;
    }

    .CMicon {
        font-weight: 100;
        font-size: 1.8em;
        padding-top: 0;
        padding-bottom: 0.5em;
        margin-bottom: 0;
    }
</style>
