<!-- ? Route Metadata -->
<!-- routify:options title="DSA @ VT" -->
<!-- routify:options description="TODO" -->

<script lang="ts">
  import Socials from "../components/Socials.svelte";

</script>

<div class="about">
  <div class="logo">
    <img src="/images/logo-and-name.svg" alt="logo" width="100%" />
  </div>
  <div class="about-us">
    We aim to create a community of students who are interested in learning and studying data structures and algorithms. 
    The club provides a platform for members to prepare for technical interviews by discussing DSA topics and questions. 
    Members can collaborate and learn from one another in a supportive environment. 
    The club is dedicated to fostering a passion for computer science and developing technical skills among its members.
  </div>
  <Socials />
</div>

<style>
  .about {
    width: 80%;
    max-width: 800px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    width: min(100%, 1000px);
    margin-bottom: 40px;
    max-width: 600px;
  }

  .about-us {
    text-align: center;
    font-size: 18px;
    margin-bottom: 40px;
  }
</style>
