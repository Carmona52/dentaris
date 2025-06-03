<script>

    import contactData from '$lib/data/data.json'

    const links = [
        {id:1, name: "Inicio", href: "/"},
        {id:2, name: "Servicios", href: "/servicios"},
        {id:3, name: "Nosotros", href: "/nosotros"},
        {id:4, name: "Contacto", href: "/contacto"},
        {id:5, name: "Mapa de Sitio", href: "/mapadesitio"}
    ];

    const contactInfo = {
        phone: contactData["telefono"],
        email: contactData["email"],
        address: contactData["direccion"],
    };

    const socialLinks = [
        {id:1, name: "Facebook", icon: "facebook", href: "#"},
        {id:2, name: "Instagram", icon: "instagram", href: "#"},
        {id:3, name: "X", icon: "twitter", href: "#"},
    ];
</script>

<footer class="bg-primary-dark text-text-light py-8 px-4">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
            <img src="images/LogoBackRec.png" alt="Logo" class="h-25 -mx-5">
            <p class="text-sm opacity-80">
                Cuidamos de tu sonrisa con profesionalidad y calidez.
            </p>
        </div>

        <div>
            <h3 class="text-lg font-semibold mb-4">Enlaces</h3>
            <ul class="space-y-2">
                {#each links as link (link.id)}
                    <li>
                        <a
                                href={link.href}
                                class="hover:text-accent-turquoise transition-colors"
                        >
                            {link.name}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>

        <div>
            <h3 class="text-lg font-semibold mb-4">Contacto</h3>
            <address class="not-italic space-y-2 text-sm">
                <p>📞 {contactInfo.phone}</p>
                <p>✉️ {contactInfo.email}</p>
                <p>📍 {contactInfo.address}</p>
            </address>

        </div>
    </div>

    <div class="container mx-auto mt-8 pt-4 border-t border-opacity-20 text-center text-sm">
        <p>© {new Date().getFullYear()} Dentaris. Todos los derechos reservados.</p>
    </div>
</footer>