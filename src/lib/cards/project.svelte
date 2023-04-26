<script>
    export let repo;
    const sortedTopics = repo.topics.sort().join(' | ');
</script>

    <article>
        <header>
            <div><a role="button" class="outline contrast" href="{repo.url}" target="_blank">{repo.name}</a></div>
        </header>
        <div>
            {#if repo.description !== null }
            {repo.description}
            {/if}
        </div>
        <footer>
            <div class="grid">
                <div>{sortedTopics}</div>
            </div>
        </footer>
    </article>
  
