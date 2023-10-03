<script lang="ts">
  import MobileNavLink from "./MobileNavLink.svelte";

  export let showing: boolean;
</script>

<div class="navigation" class:menu-hidden={!showing}>
  <MobileNavLink label="About" route="./index" bind:mobileMenuIsOpen={showing} />
  <MobileNavLink label="Events" route="./events" bind:mobileMenuIsOpen={showing} />
  <MobileNavLink label="Officers" route="./officers" bind:mobileMenuIsOpen={showing} />
  <MobileNavLink label="Contact" route="./contact" bind:mobileMenuIsOpen={showing} />
</div>

<style>
  .navigation {
		z-index: 100;
		position: absolute;

		left: calc(100% - 150px);
		top: 0px;

		height: 100%;

		transition: left 0.4s;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		background-color: var(--background);
    border-left: 1px solid var(--foreground);
	}

	.menu-hidden {
		left: 100%;
	}
</style>
