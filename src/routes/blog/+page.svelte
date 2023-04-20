<script>
    import Bloghero from '../../lib/components/bloghero.svelte';
    import { slide } from 'svelte/transition';
</script>
<div in:slide={{duration:1100, delay:300}}>
    <Bloghero />
</div>