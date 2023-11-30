<script lang="ts">
	import { goto } from "@roxi/routify";
  
  import DesktopNavLink from "./DesktopNavLink.svelte";
  import { routeLabelLUT, siteRoutes } from "./NavLuts";
  import NavWrapper, { desktopRouteBoundingBoxLUT } from "./NavWrapper.svelte";

  let navLinkContainer: HTMLDivElement;
</script>


<div class="header">
  <NavWrapper isDesktop={true} navLinkContainer={navLinkContainer} let:selectionLeft let:selectionTop let:selectionWidth let:readyToRender>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="home-container" on:click={() => { $goto("./index"); }} >
      <img src="/images/logo.svg" alt="logo" height="30" width="30" />
    </div>
    <div class="navigation" bind:this={navLinkContainer}>
      <div class="nav-link-container">
        {#each siteRoutes as route}
          <!-- eslint-disable-next-line svelte/valid-compile -->
          <DesktopNavLink label={routeLabelLUT[route]} route="/{route}" bind:getButtonBoundingBox={desktopRouteBoundingBoxLUT[route]} />
        {/each}
      </div>
      <div class="selection-indicator" style="top: {selectionTop}px; left: {selectionLeft}px; width: {selectionWidth}px" class:transition={readyToRender} />
    </div>
  </NavWrapper>
</div>

<style>
  .header {
		width: 100%;
		height: 50px;
    border-bottom: 1px solid var(--foreground);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	.home-container {
		height: 100%;
		width: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
	.navigation {
		height: 100%;
    width: 335px;

		display: flex;
		flex-direction: row;
		align-items: center;

    position: relative;
	}
  .nav-link-container {
    z-index: 2;
    position: absolute;
    width: 335px;
    height: 100%;
    
		display: flex;
		flex-direction: row;
		align-items: center;
  }

  .selection-indicator {
    z-index: 1;

    height: 24px;
    padding: 2px 10px;
    border-radius: 50px;

    position: absolute;

    background-color: var(--highlight);
  }

  .transition {
    transition: left 0.2s ease-in-out;
  }
</style>
