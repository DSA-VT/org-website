<script lang="ts">
	import { isActive, url } from "@roxi/routify";
  import { onMount } from "svelte";
  
  export let label: string;
  export let route: string;

  export let mobileMenuIsOpen: boolean;

  let navBtnElem: HTMLAnchorElement;

  export let getButtonBoundingBox = (): DOMRect => {
    return navBtnElem.getBoundingClientRect();
  }

  function clickHandler() {
    mobileMenuIsOpen = false;
  }

  onMount(() => {
    getButtonBoundingBox = (): DOMRect => {
      return navBtnElem.getBoundingClientRect();
    }
  });
</script>

<div class="nav-link" class:rendered={$isActive(route)}>
  <a href={$url(route)} class="nav-btn" on:click={clickHandler} bind:this={navBtnElem}>{label}</a>
</div>

<style>
	.nav-link {
		height: 40px;
		width: 150px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.nav-link .nav-btn {
		color: var(--font-color);
		text-decoration: none;
		margin: 7px 0px;
	}
	.nav-link .nav-btn:focus {
		color: var(--font-color);
	}
	.rendered {
		background-color: var(--fore-accent);
	}
	.nav-link:hover {
		cursor: pointer;
	}
</style>
