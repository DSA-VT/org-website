<script lang="ts">
  import MobileNavLink from "./MobileNavLink.svelte";
  import { routeLabelLUT, siteRoutes } from "./NavLuts";
  import NavWrapper, { mobileRouteBoundingBoxLUT } from "./NavWrapper.svelte";

  export let showing: boolean;

  let navLinkContainer: HTMLDivElement;
</script>

<NavWrapper isDesktop={false} navLinkContainer={navLinkContainer} let:selectionTop let:readyToRender>
  <div class="navigation" class:menu-hidden={false} bind:this={navLinkContainer}> <!-- !showing -->
    <div class="nav-link-container">
      {#each siteRoutes as route}
      <!-- eslint-disable-next-line svelte/valid-compile -->
        <MobileNavLink label={routeLabelLUT[route]} route="/{route}" bind:getButtonBoundingBox={mobileRouteBoundingBoxLUT[route]} bind:mobileMenuIsOpen={showing} />
      {/each}
    </div>
    <div class="selection-indicator" style="top: {selectionTop}px;" class:transition={readyToRender} />
  </div>
</NavWrapper>

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

  .selection-indicator {
    z-index: 1;

    width: 6px;
    padding: 10px 2px;
    border-radius: 50px;

    position: absolute;

    background-color: var(--highlight);

    left: 14px;
  }
  
  .transition {
    transition: top 0.2s ease-in-out;
  }
</style>
