<script lang="ts">

    import Navbar from '$lib/components/navbar.svelte';
    import Footer from '$lib/components/footer.svelte';

    import '../app.css';
	
	let { children } = $props();
</script>

<div class="min-h-screen flex-col items-center w-full scroll-smooth">
    <Navbar/>
    <main>
        {@render children()}
    </main>
    <Footer/>
</div>


