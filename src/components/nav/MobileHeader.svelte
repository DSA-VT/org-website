<script lang="ts">
  export let mobileNavOpen: boolean
</script>

<div class="mobile-header">
  <img src="/images/logo.svg" alt="logo" height="30" width="30" />
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="menu-button-wrapper" on:click={() => mobileNavOpen = !mobileNavOpen}>
    <svg xmlns="http://www.w3.org/2000/svg" height="1.6em" fill="var(--font-color)" viewBox="0 0 448 512">
      <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
    </svg>
  </div>
</div>

<style>
	.mobile-header {
		width: 100%;
		height: 50px;
    border-bottom: 1px solid var(--foreground);
    
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}
  .menu-button-wrapper {
    height: 100%;
    width: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
	.mobile-header img {
		margin-left: 10px;
	}
</style>
