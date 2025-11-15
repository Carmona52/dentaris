<script>
    import { sendEvent } from "$lib/analytics";
</script>

<a
    href="/contacto"
    on:click={() =>
        sendEvent({
            action: "click",
            category: "Boton",
            label: "Empieza Gratis Ahora",
            value: 1,
        })}
    class="inline-block px-6 sm:px-8 md:px-10 py-4 sm:py-5 text-lg sm:text-xl bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all font-bold shadow-xl hover:scale-105 active:scale-95"
    aria-label="Empieza gratis ahora con Dentaris"
>
    ¡Empieza Gratis Ahora! 🚀
</a>
