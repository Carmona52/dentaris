<script lang="ts">
    import {sendEvent} from "$lib/analytics";

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
            image: "/icons/receta-medica.svg",
            title: "Impresión de Recetas",
            description: "Genera y personaliza recetas médicas con facilidad. Optimiza la comunicación entre odontólogos y pacientes."
        },
        {
            id: 4,
            image: "/icons/prescripcion.svg",
            title: "Continuidad del Tratamiento",
            description: "Facilita el seguimiento de los tratamientos de los pacientes, asegurando la correcta evolución de su salud bucal."
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
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-5 text-center -mt-24">
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

    <div class="flex flex-col align-center justify-center m-auto my-8 max-w-screen-md px-6 py-8">
        <a href="/contacto"
           on:click={() => {sendEvent({action: 'click', category: 'Boton', label: 'Empieza Gratis Ahora'})}}
           class="inline-block px-8 py-4 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold md:w-auto text-center">
            🚀 ¡Empieza Gratis Ahora!
        </a>
    </div>


</main>
