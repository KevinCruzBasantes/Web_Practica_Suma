<template>
  <!-- Componente raíz que orquesta la comunicación -->
  <div class="app-container">
    <!-- Componente 1: Formulario -->
    <FormularioComponent @agregar-candidato="agregarCandidato" />

    <!-- Componente 2: Tabla -->
    <TablaComponent :candidatos="candidatos" />
  </div>
</template>

<script>
/**
 * App.vue
 * ---------------------------------------------------
 * Componente contenedor principal.
 * 
 * Responsabilidades:
 * - Mantener la lista de candidatos (estado global)
 * - Recibir datos desde el formulario
 * - Enviar los datos a la tabla mediante props
 */

import FormularioComponent from "./components/FormularioComponent.vue";
import TablaComponent from "./components/TablaComponent.vue";

export default {
  components: {
    FormularioComponent,
    TablaComponent
  },

  /**
   * Estado principal de la aplicación.
   * Contiene la lista de candidatos agregados.
   */
  data() {
    return {
      candidatos: []
    };
  },

  methods: {
    /**
     * Agrega un nuevo candidato a la lista.
     * Este método es invocado cuando el formulario
     * emite el evento correspondiente.
     * 
     * @param {Object} candidato Datos del candidato.
     */
    agregarCandidato(candidato) {
      this.candidatos.push(candidato);
    }
  }
};
</script>
<style>
.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Centrado horizontal */
  gap: 40px;
  /* Separación entre componentes */
  padding: 40px;
}
</style>