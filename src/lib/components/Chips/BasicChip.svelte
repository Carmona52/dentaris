<script lang="ts">
  export let texto: string = 'Etiqueta';
  export let tipo: 'info' | 'success' | 'warning' | 'error' = 'info';

  const estilos = {
    info: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800'
  };
</script>

<div class={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full shadow-sm ${estilos[tipo]}`}>
  {texto}
</div>
