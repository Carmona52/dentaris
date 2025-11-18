<script lang="ts">
    import { onMount } from "svelte";

    const navItems = [
        { id: 1, name: "Inicio", href: "/" },
        { id: 2, name: "Agendar Cita", href: "/contacto" },
        { id: 3, name: "Nosotros", href: "/nosotros" },
    ];

    let isOpen = false;
    let isScrolled = false;

    onMount(() => {
        window.addEventListener("scroll", () => {
            isScrolled = window.scrollY > 10;
        });
    });
</script>

<header
    class:bg-primary-dark={isScrolled}
    class="z-50 transition-colors duration-300 bg-primary-dark/90 backdrop-blur-sm"
>
    <!-- Reducimos py de 3 a 2 -->
    <div class="container mx-auto px-4 py-2">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <a href="/" class="flex items-center">
                <img
                    src="images/LogoBackRec.png"
                    alt="Logo"
                    class="h-12 sm:h-14 -mx-1"
                />
            </a>

            <!-- Nav Desktop -->
            <nav class="hidden sm:flex justify-end ml-auto">
                {#each navItems as item (item.id)}
                    <a
                        href={item.href}
                        class="hidden md:block bg-accent-turquoise hover:bg-[#96DFE4] font-semibold px-3 py-1.5 rounded-lg transition-colors mx-1"
                    >
                        {item.name}
                    </a>
                {/each}
            </nav>

            <!-- Botón hamburguesa -->
            <button
                on:click={() => (isOpen = !isOpen)}
                class="md:hidden text-text-light focus:outline-none"
                aria-label="Menú"
            >
                {#if isOpen}
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                {:else}
                    <svg
                        class="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                {/if}
            </button>
        </div>

        <!-- Menú móvil -->
        {#if isOpen}
            <!-- Quitamos mt-4 pb-4 -> mt-2 pb-2 -->
            <div class="md:hidden mt-2 pb-2 space-y-2">
                {#each navItems as item (item.id)}
                    <a
                        on:click={() => (isOpen = !isOpen)}
                        href={item.href}
                        class="block py-1.5 text-text-light hover:text-accent-turquoise transition-colors"
                    >
                        {item.name}
                    </a>
                {/each}
                <a
                    on:click={() => (isOpen = !isOpen)}
                    href="/contacto"
                    class="block mt-3 bg-accent-turquoise text-text-light text-center py-2 rounded-lg"
                >
                    Agendar cita
                </a>
            </div>
        {/if}
    </div>
</header>
