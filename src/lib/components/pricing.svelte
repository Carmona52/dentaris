<script lang="ts">

    const services = [
        {id: 1, name: "Agenda Digital"},
        {id: 2, name: "Control de Pacientes"},
        {id: 3, name: "Historial Médico"},
        {id: 4, name: "Odontograma"},
        {id: 5, name: "Control de Inventario"},
        {id:6, name:"Administración financiera"},
        {id: 7, name: "Control de Clínicas"}
    ];


</script>

<div class="relative isolate px-6 py-8 lg:px-1">
    <!--    <div class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">-->
    <!--        <div class="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"-->
    <!--             style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>-->
    <!--    </div>-->
    <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-base/7 font-semibold text-indigo-600">Pricing</h2>
        <p class="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">Elige la Opción
            Perfecta</p>
    </div>
    <div class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-3">

        <div class="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl">
            <h3 id="tier-hobby" class="text-base/7 font-semibold text-indigo-600">Paquete Básico</h3>
            <p class="mt-4 flex items-baseline gap-x-2">
                <span class="text-5xl font-semibold tracking-tight text-gray-900">$100</span>
                <span class="text-base text-gray-500">/mes</span>
            </p>
            <p class="mt-6 text-base/7 text-gray-600">Perfecto para pequeños negocios </p>
            <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
                {#each services.slice(0, 4) as service (service.id)}
                    <li class="flex gap-x-3">
                        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"
                             aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                  clip-rule="evenodd"/>
                        </svg>
                        {service.name}
                    </li>
                {/each}
            </ul>
            <button class="principal-btn block px-3.5 mt-8 text-center text-sm mx-auto md:w-1xs lg:w-50"
                    on:click={() => window.location.href = "/contacto"}>
                Contratar
            </button>


        </div>

        <div class="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:p-10 lg:mx-0 lg:rounded-bl-3xl">
            <h3 id="tier-hobby" class="text-base/7 font-semibold text-indigo-600">Paquete Completo</h3>
            <p class="mt-4 flex items-baseline gap-x-2">
                <span class="text-5xl font-semibold tracking-tight text-gray-900">$299</span>
                <span class="text-base text-gray-500">/mes</span>
            </p>
            <p class="mt-6 text-base/7 text-gray-600">Perfecto para grandes negocios con mayor necesidades</p>
            <ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600 sm:mt-10">
                {#each services as serviceName (serviceName.id)}
                    <li class="flex gap-x-3">
                        <svg class="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"
                             aria-hidden="true" data-slot="icon">
                            <path fill-rule="evenodd"
                                  d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                                  clip-rule="evenodd"/>
                        </svg>
                        {serviceName.name}
                    </li>
                {/each}

            </ul>
            <button class="principal-btn block px-3.5 mt-8 text-center text-sm mx-auto md:w-1xs lg:w-50"
                    on:click={() => window.location.href = "/contacto"}>
                Contratar
            </button>
        </div>

        <div class="rounded-3xl rounded-t-3xl bg-white/60 p-8 ring-1 ring-gray-900/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tl-none lg:rounded-bl-none lg:rounded-br-3xl">
            <h3 id="tier-hobby" class="text-center mx-auto text-base/7 font-semibold text-indigo-600">Personalizado</h3>

            <p class="text-center mx-auto mt-6 text-base/7 text-gray-600">No encuentras lo que necesitas, o tu negocio requiere una serie de funciones espcíficas? <br></p>

            <button class="principal-btn block px-3.5 mt-8 text-center text-sm mx-auto md:w-1xs lg:w-50"
                    on:click={() => window.location.href = "/contacto"}>
                Contratar
            </button>
        </div>
    </div>
</div>
