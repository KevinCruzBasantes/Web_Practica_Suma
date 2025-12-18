<template>
    <!-- Contenedor principal del tablero -->
    <div class="container-tablero">

        <!-- Título del juego -->
        <h1>TABLERO</h1>

        <!-- Información del estado del juego -->
        <div class="info">
            <p>Puntuación: {{ puntuacion }}</p>
            <p>Intentos: {{ intentos }} / 5</p>
        </div>

        <!-- Contenedor de los 3 Pokémon -->
        <div class="containerPokes">
            <!-- Cada componente recibe el id del Pokémon -->
            <PokeComponent :idPoke="vacio[0]" />
            <PokeComponent :idPoke="vacio[1]" />
            <PokeComponent :idPoke="vacio[2]" />
        </div>

        <!-- Botón para jugar (se desactiva cuando el juego termina) -->
        <button 
            @click="jugar" 
            :disabled="estadoJuego !== null">
            JUGAR
        </button>

        <!-- Botón para reiniciar el juego (solo aparece si ganó o perdió) -->
        <button 
            v-if="estadoJuego"
            @click="nuevoJuego">
            NUEVO JUEGO
        </button>

        <!-- MENSAJE CUANDO EL JUGADOR PIERDE -->
        <div v-if="estadoJuego === 'perdido'" class="mensaje-rojo">
            <p>Has utilizado tus 5 intentos</p>
            <p>El juego ha terminado, inténtalo nuevamente</p>
        </div>

        <!-- MENSAJE CUANDO EL JUGADOR GANA -->
        <div v-else-if="estadoJuego === 'ganado'" class="mensaje-azul">
            <p>Puntaje: {{ puntuacion }}</p>
            <p>Felicitaciones has ganado un premio de $10.000,00</p>
        </div>

    </div>
</template>

<script>
// Importa el componente hijo que muestra el Pokémon
import PokeComponent from '../components/PokeComponent.vue'

export default {
    // Registro del componente hijo
    components: { PokeComponent },

    // Estado inicial del juego
    data() {
        return {
            // Conjunto fijo de Pokémon permitidos
            poolIds: [1, 4, 8, 25, 95],

            // Arreglo que almacena los Pokémon mostrados
            vacio: [null, null, null],

            // Contador de intentos realizados
            intentos: 0,

            // Puntuación acumulada
            puntuacion: 0,

            // Estado del juego: null | 'ganado' | 'perdido'
            estadoJuego: null
        }
    },

    methods: {
        // Devuelve un Pokémon aleatorio del conjunto permitido
        random() {
            const i = Math.floor(Math.random() * this.poolIds.length)
            return this.poolIds[i]
        },

        // Ejecuta una jugada
        jugar() {
            // Si el juego terminó, no permite seguir jugando
            if (this.estadoJuego) return

            // Genera los tres Pokémon aleatorios
            this.vacio = [
                this.random(),
                this.random(),
                this.random()
            ]

            // Desestructura los valores para compararlos fácilmente
            const [a, b, c] = this.vacio

            // Si coinciden los 3 Pokémon → suma 5 puntos
            if (a === b && b === c) {
                this.puntuacion += 5
            }
            // Si coinciden solo 2 Pokémon → suma 2 puntos
            else if (a === b || a === c || b === c) {
                this.puntuacion += 2
            }

            // Incrementa el número de intentos
            this.intentos++

            // Si alcanza 10 puntos o más → gana
            if (this.puntuacion >= 10) {
                this.estadoJuego = 'ganado'
            }
            // Si llega a 5 intentos sin ganar → pierde
            else if (this.intentos === 5) {
                this.estadoJuego = 'perdido'
            }
        },

        // Reinicia completamente el juego
        nuevoJuego() {
            this.vacio = [null, null, null]
            this.intentos = 0
            this.puntuacion = 0
            this.estadoJuego = null
        }
    }
}
</script>

<style>
/* Contenedor principal centrado en la pantalla */
.container-tablero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-height: 100vh;
    text-align: center;
}

/* Contenedor de información */
.info {
    margin-bottom: 15px;
}

/* Contenedor de los Pokémon */
.containerPokes {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 20px 0;
}

/* Estilo del mensaje de pérdida */
.mensaje-rojo {
    color: red;
    font-weight: bold;
    margin-top: 20px;
}

/* Estilo del mensaje de victoria */
.mensaje-azul {
    color: blue;
    font-weight: bold;
    margin-top: 20px;
}

/* Estilo general de botones */
button {
    margin: 5px;
    padding: 8px 16px;
    font-size: 16px;
}
</style>
