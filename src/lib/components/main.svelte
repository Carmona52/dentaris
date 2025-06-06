<script>
    import {sendEvent} from '$lib/analytics';
</script>

<main>
    <section class="w-full bg-blueGray-50 lg:px-15 sm:px-5 sm:-mt-5">
        <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div class="absolute top-0 w-full h-full bg-center bg-cover rounded-t-2xl"
                 style="background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');">
                <span id="blackOverlay" class="w-full h-full absolute opacity-60 bg-black rounded-t-2xl"></span>
            </div>
            <div class="container relative mx-auto text-center px-4">
                <div class="flex flex-col items-center justify-center w-full">
                    <div class="w-full lg:w-7xl px-4 text-center">
                        <div class="mx-auto max-w-4xl">
                            <h1 class="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl drop-shadow-lg">
                                ¿Cansado del desorden en tu clínica dental?
                            </h1>
                            <p class="mt-4 text-base sm:text-lg md:text-xl text-white mx-auto max-w-xl sm:max-w-2xl leading-relaxed">
                                Con <span class="font-bold ">Dentaris</span> Digitaliza tus procesos, elimina el caos
                                administrativo y ofrece un mejor servicio a tus pacientes, gestiona tu
                                clínica de forma eficiente con una plataforma pensada especialmente para odontólogos.
                            </p>
                            <div class="mt-6">
                                <a href="/contacto"
                                   on:click={() => {sendEvent({action: 'click', category: 'Boton', label: 'Empieza Gratis Ahora'})}}
                                   class="inline-block px-8 py-4 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-bold w-full md:w-auto text-center">
                                    🚀 ¡Empieza Gratis Ahora!
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>