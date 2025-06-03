<script lang="ts">
    const data = [
        {
            id: 1,
            icon: "fa-solid fa-calendar-check text-4xl mt-5",
            title: "Agenda de Citas",
            description: "Organiza y gestiona las citas de los pacientes de manera eficiente. Configura recordatorios automáticos y reduce ausencias."
        },
        {
            id: 2,
            icon: "fa-sharp-duotone fa-solid fa-laptop-medical text-4xl mt-5",
            title: "Historial Médico",
            description: "Accede al expediente clínico de cada paciente en un solo lugar. Guarda diagnósticos, tratamientos previos y recomendaciones futuras."
        },
        {
            id: 3,
            icon: "fa-sharp-duotone fa-solid fa-person-circle-check text-4xl mt-5",
            title: "Continuidad del Tratamiento",
            description: "Facilita el seguimiento de los tratamientos de los pacientes, asegurando la correcta evolución y mantenimiento de su salud bucal."
        },
        {
            id: 4,
            icon: "fa-solid fa-file-medical text-4xl mt-5",
            title: "Impresión de Recetas",
            description: "Genera y personaliza recetas médicas con facilidad. Optimiza la comunicación entre odontólogos y pacientes."
        },
        {
            id: 5,
            icon: "fa-sharp-duotone fa-solid fa-cart-flatbed text-4xl mt-5",
            title: "Control de Inventario",
            description: "Administra el stock de materiales y medicamentos. Evita faltantes y optimiza la gestión de recursos en la clínica."
        },
        {
            id: 6,
            icon: "fa-sharp-duotone fa-solid fa-file-invoice-dollar text-4xl mt-5",
            title: "Impresión y Gestión de Tickets",
            description: "Genera facturas y tickets de pago para los pacientes. Facilita la administración financiera de la clínica."
        }
    ];

</script>

<main>
    <p class="text-center text-gray-600 -mb-5" >Características Principales</p>
    <h1 class="text-center my-5">Herramientas que optimizan tu negocio dental</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 w-full px-5 text-center">
        {#each data as data (data.id)}
            <div class="flex flex-col items-center max-w-sm rounded overflow-hidden shadow-lg text-center w-90 bg-white h-60 mx-auto md:mx-5">
                <i class={data.icon} style="color:#3a20fe"></i>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{data.title}</div>
                    <p class="text-gray-700 text-base">{data.description}</p>
                </div>
            </div>
        {/each}
    </div>

</main>
