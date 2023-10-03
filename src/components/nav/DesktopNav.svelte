<script lang="ts">
	import { beforeUrlChange, goto, ready } from "@roxi/routify";
  
  import DesktopNavLink from "./DesktopNavLink.svelte";
  import { onMount } from "svelte";

  let aboutBoundingBox: () => DOMRect;
  let eventsBoundingBox: () => DOMRect;
  let officersBoundingBox: () => DOMRect;
  let contactBoundingBox: () => DOMRect;

  const routes = [ "index", "events", "officers", "contact" ];
  const routeLabelLUT = {
    "index": "About",
    "events": "Events",
    "officers": "Officers",
    "contact": "Contact"
  }
  const routeBoundingBoxLUT = {
    "index": aboutBoundingBox,
    "events": eventsBoundingBox,
    "officers": officersBoundingBox,
    "contact": contactBoundingBox
  }

  let navLinkContainer: HTMLDivElement;

  let selectionLeft = 9;
  let selectionTop = 11;
  let selectionWidth = 39;
  let readyToRender = false;

  /**
   * Handles setting the position of the page indicator.
   * @param page The current route page information.
   */
  function handleNavIndicator(page: ClientNodeApi): void {
    const routifyRoute = page.path.split("/")[1];
    const startingBoundingBox = routeBoundingBoxLUT[routifyRoute]();

    const containerBoundingBox = navLinkContainer.getBoundingClientRect();
    selectionTop = startingBoundingBox.top - containerBoundingBox.top;
    selectionLeft = startingBoundingBox.left - containerBoundingBox.left;
    selectionWidth = startingBoundingBox.right - startingBoundingBox.left - 20;
  }

  $beforeUrlChange((_, route: ClientNodeApi) => {
    handleNavIndicator(route);
    return true;
  });

  onMount(() => {
    const route = window.location.pathname.split("/")[1]
    const routifyRoute = route === "" ? "index" : route;

    handleNavIndicator({ path: `/${routifyRoute}` } as ClientNodeApi);
    setTimeout(() => {
      readyToRender = true;
      $ready();
    }, 0);
  });
</script>

<div class="header">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="home-container" on:click={() => { $goto("./index"); }} >
    <img src="/images/logo.svg" alt="logo" height="30" width="30" />
  </div>
  <div class="navigation" bind:this={navLinkContainer}>
    <div class="nav-link-container">
      {#each routes as route}
        <DesktopNavLink label={routeLabelLUT[route]} route="./{route}" bind:getButtonBoundingBox={routeBoundingBoxLUT[route]} />
      {/each}
    </div>
    <div class="selection-indicator" style="top: {selectionTop}px; left: {selectionLeft}px; width: {selectionWidth}px" class:transition={readyToRender} />
  </div>
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
