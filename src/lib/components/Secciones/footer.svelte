<script>
    import contactData from '$lib/data/data.json'

    const links = [
        {id:1, name: "Inicio", href: "/"},
        {id:3, name: "Nosotros", href: "/nosotros"},
        {id:4, name: "Contacto", href: "/contacto"},
        {id:5, name: "Servicios", href: "/servicios"},
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

<footer class="bg-primary-dark text-text-light py-8 px-4" id="FooterDentaris">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        <div>
            <img src="images/LogoBackRec.png" alt="Logo" class="h-24 mx-auto md:mx-0">
            <p class="text-sm opacity-80 mt-2">
                Revolucionando la gestión dental con tecnología
            </p>

<!--            <div class="flex justify-center md:justify-start space-x-4 mt-4">-->
<!--                {#each socialLinks as social (social.id)}-->
<!--                    <a href={social.href}-->
<!--                       aria-label={social.name}-->
<!--                       class="hover:text-accent-turquoise transition-colors"-->
<!--                       target="_blank"-->
<!--                       rel="noopener noreferrer">-->

<!--                        <span class="capitalize">{social.icon}</span>-->
<!--                    </a>-->
<!--                {/each}-->
<!--            </div>-->
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
        <p>© {new Date().getFullYear()} <span class="font-bold text-blue-500">Dentaris.</span> Todos los derechos reservados.</p>
    </div>
</footer>