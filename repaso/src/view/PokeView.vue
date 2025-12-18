<template>
  <!-- Renderiza directamente el componente Pokémon -->
  <PokeComponent/>
</template>

<script>
// Importa el componente PokeComponent
import PokeComponent from '../components/PokeComponent.vue'

export default {
    // Registra el componente para poder usarlo en el template
    components:{
        PokeComponent
    }
}
</script>

<style>
/* Sin estilos definidos */
</style>
