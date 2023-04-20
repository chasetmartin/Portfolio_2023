<script>
    import '@picocss/pico';
    import '@fontsource/raleway';
    import '../app.css';
    import { fade } from 'svelte/transition';

    import Header from '../lib/components/header.svelte';
</script>
<div>
    <Header />
</div>
<slot />