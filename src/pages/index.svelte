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
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus libero corporis ullam et ad, magnam enim, quia fugit explicabo itaque rem unde laborum ab illo, hic saepe deleniti laboriosam doloribus. Assumenda aperiam cumque iste id iusto natus inventore architecto.
  </div>
  <Socials />
</div>

<style>
  .about {
    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    width: min(100%, 1000px);
    margin-bottom: 40px;
  }

  .about-us {
    text-align: center;
    font-size: 18px;
    margin-bottom: 40px;
  }
</style>
