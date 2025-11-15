<script>
    import { db } from '$lib/firebase';
    import { doc, setDoc } from 'firebase/firestore';

    let firstName = '';
    let email = '';
    let body = '';

    let alertMessage = '';
    let alertType = '';
    let showAlert = false;

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await setDoc(doc(db, 'correos', email), {
                firstName,
                email,
                body,
                createdAt: new Date()
            });

            showCustomAlert('¡Gracias por unirte! Pronto recibirás noticias nuestras 😉.', 'success');
            firstName = '';
            email = '';
            body = '';
        } catch (error) {
            console.error('Error al enviar:', error);
            showCustomAlert('Hubo un error. Intenta más tarde.', 'error');
        }
    }

    function showCustomAlert(message, type) {
        alertMessage = message;
        alertType = type;
        showAlert = true;

        setTimeout(() => {
            showAlert = false;
        }, 4000); // ocultar después de 4 segundos
    }
</script>

{#if showAlert}
    <div class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
        <div class={`rounded-md p-4 text-sm font-medium shadow-md transition-all duration-300
                ${alertType === 'success'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'bg-red-100 text-red-800 border border-red-300'}`}>
            {alertMessage}
        </div>
    </div>
{/if}

<form on:submit|preventDefault={handleSubmit}>
    <div class="relativa isolate px-6 py-8 lg:px-1 space-y-1 mx-auto grid max-w-lg grid-cols-1 items-center gap-y-6 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-1">
        <h1 class="text-gray-900 text-xl">
            Revoluciona tu clínica dental Ahora <span class="font-bold">¡Gratis!</span>
        </h1>

        <div class="border-b border-gray-900/10 pb-12">
            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-full">
                    <label for="first-name" class="block text-sm/6 font-medium text-gray-900">
                        Nombre <span class="text-red-600">*</span>
                    </label>
                    <div class="mt-2">
                        <input
                                type="text"
                                id="first-name"
                                bind:value={firstName}
                                required
                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div class="sm:col-span-full">
                    <label for="email" class="block text-sm/6 font-medium text-gray-900">
                        Correo Electrónico <span class="text-red-600">*</span>
                    </label>
                    <div class="mt-2">
                        <input
                                type="email"
                                id="email"
                                bind:value={email}
                                required
                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div class="col-span-full">
                    <label for="body" class="block text-sm/6 font-medium text-gray-900">
                        Dinos lo que necesitas <span class="text-red-600">*</span>
                    </label>
                    <div class="mt-2">
            <textarea
                    id="body"
                    bind:value={body}
                    required
                    placeholder="Escribe lo que necesites"
                    class="block bg-white rounded border text-gray-900 leading-normal resize-none w-full h-35 py-2 px-3 font-medium outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:-outline-offset-2 focus:outline-indigo-600"
            ></textarea>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-6 flex items-center justify-end gap-x-6">
            <button
                    type="button"
                    on:click={() => (window.location.href = '/')}
                    class="cancel-btn w-2xs px-3 py-2 text-sm font-semibold"
            >
                No quiero unirme
            </button>
            <button
                    type="submit"
                    class="w-2xs rounded-md principal-btn px-3 py-2 text-sm font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                ¡Únete Gratis!
            </button>
        </div>
    </div>
</form>
