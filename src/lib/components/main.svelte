<section class="w-screen bg-blueGray-50 lg:px-15 sm:px-5">
    <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div class="absolute top-0 w-full h-full bg-center bg-cover rounded-t-2xl"
             style=" background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80');">
            <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black rounded-t-2xl"></span>
        </div>
        <div class="container relative mx-auto">
            <div class="flex items-center justify-center w-full">
                <div class="w-full lg:w-7xl px-4 text-center">
                    <div class="mx-auto">
                        <h1 class="text-white font-semibold text-5xl">
                            TU HISTORIA INICIA CON NOSOTROS
                        </h1>
                        <p class="mt-4 text-lg text-white mx-auto max-w-3xl"> <!-- Añadido max-w-3xl para control de ancho -->
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie mauris mi, mattis
                            mollis leo faucibus quis. Integer pellentesque porttitor lacus nec sodales. Integer
                            facilisis ultricies ultrices. Aliquam erat volutpat.
                        </p>
                        <br>

                        <button onclick={()=>window.location.href="#images"} class="principal-btn w-2xs sm:w-xs">SABER MÁS</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
             style="transform: translateZ(0px)">
            <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg"
                 preserveAspectRatio="none" viewBox="0 0 2560 100" x="0" y="0">
                <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>
    </div>
</section>

<section class="pb-10 bg-blueGray-200 -mt-24">
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap">

            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div class="px-4 py-5 flex-auto">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                            <i class="fas fa-award"></i>
                        </div>
                        <h6 class="text-xl font-semibold">Agencia Premiada</h6>
                        <p class="mt-2 mb-4 text-blueGray-500">
                            Divide los detalles sobre tu producto o el trabajo de tu agencia en partes.
                            Un párrafo describiendo una característica será suficiente.
                        </p>

                    </div>
                </div>
            </div>

            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div class="px-4 py-5 flex-auto">
                        <div class="text-black p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                            <i class="fas fa-retweet"></i>
                        </div>
                        <h6 class="text-xl font-semibold">Revisiones Gratuitas</h6>
                        <p class="mt-2 mb-4 text-blueGray-500">
                            Mantén a tu usuario interesado proporcionando información significativa.
                            Recuerda que, a estas alturas, el usuario está curioso.
                        </p>

                    </div>
                </div>
            </div>

            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div class="px-4 py-5 flex-auto">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                            <i class="fas fa-fingerprint"></i>
                        </div>
                        <h6 class="text-xl font-semibold">Empresa Verificada</h6>
                        <p class="mt-2 mb-4 text-blueGray-500">
                            Escribe unas líneas sobre cada una. Un párrafo describiendo una
                            característica será suficiente. ¡Mantén a tu usuario interesado!
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
