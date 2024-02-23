<!-- ? Route Metadata -->
<!-- routify:options title="Our Officers" -->
<!-- routify:options description="Get to know the officers that keep DSA@VT running!" -->

<script lang="ts">
  import Officer from "../../components/Officer.svelte";

  const officerData = {
    "justice": {
      "name": "Justice Jackson",
      "position": "President",
      "aboutMe": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam modi autem sint ad commodi architecto ipsum necessitatibus eius neque, qui, minus ipsam debitis officia exercitationem porro quam minima nam adipisci voluptatum perferendis quod? Cumque repellendus consectetur unde molestias tenetur modi."
    },
    "arian": {
      "name": "Arian Alam",
      "position": "Secretary",
      "aboutMe": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptas at architecto hic? Nulla deleniti illo porro sequi nesciunt alias ut, reiciendis aperiam, laboriosam, corrupti cum repellat reprehenderit sit nam a repudiandae? Perferendis, maiores cum. Non quas laboriosam beatae. Libero."
    },
    "david": {
      "name": "David Smits",
      "position": "Internal VP",
      "aboutMe": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A error ea perferendis nemo, fugit culpa tenetur unde similique soluta? Eaque consectetur debitis, enim quis temporibus velit ex et nisi ratione optio animi unde deleniti, hic eos, totam accusantium in omnis."
    },
    "daniel": {
      "name": "Junhyung (Daniel) Koo",
      "position": "External VP",
      "aboutMe": "I am a junior studying computer science at Virginia Tech. I enjoy cooking and traveling to places I’ve never been before. I also enjoy listening to jazz! I am happy to be a part of this club"
    },
    "joon": {
      "name": "Daniel Park",
      "position": "Event Planner",
      "aboutMe": "Senior studying Computer Science, graduating Spring 2024. I am also currently serving as a UTA for CS classes. Previously, I have been a part of undergraduate research, working with the data visualization of brain tumors under Professor Polys. My hobbies are working out, music, and basketball."
    },
    "gibbs": {
      "name": "Needed",
      "position": "Marketing",
      "aboutMe": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui iste repellendus temporibus iusto deserunt provident minus facilis, commodi laboriosam eum quod fugiat doloribus maiores error cumque? Maiores aliquid quia sint voluptatibus veniam iste, libero sequi praesentium modi atque mollitia sunt."
    },
    "prat": {
      "name": "Needed",
      "position": "Outreach",
      "aboutMe": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aliquam est illum, ullam voluptates laboriosam blanditiis corporis quis amet similique dolores, quae nihil tempora ducimus ad voluptatum explicabo exercitationem nobis aperiam doloremque? Voluptatem dolores minus repudiandae reprehenderit vitae doloribus rem?"
    },
    "travis": {
      "name": "Travis Lane",
      "position": "Needed",
      "aboutMe": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis similique officia atque excepturi assumenda asperiores quo? Dignissimos, eos voluptates! Aut in sapiente ipsum expedita voluptate, ex nulla id, delectus repellendus temporibus voluptatem pariatur impedit obcaecati sint esse quis officiis eum."
    },
    "carter": {
      "name": "Carter Kosturos",
      "position": "Needed",
      "aboutMe": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolorum molestiae a modi neque aliquam, ducimus non voluptas unde quod exercitationem excepturi sunt rem corrupti totam iste. Quo ipsam impedit vel cumque? Nihil soluta debitis velit explicabo pariatur at! Nisi."
    },
    "patrick": {
      "name": "Needed",
      "position": "Treasurer",
      "aboutMe": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti neque dicta, facilis nulla aliquam blanditiis atque modi molestias, sapiente dolore accusantium laborum itaque quae illo explicabo quaerat asperiores suscipit ad rerum? Porro odit impedit, vel doloremque est placeat alias commodi!"
    }
  }
</script>

<div class="officers">
  {#each Object.entries(officerData) as [ key, officer ]}
    <Officer key={key} name={officer.name} position={officer.position} aboutMe={officer.aboutMe} />
  {/each}
</div>

<style>
  .officers {
    min-height: calc(100% - 20px);
    width: calc(100% - 20px);
    margin-top: 40px;
    padding: 20px;
    overflow-y: scroll;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
