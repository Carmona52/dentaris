<script>

    import servicesData from '$lib/data/data.json';

    const services = [
        {
            icon: 'chart-bar',
            title: "Gestión Clínica Integral",
            description: "Control completo de pacientes, citas y tratamientos en una sola plataforma.",
            features: [
                "Historiales clínicos digitales",
                "Agendamiento inteligente",
                "Presupuestos automatizados"
            ]
        },
        {
            icon: 'cpu-chip',
            title: "Diagnóstico Digital",
            description: "Integración con equipos de última generación para análisis preciso.",
            features: [
                "Almacenamiento en la nube",
                "Odontograma",
            ]
        },
        {
            icon: 'currency-dollar',
            title: "Administración Financiera",
            description: "Sistema contable diseñado específicamente para clínicas dentales.",
            features: [
                "Impresión de Tickets",
                "Reportes de rentabilidad",
                "Cobros recurrentes"
            ]
        }
    ];
</script>

<div class="bg-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
        <!-- Encabezado -->
        <div class="text-center mb-12">
            <h1 class="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">NUESTROS SERVICIOS</h1>
            <p class="text-xl text-gray-600">Herramientas diseñadas por dentistas para dentistas</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {#each services as service}
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 group">
                    <div class="flex items-center mb-4">
                        <div class="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                {#if service.icon === 'chart-bar'}
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                {:else if service.icon === 'cpu-chip'}
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                                {:else}
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                {/if}
                            </svg>
                        </div>
                        <h2 class="text-xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p class="text-gray-600 mb-4">{service.description}</p>
                    <ul class="space-y-2 text-sm text-gray-600">
                        {#each service.features as feature}
                            <li class="flex items-start">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     class="h-4 w-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                          d="M5 13l4 4L19 7"/>
                                </svg>
                                {feature}
                            </li>
                        {/each}
                    </ul>
                </div>
            {/each}
        </div>

        <div class="bg-blue-50 rounded-xl p-6 mb-12 border border-blue-100">
            <h2 class="text-2xl font-semibold text-gray-900 mb-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline mr-2 text-blue-500" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                </svg>
                Planes Adaptados a Tu Clínica
            </h2>

            <div class="overflow-x-auto">
                <table class="min-w-full bg-white rounded-lg overflow-hidden">
                    <thead>
                    <tr class="bg-blue-600 text-white">
                        <th class="py-3 px-4 text-left">Característica</th>
                        <th class="py-3 px-4 text-center">Básico</th>
                        <th class="py-3 px-4 text-center">Profesional</th>
                    </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                    <tr>
                        <td class="py-3 px-4 font-medium">Pacientes activos</td>
                        <td class="py-3 px-4 text-center">100</td>
                        <td class="py-3 px-4 text-center">Ilimitados</td>

                    </tr>
                    <tr class="bg-gray-50">
                        <td class="py-3 px-4 font-medium">Soporte prioritario</td>
                        <td class="py-3 px-4 text-center">✕</td>
                        <td class="py-3 px-4 text-center">✓ 24/7</td>

                    </tr>
                    <tr>
                        <td class="py-3 px-4 font-medium">Integración diagnóstica</td>
                        <td class="py-3 px-4 text-center">Básica</td>
                        <td class="py-3 px-4 text-center">Avanzada</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- CTA -->
        <div class="text-center">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">¿Necesitas una solución personalizada?</h3>
            <a
                    href="/contacto"
                    class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
                Habla con nuestro equipo
            </a>
        </div>
    </div>
</div>