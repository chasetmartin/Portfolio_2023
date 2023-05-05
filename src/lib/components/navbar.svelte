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

import { theme } from '../helpers/theme';


  function toggleTheme() {
  if ($theme === 'light') {
    $theme = 'dark';
  } else {
    $theme = 'light';
  }
  document.documentElement.setAttribute('data-theme', $theme);
}
</script>

<nav class="container">
    <a class="contrast CMicon" href="/">C | M</a>
    <div class="thememode">
      <input type="checkbox" role="switch" id="theme" name="themetoggle" aria-label="Theme Toggle" on:click={toggleTheme} />
      {#if $theme === 'light'}
        dark
      {:else}
        light  
      {/if}
      mode
    </div>
    <details dir="rtl" id="menu">
      <summary aria-haspopup="listbox" role="link" class="contrast" aria-expanded="false" aria-controls="menu-list">menu</summary>
      <ul role="listbox" aria-label="Menu items" id="menu-list" aria-hidden="true">
        <li>
          <a href="/" role="option" aria-selected="false">home</a>
        </li>
        <li>
          <a href="/about" role="option" aria-selected="false">about</a>
        </li>
        <li>
          <a href="/projects" role="option" aria-selected="false">projects</a>
        </li>
        <li>
          <a href="/blog" role="option" aria-selected="false">blog</a>
        </li>
      </ul>
    </details>
  </nav>

<style>

    summary[role="link"].contrast:is([aria-current], :hover, :active, :focus) {
    background-color: transparent;
    color: var(--contrast-hover);
    }

    details {
        display: block;
        margin-bottom: var(--spacing);
        padding-bottom: var(--spacing) * 0.5;
        border-bottom: none;
    }

    nav {
        padding-top: 1.5em;
        padding-bottom: 0;
        margin-bottom: 0;
    }

    .thememode {
      font-size: 0.9em;
      padding-top: 0.3em;
      padding-left: 50%;
    }

    .CMicon {
        font-weight: 100;
        font-size: 1.8em;
        padding-top: 0;
        padding-bottom: 0.5em;
        margin-bottom: 0;
    }
</style>
