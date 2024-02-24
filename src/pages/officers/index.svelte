<!-- ? Route Metadata -->
<!-- routify:options title="Our Officers" -->
<!-- routify:options description="Get to know the officers that keep DSA@VT running!" -->

<script lang="ts">
  import Officer from "../../components/Officer.svelte";

  const officerData = {
    "justice": {
      "name": "Justice Jackson",
      "position": "President",
      "aboutMe": "I'm a third-year CS major with minors in PPE and HCI. Hailing from Chesapeake, Virginia, I take pride in serving as the president of DSA @ VT. My coding journey began in freshman year, and our club, founded in my sophomore year, has experienced remarkable growth. This summer i'll be interning as a software engineer at Netflix. In my free time i like to DJ and play tennis. I'm excited about the future and the possibilities it holds!"
    },
    "arian": {
      "name": "Arian Alam",
      "position": "Secretary",
      "aboutMe": "I’m a senior in the accelerated M. Eng CS program, with an interest in AI/ML. I’m pretty passionate about data structures and algorithms and teaching, and I have TA’d 3114/5040 for a year. Outside of CS, I enjoy cooking, baking, listening to music, and anything else that takes my mind off of school :)"
    },
    "david": {
      "name": "David Smits",
      "position": "Internal VP",
      "aboutMe": "I am a senior studying Computer Science. My academic interests align with data management and analysis and have built a website around this passion - <a href=\"https://csbluegem.com/\" rel=\"noreferrer noopener\" target=\"_blank\">https://csbluegem.com/</a>. I currently work for 4Help at Virginia Tech as an IT consultant and have taught python to beginner programmers in the past. I will be interning at Peraton during summer 2024 as a software engineer. In my freetime, I am an avid mountain biker."
    },
    "daniel": {
      "name": "Junhyung (Daniel) Koo",
      "position": "External VP",
      "aboutMe": "I am a junior studying computer science at Virginia Tech. I came to the united states in 2017 and never thought I would study computer science until my senior year in high school. I'm passionate about frontend development  and excited about where it will take me. Outside of academics, I enjoy cooking, swimming, and watching movies with friends."
    },
    "joon": {
      "name": "Daniel Park",
      "position": "Event Planner",
      "aboutMe": "I am a senior studying Computer Science, graduating Spring 2024. I am also currently serving as a UTA for CS classes. Previously, I have been a part of undergraduate research, working with the data visualization of brain tumors under Professor Polys. My hobbies are working out, music, and basketball."
    },
    "gibbs": {
      "name": "Gibbs Gresge",
      "position": "Marketing",
      "aboutMe": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui iste repellendus temporibus iusto deserunt provident minus facilis, commodi laboriosam eum quod fugiat doloribus maiores error cumque? Maiores aliquid quia sint voluptatibus veniam iste, libero sequi praesentium modi atque mollitia sunt."
    },
    "prat": {
      "name": "Pratham",
      "position": "Outreach",
      "aboutMe": "I'm a junior in CS with a career interest in software development. In my spare time I love to game, discuss music, and chill wit da guys. I am interning with Finra this upcoming summer as a technology intern and looking forward to leetcoding with everyone!"
    },
    "travis": {
      "name": "Travis Lane",
      "position": "Internal Developer",
      "aboutMe": "I'm a sophomore studying Data Science and minoring in CS. I'm from Collierville TN, and I currently work as a Software Engineer for Actalent, focusing on web technologies. I enjoying playing tennis, hiking, and working out."
    },
    "carter": {
      "name": "Carter Kosturos",
      "position": "Internal Developer",
      "aboutMe": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa dolorum molestiae a modi neque aliquam, ducimus non voluptas unde quod exercitationem excepturi sunt rem corrupti totam iste. Quo ipsam impedit vel cumque? Nihil soluta debitis velit explicabo pariatur at! Nisi."
    },
    "patrick": {
      "name": "Patrick Cross",
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
