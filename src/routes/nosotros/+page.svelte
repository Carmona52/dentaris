<script>

    import companyData from '$lib/data/data.json';

    const team = companyData["team"];
</script>

<div class="bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">

        <div class="text-center mb-12">
            <h1 class="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">SOBRE DENTARIS</h1>
            <p class="text-xl text-gray-600">Revolucionando la gestión dental con tecnología</p>
        </div>


        <div class="bg-blue-50 rounded-xl p-6 mb-12 border border-blue-100">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-500" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                Nuestra Misión
            </h2>
            <div class="space-y-4 text-gray-700">
                <p>En <strong>Dentaris</strong> desarrollamos soluciones SaaS que simplifican la operación de clínicas
                    dentales, integrando gestión administrativa, historiales clínicos y herramientas de diagnóstico en
                    una sola plataforma.</p>
                <p>Nuestro objetivo es <strong>reducir un 40% el tiempo administrativo</strong> de los profesionales
                    dentales, permitiéndoles enfocarse en lo más importante: sus pacientes.</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Nuestra Tecnología
                </h3>
                <ul class="space-y-2 text-gray-600 text-sm list-disc pl-5">
                    <li>Plataforma 100% en la nube con acceso seguro desde cualquier dispositivo</li>
                    <li>Plataforma que se adapta a sus necesidades</li>
                    <li>Administre todo sobre sus pacientes</li>
                </ul>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 class="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Para Clínicas
                </h3>
                <ul class="space-y-2 text-gray-600 text-sm list-disc pl-5">
                    <li>Gestión centralizada de múltiples consultorios</li>
                    <li>Reportes financieros automatizados</li>
                    <li>Sistema de citas con recordatorios inteligentes</li>
                </ul>
            </div>
        </div>

        <div class="mb-12">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2 text-blue-500" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                Conoce al Equipo
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                {#each team as member}
                    <div class="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div class="flex items-start space-x-4">
                            <img
                                    src={member.image}
                                    alt={member.name}
                                    class="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
                            />
                            <div>
                                <h3 class="font-bold text-gray-900">{member.name}</h3>
                                <p class="text-blue-600 text-sm mb-2">{member.role}</p>
                                <p class="text-gray-600 text-sm">{member.bio}</p>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <div class="text-center bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">¿Listo para transformar tu clínica dental?</h3>
            <a
                    href="/contacto"
                    class="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
                Solicita una demostración
            </a>
        </div>
    </div>
</div>