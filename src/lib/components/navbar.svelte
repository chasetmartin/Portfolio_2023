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
      <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24" alt="dark theme"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9Z"></path></svg>
      {:else}
      <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24" alt="light theme"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>  
      {/if}
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


details,
li {
  position: relative;
}

details summary + ul
/* li > ul */ { 
  display: flex;
  z-index: 99;
  position: absolute;
  top: auto;
  right: 0;
  left: 0;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: var(--border-width) solid var(--dropdown-border-color);
  border-radius: var(--border-radius);
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  background-color: var(--dropdown-background-color);
  box-shadow: var(--card-box-shadow);
  color: var(--dropdown-color);
  white-space: nowrap;
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: var(--border-radius);
  margin-top: var(--outline-width);
  -webkit-margin-start: 0;
  margin-inline-start: 0;
}
details summary + ul li,
li > ul li {
  width: 100%;
  margin-bottom: 0;
  padding: calc(var(--form-element-spacing-vertical) * 0.25) var(--form-element-spacing-horizontal);
  list-style: none;
}
details summary + ul li:first-of-type,
li > ul li:first-of-type {
  margin-top: calc(var(--form-element-spacing-vertical) * 0.5);
}
details summary + ul li:last-of-type,
li > ul li:last-of-type {
  margin-bottom: calc(var(--form-element-spacing-vertical) * 0.75);
}
details summary + ul li a,
li > ul li a {
  display: flex;
  margin: calc(var(--form-element-spacing-vertical) * -0.5) calc(var(--form-element-spacing-horizontal) * -1);
  padding: calc(var(--form-element-spacing-vertical) * 1.5) var(--form-element-spacing-horizontal);
  overflow: hidden;
  color: var(--dropdown-color);
  text-decoration: none;
  text-overflow: ellipsis;
  border-radius: 0;
}
details summary + ul li a:hover,
li > ul li a:hover {
  background-color: var(--dropdown-hover-background-color);
}

details summary::after,
li > a::after {
  display: block;
  width: 1rem;
  height: calc(1rem * var(--line-height, 1.5));
  -webkit-margin-start: 0.5rem;
  margin-inline-start: 0.5rem;
  float: right;
  transform: rotate(0deg);
  background-position: right center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  content: "";
}

details {
  padding: 0;
  border-bottom: none;
}
details summary {
  margin-bottom: 0;
}
details summary:not([role]) {
  height: calc(1rem * var(--line-height) + var(--form-element-spacing-vertical) * 2 + var(--border-width) * 2);
  padding: var(--form-element-spacing-vertical) var(--form-element-spacing-horizontal);
  border: var(--border-width) solid var(--form-element-border-color);
  border-radius: var(--border-radius);
  background-color: var(--form-element-background-color);
  color: var(--form-element-placeholder-color);
  line-height: inherit;
  cursor: pointer;
  transition: background-color var(--transition), border-color var(--transition), color var(--transition), box-shadow var(--transition);
}
details summary:not([role]):active, details summary:not([role]):focus {
  border-color: var(--form-element-active-border-color);
  background-color: var(--form-element-active-background-color);
}
details summary:not([role]):focus {
  box-shadow: 0 0 0 var(--outline-width) var(--form-element-focus-color);
}
details[open] summary {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
details[open] summary::before {
  display: block;
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: none;
  content: "";
  cursor: default;
}

nav details summary,
nav li a {
  display: flex;
  direction: ltr;
}

nav details summary,
nav details summary:not([role]) {
  height: auto;
  padding: var(--nav-link-spacing-vertical) var(--nav-link-spacing-horizontal);
}
nav details[open] summary {
  border-radius: var(--border-radius);
}

nav details summary[role=link] {
  margin-bottom: calc(var(--nav-link-spacing-vertical) * -1);
  line-height: var(--line-height);
}
nav details summary[role=link] + ul {
  margin-top: calc(var(--nav-link-spacing-vertical) + var(--outline-width));
  -webkit-margin-start: calc(var(--nav-link-spacing-horizontal) * -1);
  margin-inline-start: calc(var(--nav-link-spacing-horizontal) * -1);
}

summary[role="link"].contrast:is([aria-current], :hover, :active, :focus) {
  background-color: transparent;
  color: var(--contrast-hover);
}

nav {
    padding-top: 1.5em;
    padding-bottom: 0;
    margin-bottom: 0;
}

.thememode {
  font-size: 0.9em;
  padding-top: 0.3em;

}

.CMicon {
    font-weight: 100;
    font-size: 1.8em;
    padding-top: 0;
    padding-bottom: 0.5em;
    margin-bottom: 0;
}
</style>
