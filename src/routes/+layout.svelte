<script lang="ts">
  import { onMount } from "svelte";
  import Movile from "$lib/components/NavBars/Movile.svelte";
  import Desktop from "$lib/components/NavBars/Desktop.svelte";
  import Footer from "$lib/components/Secciones/footer.svelte";
  import "../app.css";

  let { children } = $props();

  let isMobile = true;

  const checkDevice = () => {
    isMobile = window.innerWidth > 768;
  };

  onMount(() => {
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  });
</script>

<div>
  {#if isMobile}
    <Movile />
  {:else}
    <Desktop />
  {/if}

  <main>
    {@render children()}
  </main>

  <Footer />
</div>
