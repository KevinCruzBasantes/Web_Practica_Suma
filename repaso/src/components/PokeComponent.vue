<template>
    <div>
        <!-- Título del componente -->
        <h1>COMPONENTE</h1>

        <!-- Imagen del Pokémon obtenida desde la API -->
        <img :src="imagen" alt="No se muestra">

        <!-- Nombre del Pokémon -->
        <p>{{ nombre }}</p>
    </div>
</template>

<script>
// Importa la función que consume la API
import { consumirApiFacade } from "../clients/PokeClient"

export default {

    // Prop que recibe el ID del Pokémon desde el componente padre
    props: ["idPoke"],

    data() {
        return {
            // ID interno (no es estrictamente necesario, pero lo mantienes)
            id: 4,

            // Imagen por defecto antes de consumir la API
            imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",

            // Nombre por defecto
            nombre: "XXXXXXXXXX",
        }
    },

    methods: {
        // Método que consulta la API de Pokémon
        async consumir() {

            // Verifica que exista un idPoke válido
            if (this.idPoke) {

                // Asignación interna (no afecta a la API)
                this.id = 5

                // Llamada a la API usando el facade
                const respuesta = await consumirApiFacade(this.idPoke)

                // Asigna la imagen shiny del Pokémon
                this.imagen = respuesta.sprites.front_shiny

                // Asigna el nombre del Pokémon
                this.nombre = respuesta.name
            }
        }
    },

    watch: {
        // Observa cambios en la prop idPoke
        // Cada vez que cambia, se vuelve a consumir la API
        idPoke() {
            this.consumir()
        }
    }
}
</script>

<style>
/* Estilos no definidos */
</style>
