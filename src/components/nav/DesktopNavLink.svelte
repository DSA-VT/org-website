<script lang="ts">
	import { isActive, url } from "@roxi/routify";
  import { onMount } from "svelte";
  
  export let label: string;
  export let route: string;

  let navBtnElem: HTMLAnchorElement;

  export let getButtonBoundingBox = (): DOMRect => {
    return navBtnElem.getBoundingClientRect();
  }

  onMount(() => {
    getButtonBoundingBox = (): DOMRect => {
      return navBtnElem.getBoundingClientRect();
    }
  });
</script>

<div class="nav-link">
  <a href={$url(route)} class:rendered={$isActive(route)} class="nav-btn" bind:this={navBtnElem}>
    <div class="label">{label}</div>
  </a>
</div>

<style>
  .nav-link {
		height: 100%;
		padding: 0px 9px;

		display: flex;
		flex-direction: column;
		justify-content: center;
    align-items: center;

    cursor: pointer;
	}

	.nav-btn {
		color: var(--font-color);
		text-decoration: none;

    height: 24px;
    padding: 2px 10px;
    border-radius: 50px;

    
		display: flex;
		flex-direction: column;
		justify-content: center;
    align-items: center;
    
    cursor: pointer;
	}
</style>
