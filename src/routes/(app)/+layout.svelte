<nav>
    <a href="/">Home</a>
    <a href="/about">About Me</a>
    <a href="/projects">Projects</a>
    <a href="/blog">Blog</a>
</nav>
<body>
    <slot />
</body>
<style>
    body {
        background: var(--dark);
    }
    nav {
        background: var(--dark);
    }
    nav a {
        text-decoration: none;
        color: var(--light);
    }
</style>