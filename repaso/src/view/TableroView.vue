<template>
  <div>
    <!-- Renderiza el componente del tablero -->
    <TableroComponent/>
  </div>
</template>

<script>
// Importa el componente del tablero
import TableroComponent from '../components/TableroComponent.vue'

export default {
    // Registra el componente
    components:{
        TableroComponent,
    }
}
</script>

<style>
/* Sin estilos definidos */
</style>
