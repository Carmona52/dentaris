<script lang="ts">
    const data = [
        {
            id: 1,
            image: "/icons/cita-med.svg",
            title: "Agenda de Citas",
            description: "Organiza y gestiona las citas, configura recordatorios automáticos y reduce ausencias."
        },
        {
            id: 2,
            image: "/icons/historial-medico.svg",
            title: "Historial Médico",
            description: "Accede al expediente clínico , guarda diagnósticos, tratamientos previos y recomendaciones futuras."
        },
        {
            id: 3,
            image: "/icons/prescripcion.svg",
            title: "Continuidad del Tratamiento",
            description: "Facilita el seguimiento de los tratamientos de los pacientes, asegurando la correcta evolución de su salud bucal."
        },
        {
            id: 4,
            image: "/icons/cita-med.svg",
            title: "Impresión de Recetas",
            description: "Genera y personaliza recetas médicas con facilidad. Optimiza la comunicación entre odontólogos y pacientes."
        },
        {
            id: 5,
            image: "/icons/inventario.svg",
            title: "Control de Inventario",
            description: "Administra el stock de materiales y medicamentos. Evita faltantes y optimiza la gestión de recursos en la clínica."
        },
        {
            id: 6,
            image: "/icons/cuenta.svg",
            title: "Impresión y Gestión de Tickets",
            description: "Genera tickets de pago para los pacientes. Facilitando la administración financiera."
        }
    ];

</script>

<main>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full px-5 text-center -mt-24">
        {#each data as data (data.id)}
            <div class="flex flex-col break-words relative items-center max-w-sm rounded overflow-hidden shadow-lg text-center w-full bg-white h-auto mx-auto md:mx-5 ">
                <img src={data.image} alt="Icono Cita medica" class="size-20 text-4xl mt-5"/>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{data.title}</div>
                    <p class="text-gray-700 text-base">{data.description}</p>
                </div>
            </div>
        {/each}
    </div>
</main>
