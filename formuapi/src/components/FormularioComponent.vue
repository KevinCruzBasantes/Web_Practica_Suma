<template>
    <!-- Contenedor principal del formulario -->
    <div class="containerFormulario">
        <h1>Componente 1</h1>

        <!-- Se previene el envío automático del formulario -->
        <form @submit.prevent class="formu">
            <!-- Sección de encabezado que muestra la imagen -->
            <div class="encabezado">
                <b>Fotografia</b>
                <!-- La imagen se enlaza dinámicamente al estado -->
                <img :src="foto" alt="no se muestra">
            </div>

            <!-- Campos del formulario enlazados con v-model -->
            <p>Titulo</p>
            <input type="text" v-model="titulo">

            <p>Nombre</p>
            <input type="text" v-model="nombre">

            <p>Apellido</p>
            <input type="text" v-model="apellido">

            <p>Atributo 5</p>
            <input type="text" v-model="atributo5">

            <p>Atributo 6</p>
            <input type="text" v-model="atributo6">

            <!-- Botones de acción -->
            <div class="botones">
                <button type="button" @click="buscar">Buscar</button>
                <button type="button" @click="agregar">Agregar</button>
            </div>
        </form>
    </div>
</template>

<script>
/**
 * FormularioComponent
 * ---------------------------------------------------
 * Componente responsable de:
 * - Consultar el API Random User
 * - Mostrar los datos obtenidos en el formulario
 * - Emitir los datos del candidato al componente padre
 */

import { consultarApiFacade } from "../clients/CanditatoClient";

export default {
    /**
     * Eventos emitidos por el componente.
     * Se utiliza para enviar datos al componente padre.
     */
    emits: ["agregar-candidato"],

    /**
     * Estado local del formulario.
     * Cada propiedad está enlazada a un campo del formulario
     * mediante v-model.
     */
    data() {
        return {
            foto: "",
            titulo: "",
            nombre: "",
            apellido: "",
            atributo5: "",
            atributo6: "",
        };
    },

    methods: {
        /**
         * Consulta el API Random User y asigna los valores
         * obtenidos a los campos del formulario.
         */
        async buscar() {
            const res = await consultarApiFacade();
            const user = res.results[0];

            this.foto = user.picture.large;
            this.titulo = user.name.title;
            this.nombre = user.name.first;
            this.apellido = user.name.last;

            // Atributos seleccionados libremente
            this.atributo5 = user.dob.age;
            this.atributo6 = user.cell;
        },

        /**
         * Construye el objeto candidato y lo envía
         * al componente padre mediante un evento emitido.
         */
        agregar() {
            const candidato = {
                titulo: this.titulo,
                nombre: this.nombre,
                apellido: this.apellido,
                atributo5: this.atributo5,
                atributo6: this.atributo6,
            };

            this.$emit("agregar-candidato", candidato);
        }
    }
};
</script>

<style>
/* Estilo básico para la imagen */
img {
    border: 2px solid blue;
    border-radius: 20px;
}

/* Layout del encabezado */
.encabezado {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 5px;
}

/* Separación entre botones */
.botones {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
    
}

.formu{
    border: 1px solid blue;
    border-radius: 30px;
    padding: 30px;
}
input{
    border-radius:10px ;
    padding: 5px;
    border-color: blue;
}
button{
    background: blue;
    color: white;
    padding: 15px;
    border-radius: 10px;
    font-size: medium;
}
p{
    color: blue;
}
b{
    color: blue;
}
</style>
