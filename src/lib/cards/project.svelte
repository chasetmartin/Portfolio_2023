<script>
    export let repo;
    const sortedTopics = repo.topics.sort().join(' | ');

    import Markdown from "@magidoc/plugin-svelte-marked";
</script>

    <article>
        <!-- <header>
            <div><a role="button" class="outline contrast" href="{repo.url}" target="_blank">{repo.name}</a></div>
        </header> -->
        <div>
            <!-- {#if repo.description !== null && repo.name === "River_Dipper" || repo.name === "Dipper_Recreation" || repo.name === "Portfolio_2023" }
            <header>
                <div >
                    <h3>{repo.name}</h3>
                </div>
            </header> 
                    <details open>
                        
                        <summary>
                            <h6>{repo.description}</h6>
                        </summary>
                        <Markdown source={repo.readme} />
                    </details>
            {:else}
            <header>
                <div>
                    <h3>{repo.name}</h3>
                </div>
            </header> 
                    <details>
                      
                        <summary >
                            <h6>{repo.description}</h6>
                            click to expand README
                        </summary>
                       <Markdown source={repo.readme} />
                    </details>
            {/if} -->
            <header>
                <div>
                    <h3>{repo.name}</h3>
                </div>
            </header> 
                    <details>
                        <!-- svelte-ignore a11y-no-redundant-roles -->
                        <summary role="button" class="outline">
                            <h6>{repo.description}</h6>
                            click to expand README
                        </summary>
                       <Markdown source={repo.readme} />
                    </details>
        </div>
        <footer>
            <div class="grid">
                <div><a href="{repo.url}">{repo.url}</a></div>
                <div>{sortedTopics}</div>
            </div>
        </footer>
    </article>

  
