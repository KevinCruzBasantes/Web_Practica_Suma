<template>
    <!-- Contenedor de la tabla -->
    <div class="containerTabla">
        <h1>Componente 2</h1>

        <!-- Tabla que muestra la lista de candidatos -->
        <table class="tabla-candidatos">
            <tr>
                <th>Titulo</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Atributo 5</th>
                <th>Atributo 6</th>
            </tr>

            <!-- Renderizado dinámico de candidatos -->
            <tr v-for="(c, index) in candidatos" :key="index">
                <td>{{ c.titulo }}</td>
                <td>{{ c.nombre }}</td>
                <td>{{ c.apellido }}</td>
                <td>{{ c.atributo5 }}</td>
                <td>{{ c.atributo6 }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
/**
 * TablaComponent
 * ---------------------------------------------------
 * Componente de presentación encargado de mostrar
 * la lista de candidatos recibida desde el padre.
 */

export default {
    /**
     * Props recibidas desde el componente padre.
     * La tabla no modifica los datos, solo los muestra.
     */
    props: {
        candidatos: {
            type: Array,
            required: true
        }
    }
};
</script>
<style>
.tabla-candidatos {
    border: 2px solid #333;
    border-collapse: collapse;
    /* Une los bordes */
    width: 100%;
}

.tabla-candidatos th,
.tabla-candidatos td {
    border: 1px solid #333;
    padding: 8px;
    text-align: center;
}
</style>