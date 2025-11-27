<script lang="ts">
    const services = [
        {id: 1, name: "Agenda Digital"},
        {id: 2, name: "Control de Pacientes"},
        {id: 3, name: "Historial Médico"},
        {id: 4, name: "Odontograma"},
        {id: 5, name: "Control de Inventario"},
        {id: 6, name: "Administración financiera"},
        {id: 7, name: "Control de Clínicas"}
    ];
</script>

<section class="relative isolate px-4 py-5 lg:px-8" id="Precios">
    <div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
        <div class="mx-auto aspect-[1155/678] w-[1155px] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
             style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
        </div>
    </div>

    <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 my-4">
            Planes Dentaris
        </h2>
        <p class="mt-3 text-base sm:text-lg md:text-xl text-blue-800">
            Elige el Plan Perfecto para tu Clínica
        </p>
        <p class="my-2 text-lg text-gray-600">Gratis Ahora</p>
    </div>

    <div class="mx-auto max-w-5xl sm:mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div class="rounded-2xl bg-white/60 p-6 sm:p-8 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div>
                    <h3 class="text-lg font-semibold text-blue-600">Paquete Básico</h3>
                    <p class="mt-4 flex items-baseline gap-x-2">
                        <span class="text-4xl font-bold text-gray-900">$199 MXN</span>
                    </p>
                    <p class="mt-4 text-gray-600 text-sm">Perfecto para pequeños negocios</p>
                    <ul class="mt-6 space-y-3 text-sm text-gray-700">
                        {#each services.slice(0, 3) as service (service.id)}
                            <li class="flex items-center gap-x-2">
                                <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                          clip-rule="evenodd"/>
                                </svg>
                                {service.name}
                            </li>
                        {/each}
                    </ul>
                </div>
                <div class="align-bottom">
                    <button class="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                            on:click={() => window.location.href = "/contacto"}>
                        Contratar
                    </button>
                </div>
            </div>

            <div class="rounded-2xl bg-white/60 p-6 sm:p-8 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition">
                <h3 class="text-lg font-semibold text-blue-600">Paquete Completo</h3>
                <p class="mt-4 flex items-baseline gap-x-2">
                    <span class="text-4xl font-bold text-gray-900">$299 MXN</span>
                </p>
                <p class="mt-4 text-gray-600 text-sm">Ideal para clínicas con mayor demanda</p>
                <ul class="mt-6 space-y-3 text-sm text-gray-700">
                    {#each services as service (service.id)}
                        <li class="flex items-center gap-x-2">
                            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd"
                                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                      clip-rule="evenodd"/>
                            </svg>
                            {service.name}
                        </li>
                    {/each}
                </ul>
                <button class="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                        on:click={() => window.location.href = "/contacto"}>
                    Contratar
                </button>
            </div>
        </div>

        <div class="mt-8 flex justify-center">
            <div class="rounded-2xl bg-white/60 p-6 sm:p-8 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition w-full md:max-w-xl">
                <h3 class="text-lg font-semibold text-blue-600 text-center">Personalizado</h3>
                <p class="mt-4 text-sm text-gray-600 text-center">
                    ¿Tu clínica tiene necesidades específicas? Podemos crear un plan a tu medida.
                </p>
                <button class="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                        on:click={() => window.location.href = "/contacto"}>
                    Solicitar propuesta
                </button>
            </div>
        </div>
    </div>
</section>
