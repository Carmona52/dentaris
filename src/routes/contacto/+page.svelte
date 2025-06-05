export const prerender = true;
<main>
    <form name="contact" method="POST" data-netlify="true" action="/">
        <input type="hidden" name="contact" value="contact">
        <div class="relativa isolate px-6 py-8 lg:px-1 space-y-1 mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 lg:-mt-10 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-1">
            <h1 class="text-base/7 text-gray-900 text-xl ">Revoluciona tu clínica dental Ahora <span class="font-bold">¡Gratis!</span></h1>
            <!--            <div class="border-b border-gray-900/10 pb-12">-->
            <!--                <a-->

            <!--                        href="https://wa.me/522381512970?text=Hola%20Dentaris,%20tengo%20una%20consulta"-->
            <!--                        target="_blank"-->
            <!--                        rel="noopener noreferrer"-->
            <!--                        class="flex justify-center items-center gap-2 px-4 py-2 h-12 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] rounded-md shadow-sm transition-colors"-->
            <!--                >-->
            <!--                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">-->
            <!--                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29 3.617c-.545 1.514-1.656 2.812-3.172 3.402-1.516.59-3.14.381-3.93-.475-.198-.223-.347-.52-.434-.843-.086-.322-.173-.966-.099-1.368.075-.397.322-.694.57-.843.198-.124.446-.198.694-.198.198 0 .322.025.446.05.124.025.272.05.347.074.173.05.273.1.421.175.149.074.298.148.347.148.05 0 .099-.074.223-.273.124-.198.595-.694.793-.893.174-.173.347-.223.52-.223.149 0 .298.05.446.148.149.1.297.222.397.347.1.124.174.272.248.421.074.149.124.273.198.397.074.124.149.26.124.397-.025.124-.05.273-.124.421-.075.149-.174.273-.248.397"/>-->
            <!--                    </svg>-->
            <!--                    Envíanos un WhatsApp-->
            <!--                </a>-->
            <!--            </div>-->
            <div class="border-b border-gray-900/10 pb-12">

                <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div class="sm:col-span-full">
                        <label for="first-name" class="block text-sm/6 font-medium text-gray-900">Nombre <span class="text-red-600">*</span></label>
                        <div class="mt-2">
                            <input type="text" name="first-name" id="first-name" required
                                   class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                        </div>
                    </div>

                    <div class="sm:col-span-full">
                        <label for="email" class="block text-sm/6 font-medium text-gray-900">Correo Electrónico <span class="text-red-600">*</span></label>
                        <div class="mt-2">
                            <input id="email" name="email" type="email" required
                                   class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                        </div>
                    </div>

                    <div class="col-span-full">
                        <label for="street-address" class="block text-sm/6 font-medium text-gray-900">Dinos lo que necesitas<span class="text-red-600">*</span></label>
                        <div class="mt-2">
                        <textarea name="body" placeholder='Escribe lo que necesites' required
                                  class="block bg-white rounded border text-gray-900 leading-normal resize-none w-full h-35 py-2 px-3 font-medium outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:-outline-offset-2 focus:outline-indigo-600"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" onclick={()=> window.location.href="/"}
                        class="cancel-btn w-2xs px-3 py-2 text-sm font-semibold ">No quiero unirme
                </button>
                <button type="submit"
                        class="w-2xs rounded-md principal-btn px-3 py-2 text-sm font-semibold shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    ¡Únete Gratis!
                </button>
            </div>
        </div>
    </form>
</main>
