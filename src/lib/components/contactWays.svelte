<!-- src/routes/contact/+page.svelte -->
<script>

    import contactData from '$lib/data/data.json';

    const contactInfo = {
        "email": contactData["email"],
        "phone": contactData["telefono"],
        "address": contactData["direccion"],
        "days": contactData["dias"],
        "hours": contactData["horario"]
    };
</script>

<div class=" py-6 px-4 sm:px-6 lg:px-12 w-x">
    <div class="max-w-3xl mx-auto text-center">
        <h1 class="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">CONTACTÁNOS</h1>
        Póngase en contacto con nosotros
        <div class="bg-blue-50 rounded-lg p-6 mb-12">
            <p class="text-gray-700 mb-6">
                ¿Tiene alguna pregunta o necesita ayuda? Estamos aquí para ayudarle.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Email -->
                <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="text-lg font-medium text-gray-900 mb-2">Escribenos</h3>
                    <p class="text-gray-600 mb-4">Envianos tus dudas o sugerencias al siguiente correo:</p>
                    <a
                            href={`mailto:${contactInfo.email}`}
                            class="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        {contactInfo.email}
                    </a>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <h3 class="text-lg font-medium text-gray-900 mb-2">Soporte Telefonico</h3>
                    <p class="text-gray-600">{contactInfo.days}</p>
                    <p class="text-gray-600 mb-4">{contactInfo.hours}</p>
                    <a
                            href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                            class="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fill-rule="evenodd"
                                  d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                                  clip-rule="evenodd"/>
                        </svg>
                        {contactInfo.phone}
                    </a>
                    <a
                            href="https://wa.me/522381512970?text=Hola%20Dentaris,%20tengo%20una%20consulta"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex justify-center items-center mt-2 gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] rounded-md shadow-sm transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-6.29 3.617c-.545 1.514-1.656 2.812-3.172 3.402-1.516.59-3.14.381-3.93-.475-.198-.223-.347-.52-.434-.843-.086-.322-.173-.966-.099-1.368.075-.397.322-.694.57-.843.198-.124.446-.198.694-.198.198 0 .322.025.446.05.124.025.272.05.347.074.173.05.273.1.421.175.149.074.298.148.347.148.05 0 .099-.074.223-.273.124-.198.595-.694.793-.893.174-.173.347-.223.52-.223.149 0 .298.05.446.148.149.1.297.222.397.347.1.124.174.272.248.421.074.149.124.273.198.397.074.124.149.26.124.397-.025.124-.05.273-.124.421-.075.149-.174.273-.248.397"/>
                        </svg>
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>

        <div class="mt-8">
            <h3 class="text-lg font-medium text-gray-900 mb-2">Visítanos</h3>
            <p class="text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline mr-2" viewBox="0 0 20 20"
                     fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clip-rule="evenodd"/>
                </svg>
                {contactInfo.address}
            </p>
        </div>
    </div>
</div>