<script>
    import Abouthero from "../../lib/components/abouthero.svelte";
    import Seo from "../../lib/components/seo.svelte";

    import { slide } from 'svelte/transition';
    import { fade } from "svelte/transition";

    export let data;

</script>
<Seo 
    title="About | Chase Martin" 
    description="Learn about my mission, software development experience, technical skills, and education."
    keywords="Chase Martin, About, Software, Mission, Skills, Education"
    type="WebPage"
    />
<!-- <div in:slide={{duration:1100, delay:300}}> -->
<div in:fade={{duration:800}}>
    <Abouthero {data}/>
    <div class="container">
        <details open>
            <!-- svelte-ignore a11y-no-redundant-roles -->
            <summary role="button">
                Mission
            </summary>
        {data.about.content}
        </details>
    </div>
    <div class="container" in:fade={{duration:800, delay:1000}}>
        <div class="grid">
            <details open>
                <!-- svelte-ignore a11y-no-redundant-roles -->
                <summary role="button" class="contrast">
                    Skills
                </summary>
            <div class="container">
                {#each Object.keys(data.skills) as category}
                <article>
                <header>{category}</header>
                <div>
                <ul>
                    {#each data.skills[category] as skill}
                        <li>{skill}</li>
                    {/each}
                </ul>
                </div>
                </article>
                {/each}
            </div>
            </details>
            <details open>
                <!-- svelte-ignore a11y-no-redundant-roles -->
                <summary role="button" class="contrast">
                    Experience
                </summary>
            <div class="container">
                {#each data.experience as exp}
          <article>
            <header>{exp.position} | {exp.company} <br/> {exp.location} {exp.date_range}</header>
            <div>
              <ul>
                {#if exp.skills !== ""}
                  <li>Programming skills: {exp.skills}</li>
                {/if}
                {#if exp.description !== ""}
                  <li>{exp.description}</li>
                {/if}
              </ul>
            </div>
            {#if exp.position2}
            <footer>
                {exp.position2} | {exp.company2} <br/> {exp.location2} {exp.date_range2}
            </footer>
            {/if}
          </article>
        {/each}
            </div>
            </details>
        </div>
    </div>
    </div>

<style>


[role=button]:is([aria-current], :hover, :active, :focus) {
  transform: scale(1.01);
}

</style>