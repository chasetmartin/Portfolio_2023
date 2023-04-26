<script>
  import { page } from '$app/stores';
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

<footer>
<div class="grid">
  {#if $page.url.pathname !== '/'}
  <div class="container">
    <nav aria-label="breadcrumb">
      <ul>
            <li><a href="/">home</a></li>
            <li><a href={$page.url.pathname}>{$page.url.pathname.substring(1)}</a></li>
      </ul>
    </nav>
  </div>
  {/if}
  <div class="container rightfoot">
    <p>&#169;2023 Chase Martin</p>
  </div>
    {#if $page.url.pathname !== '/'}
      <div class="container rightfoot">
        <p>Built with SvelteKit &#128293;</p>
      </div>
    {/if}
    <div class="container rightfoot">
      <input type="checkbox" role="switch" id="theme" name="themetoggle" on:click={toggleTheme} />
      {#if $theme === 'light'}
        dark
      {:else}
        light  
      {/if}
      mode
    </div>
</div>
</footer>

<style>
    footer {
        padding-top: 1.5em;
    }

    .rightfoot {
      margin-top: 1em;
    }
</style>