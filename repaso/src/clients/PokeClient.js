import axios from "axios"

// Función que consume directamente la API de Pokémon
const consumirApi = async (id) => {

   // Realiza la petición GET y extrae la data
   const respuesta = await axios
       .get("https://pokeapi.co/api/v2/pokemon/" + id)
       .then(r => r.data)

   // Retorna la información del Pokémon
   return respuesta
}

// Función facade para abstraer el consumo de la API
export async function consumirApiFacade(id) {
    return await consumirApi(id)
}
