<script lang="ts">
  // TODO: remove this once its in use again
  // eslint-disable-next-line svelte/valid-compile
  export let mobileNavOpen: boolean
</script>

<div class="mobile-header">
  <div class="home-container">
    <img src="/images/logo.svg" alt="logo" height="30" width="30" />
  </div>
</div>

<style>
	.mobile-header {
		width: 100%;
    border-bottom: 1px solid var(--srcery-xgray2);
		display: flex;
		flex-direction: column;
	}
	.mobile-header .home-container {
		height: 50px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}
	.mobile-header .home-container img {
		margin-left: 7px;
	}
</style>
