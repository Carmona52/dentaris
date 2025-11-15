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
    })
</script>

<header class="z-50 transition-colors duration-300 bg-primary-dark/90 backdrop-blur-sm">
    <div class="container mx-auto px-4 py-2">
        <div class="flex items-center justify-between">
            <a href="/" class="flex items-center">
                <img
                    src="images/LogoBackRec.png"
                    alt="Logo"
                    class="h-12 sm:h-14 -mx-1"
                />
            </a>

            <nav class="hidden sm:flex justify-end ml-auto">
                {#each navItems as item (item.id)}
                    <a
                        href={item.href}
                        class="hidden md:block bg-accent-turquoise hover:bg-[#96DFE4] font-semibold px-3 py-1.5 rounded-lg transition-colors mx-1">
                        {item.name}
                    </a>
                {/each}
            </nav>
        </div>
    </div>
</header>
