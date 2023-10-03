<script lang="ts">
	import MediaQuery from "../components/utils/MediaQuery.svelte";

  import DesktopNav from "../components/nav/DesktopNav.svelte";
  import MobileNav from "../components/nav/MobileNav.svelte";
  import MobileHeader from "../components/nav/MobileHeader.svelte";
  import { metatags, page } from "@roxi/routify";
  import { BASE_URL } from "../stores";

  let mobileNavOpen = false;

  $: metatags.title = $page.meta["title"];
  $: metatags["twitter:title"] = $page.meta["title"];
  $: metatags.description = $page.meta["description"];
  $: metatags["twitter:description"] = $page.meta["description"];
  $: metatags.url = BASE_URL + $page.path;
</script>

<div class="layout">
	<MediaQuery query="(orientation:landscape)" let:matches>
    {#if matches}
      <DesktopNav />
    {:else}
      <MobileHeader bind:mobileNavOpen={mobileNavOpen} />
      <MobileNav bind:showing={mobileNavOpen} />
    {/if}
  </MediaQuery>
  <div class="content-wrapper" class:menu-hidden={!mobileNavOpen}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="content-body" on:click={() => mobileNavOpen = false}>
      <slot />
    </div>
  </div>
	<div class="rights">© DSA @ VT {new Date().getFullYear()}</div>
</div>

<style>
	.layout {
		width: 100vw;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		overflow: hidden;
	}

	.content-wrapper {
		z-index: 2;
		overflow-x: hidden;
		height: calc(100% - 50px);
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.content-wrapper .content-body {
		position: relative;
		height: 100%;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
  
	.rights {
		position: absolute;
		right: 7px;
		bottom: 7px;
		font-size: 10px;
		opacity: 0.4;

		z-index: 1000;
	}
</style>
