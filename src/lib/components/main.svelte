<main>
    <section class="w-screen bg-blueGray-50 lg:px-15 sm:px-5">
        <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div class="absolute top-0 w-full h-full bg-center bg-cover rounded-t-2xl"
                 style="background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');">
                <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black rounded-t-2xl"></span>
            </div>
            <div class="container relative mx-auto text-center px-4">
                <div class="flex flex-col items-center justify-center w-full">
                    <div class="w-full lg:w-7xl px-4 text-center">
                        <div class="mx-auto max-w-4xl">
                            <h1 class="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl drop-shadow-lg">
                                TRANSFORMA TU CLÍNICA DENTAL CON NOSOTROS
                            </h1>
                            <p class="mt-4 text-base sm:text-lg md:text-xl text-white mx-auto max-w-xl sm:max-w-2xl leading-relaxed">
                                En <span class="font-bold ">Dentaris</span>, desarrollamos la solución tecnológica integral
                                para modernizar tu consultorio. Digitaliza historiales médicos, optimiza la gestión de citas
                                y potencia el diagnóstico con nuestra plataforma especializada para profesionales dentales.
                            </p>
                            <div class="mt-6">
                                <a href="/contacto"
                                   on:click={()=> gtag('event', 'boton_clic', { 'event_category': 'Empieza Gratis', 'event_label': 'Botón X' })}
                                   class="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-bold">
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