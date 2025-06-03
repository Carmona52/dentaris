<script>
    import Pricing from "$lib/components/pricing.svelte";
    import Main from "$lib/components/main.svelte";
    import Tools from "$lib/components/tools.svelte";
    import Information from "$lib/components/info.svelte"
    import ContactWays from "$lib/components/contactWays.svelte";
</script>

<main class="flex flex-col content-center justify-center items-center w-full">
    <Main></Main>
    <Tools></Tools>
    <Information></Information>
   <Pricing></Pricing>
    <ContactWays/>
</main>