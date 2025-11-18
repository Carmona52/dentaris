<script>
  import StartNow from "../Buttons/StartNow.svelte";
  import BasicChip from "../Chips/BasicChip.svelte";
</script>

<main class="mb-6">
  <section>
    <div class="container mx-auto p-4 sm:px-6 lg:px-8  shadow-lg hover:shadow-xl ">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <!-- Texto -->
        <div class="bg-white rounded-2xl p-6 sm:p-8 md:p-10 transition flex flex-col">
          <div class="mt-4 flex justify-center md:justify-start my-2">
             <BasicChip texto="Pruébalo Gratis. ¡Ahora!" tipo="info" />
          </div>
            <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center md:text-left leading-snug drop-shadow-md max-w-fit">
            Gestiona tu clínica dental con 
            <span class="text-blue-700">Dentaris</span>
          </h1>

          <p class="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-center md:text-left font-medium">
            Con <span class="text-blue-700 font-bold">Dentaris</span> digitaliza tus procesos, 
            elimina el caos administrativo y ofrece un servicio excepcional a tus pacientes. 
            Diseñado especialmente para <span class="text-blue-600 font-semibold">odontólogos</span>.
          </p>

          <div class="mt-8 flex flex-col items-center md:items-start space-y-4">
            <StartNow />
           
          </div>
          
        </div>

        <!-- Imagen -->
        <div class="hidden md:block justify-center items-center mx-auto">
          <img
            src="/images/Section.webp"
            alt="Ilustración Dentaris"
            class="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto drop-shadow-lg transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
  </section>
</main>
