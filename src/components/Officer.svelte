<script lang="ts">

  export let key: string;
  export let name: string;
  export let position: string;
  export let aboutMe: string;

  $: imagePath = `/images/officer-headshots/${key}.jpg`;
</script>

<div class="officer">
  <div class="image">
    <img src="{imagePath}" alt="{name}'s officer headshot">
  </div>
  <div class="name">{name}</div>
  <div class="position">{position}</div>
  <div class="about-me">{aboutMe}</div>
</div>

<style>
  .officer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }

  .image {
    max-width: 200px;
    max-height: 200px;

    border-radius: 50%;
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image > img {
    scale: 0.3;
  }

  .name {
    font-size: 28px;
  }

  .position {
    font-size: 20px;
    margin-bottom: 7px;
  }

  .about-me {
    text-align: center;
  }
</style>
