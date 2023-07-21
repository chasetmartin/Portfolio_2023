---
title: Getting Started with SvelteKit & Skeleton
headline: Starting a SvelteKit project using Skeleton UI, a beautiful component library for Svelte and Tailwind.
description: How to get started in SvelteKit using a beautiful Svelte and Tailwind component library - Skeleton UI.
date: '2023-7-21'
categories:
  - sveltekit
  - svelte
  - Skeleton UI
  - Tailwind
published: true
---

## Getting started with SvelteKit!

SvelteKit is my preferred JavaScript front-end framework to work with at the moment, due to it's amazing developer experience 🧐 and lighting-fast speeds ⚡. It combines the best of Svelte's efficient compilation with server-side rendering, leading to faster page loads and enhanced SEO performance. SvelteKit's straightforward approach to state management, easy routing, and built-in componentization optimize the development process - resulting in a developer friendly codebase with easy troubleshooting and scaling.

Skeleton UI provides an beautiful Tailwind-driven component library for styling and building SvelteKit projects. You have access to all of the typcial styling classes/attributes you may be familiar with using Tailwind, in addition to awesome custom Svelte components and data stores. Check out this web application I built using SvelteKit and Skeleton:

## [River Dipper](https://river.dipper.pro): a river recreation web application with real-time river flow data!

# Now let's start a project together
## Let's use Skeleton UI to start a new proejct

Make sure you have the latest version of Node.js installed on your machine, and then head on over to the command line. Make sure you're in a directory where you'd like you project to live:

```console
cd myFavoriteDirectory

npm create skeleton-app@latest my-skeleton-app
```
###
You'll be taken through the normal steps for creating a new SvelteKit project, with a few Skeleton-specific twists. Let your own desires create your specific project details:

```console
┌  Create Skeleton App (version 0.0.45)

Welcome to Skeleton 💀! A UI toolkit for Svelte + Tailwind

Problems? Open an issue on https://github.com/skeletonlabs/skeleton/issues if none exists already.
│
◆  Add type checking with TypeScript?
│  ● Yes, using TypeScript syntax
│  ○ Yes, using JavaScript with JSDoc comments
│  ○ No
└
```
```console
◆  What would you like setup in your project:
│  ◻ Add ESLint for code linting?
│  ◻ Add Prettier for code formatting ?
│  ◻ Add Playwright for browser testing ?
│  ◻ Add Vitest for unit testing ?
│  ◻ Add Svelte Inspector for quick access to your source files from the browser ?
```
###
For Tailwind forms/typography, CodeBlock, and Popups, I would recommend adding them all for maximum flexiblity - unless of course you know you're never going to be using a codeblock - for example - in your app.
```console
◆  What other packages would you like to install:
│  ◻ Add Tailwind forms ?
│  ◻ Add Tailwind typography ?
│  ◻ Add CodeBlock (installs highlight.js) ?
│  ◻ Add Popups (installs floating-ui) ?
```
###
And finally, select a theme from one of the awesome pre-built themes from Skeleton UI. Check out all of the themes in the docs [here](https://www.skeleton.dev/docs/themes). I'll be trying out Gold Nouveau, with the Skelton Welcome template (best for learning your way around).
```console
◆  Select a theme:
│  ● Skeleton
│  ○ Modern
│  ○ Hamlindigo
│  ○ Rocket
│  ○ Sahara
│  ○ Gold Nouveau
│  ○ Vintage
│  ○ Seafoam
│  ○ Crimson
└
◆  Which Skeleton app template?
│  ○ Bare Bones
│  ● Skeleton Welcome
└
```
```console
Done! You can now:

cd my-skeleton-app
npm run dev
```
### Let's give it a shot! Run the dev command and open up your localhost address. Voila!
<script>
  import Blogimage from '$lib/components/Blogimage.svelte'
</script>
<Blogimage photo="../blogphotos/SkeletonUI.jpg" alt="SkeletonUI"/>

### Give it a try for yourself and poke around the interface and app files. Stay tuned for future blog posts about more detailed SvelteKit tips and tricks!

### Huge shout out to the team at Skeleton for building such an amazing toolkit. Click [HERE](https://www.skeleton.dev/) for the complete documentation.