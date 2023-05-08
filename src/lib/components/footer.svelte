<script>
  import { page } from '$app/stores';

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
    <p>&#169;2023 Chase Martin | Portland, OR</p>
  </div>
    {#if $page.url.pathname !== '/'}
      <div class="container rightfoot">
        <p>Built with SvelteKit &#128293;</p>
      </div>
    {/if}
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