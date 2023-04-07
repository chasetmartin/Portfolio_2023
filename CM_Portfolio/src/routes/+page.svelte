<script> 
import { onMount } from "svelte";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

// Create boxes function
let numBoxes = 200; // number of boxes to render

/**
     * @param {number} numBoxes
     */
function createBoxArray(numBoxes) {
// create an array of objects representing the boxes
return Array.from({ length: numBoxes }, (_, index) => ({ id: index }));
}

// create an array of box objects
let boxes = createBoxArray(numBoxes);  

/**
     * @type {{ restart: () => void; }}
     */
let boxTimeline;

function flyBoxes() {
  if (boxTimeline) {
    // if the timeline exists, reset it to its initial state
    boxTimeline.restart();
  } else {
    // otherwise, create the timeline
    boxTimeline = gsap.timeline()
      .to(".box", {
        force3D: true,
        duration: 0.5,
        xPercent: 200,
        ease: "power1.inOut",
        stagger: { amount: 0.2 }
      }, 0);
  }
}

onMount(() => {

    gsap.timeline({
    scrollTrigger: {
      trigger: ".trigger",
      scrub: 0.75,
      pin: true,
      start: "top top",
      end: "+=125%"
    }
  })
  .to(".box", {
    force3D: true,
    duration: 1,
    xPercent: 100,
    ease: "power1.inOut",
    stagger: { amount: 1 }
  })
  .to(".box", { ease: "power1.out", duration: 1, rotation: "110deg" }, 0)
  .to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);

//   // add event listeners to the links
//   const aboutLink = document.querySelector("a[href='/']");
//   aboutLink.addEventListener("click", flyBoxes);
//   const projectLink = document.querySelector("a[href='/projects']");
//   projectLink.addEventListener("click", flyBoxes);
//   const blogLink = document.querySelector("a[href='/blog']");
//   blogLink.addEventListener("click", flyBoxes);
const anchors = document.querySelectorAll('a');
anchors.forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault(); // prevent the default behavior of the anchor tag
    flyBoxes(); // play the flyBoxes animation
    setTimeout(() => {
      window.location.href = anchor.href; // redirect the user to the linked page
    }, 1000); // set a delay before redirecting the user (adjust the delay time as needed)
  });
});

})
</script>

<section class="trigger">
    <span class="down chasemartin">Chase<br />Martin</span>
        <span class="up">
            <div class="navmain">
                <a href="/">About Me</a><br>
                <a href="/projects">Projects</a><br>
                <a href="/blog">Blog</a><br>
            </div>
        </span>
    <div class="upscroll">
        Scroll up to return home
    </div>
    {#each boxes as box}
        <div class="box"></div>
    {/each}
    <div class= downscroll>
        Scroll Down
    </div>
</section>