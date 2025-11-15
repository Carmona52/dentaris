<script lang="ts">
    // ... (tu script de TS no necesita cambios) ...

    const icons = {
        agenda: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="18" rx="2" stroke-width="2"/><line x1="3" y1="10" x2="21" y2="10" stroke-width="2"/><line x1="8" y1="2" x2="8" y2="6" stroke-width="2"/><line x1="16" y1="2" x2="16" y2="6" stroke-width="2"/></svg>`,
        historial: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M3 7a2 2 0 012-2h5l2 2h9a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/></svg>`,
        recetas: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M6 2h12v6H6V2zM6 8h12v14H6V8z"/><line x1="9" y1="12" x2="15" y2="12" stroke-width="2"/><line x1="9" y1="16" x2="13" y2="16" stroke-width="2"/></svg>`,
        tratamiento: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M12 2c2.5 0 4 2 4 4.5S14.5 11 12 11s-4-2.5-4-4.5S9.5 2 12 2z"/><path stroke-width="2" d="M12 11v11"/></svg>`,
        inventario: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="4" width="18" height="16" rx="2" stroke-width="2"/><line x1="3" y1="10" x2="21" y2="10" stroke-width="2"/><line x1="9" y1="14" x2="15" y2="14" stroke-width="2"/></svg>`,
        tickets: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-width="2" d="M4 4h16v4a2 2 0 01-2 2h-2v4h2a2 2 0 012 2v4H4v-4a2 2 0 012-2h2v-4H6a2 2 0 01-2-2V4z"/></svg>`
    };

    interface Feature {
        id: number;
        icon: string;
        title: string;
        description: string;
    }

    const data: Feature[] = [
        {
            id: 1,
            icon: icons.agenda,
            title: "Agenda de Citas",
            description: "Organiza y gestiona las citas, configura recordatorios automáticos y reduce ausencias."
        },
        {
            id: 2,
            icon: icons.historial,
            title: "Historial Médico",
            description: "Accede al expediente clínico, guarda diagnósticos, tratamientos previos y recomendaciones futuras."
        },
        {
            id: 3,
            icon: icons.recetas,
            title: "Impresión de Recetas",
            description: "Genera y personaliza recetas médicas con facilidad. Optimiza la comunicación entre odontólogos y pacientes."
        },
        {
            id: 4,
            icon: icons.tratamiento,
            title: "Continuidad del Tratamiento",
            description: "Facilita el seguimiento de los tratamientos de los pacientes, asegurando la correcta evolución de su salud bucal."
        },
        {
            id: 5,
            icon: icons.inventario,
            title: "Control de Inventario",
            description: "Administra el stock de materiales y medicamentos. Evita faltantes y optimiza la gestión de recursos en la clínica."
        },
        {
            id: 6,
            icon: icons.tickets,
            title: "Impresión y Gestión de Tickets",
            description: "Genera tickets de pago para los pacientes, facilitando la administración financiera."
        }
    ];
</script>

<main>
    <section id="Caracteristicas" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">

        <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
                Características Principales
            </h2>
            <p class="mt-3 text-base sm:text-lg md:text-xl text-blue-800">
                Todo lo que necesitas para gestionar tu clínica en un solo lugar.
            </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each data as item (item.id)}
                <div class="rounded-3xl bg-white p-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                    <div>
                        <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl mb-4 flex items-center justify-center">
                            {@html item.icon}
                        </div>
                        <h3 class="text-xl mb-2 text-blue-500 font-bold">{item.title}</h3>
                        <p class="mb-4">{item.description}</p>
                    </div>
                </div>
            {/each}
        </div>

        <div class="text-center mt-12">
            <button class="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg transform hover:-translate-y-1 transition duration-400 cursor-pointer text-base sm:text-lg w-full sm:w-auto" onclick={()=> window.location.href='/servicios'}>
                Conoce más sobre nuestros servicios
            </button>
        </div>

    </section>
</main>