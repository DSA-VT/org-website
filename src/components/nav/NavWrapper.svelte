<script lang="ts" context="module">
  let desktopAboutBoundingBox: () => DOMRect;
  let desktopEventsBoundingBox: () => DOMRect;
  let desktopOfficersBoundingBox: () => DOMRect;
  let desktopContactBoundingBox: () => DOMRect;

  let mobileAboutBoundingBox: () => DOMRect;
  let mobileEventsBoundingBox: () => DOMRect;
  let mobileOfficersBoundingBox: () => DOMRect;
  let mobileContactBoundingBox: () => DOMRect;

  export const desktopRouteBoundingBoxLUT = {
    "index": desktopAboutBoundingBox,
    "events": desktopEventsBoundingBox,
    "officers": desktopOfficersBoundingBox,
    "contact": desktopContactBoundingBox
  }

  export const mobileRouteBoundingBoxLUT = {
    "index": mobileAboutBoundingBox,
    "events": mobileEventsBoundingBox,
    "officers": mobileOfficersBoundingBox,
    "contact": mobileContactBoundingBox
  }
</script>

<script lang="ts">
  import { beforeUrlChange, ready } from "@roxi/routify";
  import { onMount } from "svelte";

  export let navLinkContainer: HTMLDivElement;
  export let isDesktop: boolean;

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

    const routeBoundingBoxLUT = isDesktop ? desktopRouteBoundingBoxLUT : mobileRouteBoundingBoxLUT;

    if (Object.keys(routeBoundingBoxLUT).includes(routifyRoute) && navLinkContainer) {
      const startingBoundingBox = routeBoundingBoxLUT[routifyRoute]();

      const containerBoundingBox = navLinkContainer.getBoundingClientRect();
      selectionTop = startingBoundingBox.top - containerBoundingBox.top;
      selectionLeft = startingBoundingBox.left - containerBoundingBox.left;
      selectionWidth = startingBoundingBox.right - startingBoundingBox.left - 20;
    }
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

<slot {selectionLeft} {selectionTop} {selectionWidth} {readyToRender} />
