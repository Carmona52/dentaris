<script lang="ts">
    import {onMount} from 'svelte';

    const navItems = [
        {id: 1, name: "Inicio", href: "/"},
        {id: 3, name: "Nosotros", href: "/nosotros"}
    ];


    let isOpen = false;
    let isScrolled = false;

    onMount(() => {
        window.addEventListener('scroll', () => {
            isScrolled = window.scrollY > 10;
        });
    });
</script>

<header
        class:bg-primary-dark={isScrolled}
        class="w-full z-50 transition-colors duration-300 bg-primary-dark/90 backdrop-blur-sm">
    <div class="container mx-auto px-4 py-3">

        <div class="flex items-center">
            <div>
                <img src="images/LogoBackRec.png" alt="Logo" class="h-25 -mx-2" on:click={() => (window.location.href="/")}>
            </div>
            <nav class="flex md:flex justify-end space-x-8 ml-auto sm:ml-auto">
                {#each navItems as item (item.id)}
                    <a
                            href={item.href}
                            class="text-text-light hover:text-accent-turquoise transition-colors font-medium"
                    >
                        {item.name}
                    </a>
                {/each}
            </nav>

            <a
                    href="/contacto"
                    class=" hidden md:block bg-accent-turquoise hover:bg-[#96DFE4] text-text-light px-4 py-2 rounded-lg transition-colors mx-4">
                Agendar cita
            </a>

            <button
                    on:click={() => (isOpen = !isOpen)}
                    class="md:hidden text-text-light focus:outline-none"
                    aria-label="Menú"
            >
                {#if isOpen}
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                {:else}
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                {/if}
            </button>
        </div>

        {#if isOpen}
            <div class="md:hidden mt-4 pb-4 space-y-3">
                {#each navItems as item (item.id)}
                    <a
                            on:click={() => (isOpen = !isOpen)}
                            href={item.href}
                            class="block py-2 text-text-light hover:text-accent-turquoise transition-colors"
                    >
                        {item.name}
                    </a>
                {/each}
                <a
                        on:click={() => (isOpen = !isOpen)}
                        href="/contacto"
                        class="block mt-4 bg-accent-turquoise text-text-light text-center py-2 rounded-lg"
                >
                    Agendar cita
                </a>
            </div>
        {/if}
    </div>
</header>

