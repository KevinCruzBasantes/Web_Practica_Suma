/**
 * CanditatoClient
 * ---------------------------------------------------
 * Módulo responsable de la comunicación con el API
 * externo Random User.
 * 
 * Encapsula la lógica de acceso a datos para evitar
 * dependencias directas del API en los componentes Vue.
 */

import axios from "axios";

/**
 * Realiza la petición HTTP al API Random User.
 * @returns {Object} Respuesta completa del API en formato JSON.
 */
const consultarApi = async () => {
    const respuesta = await axios.get("https://randomuser.me/api/");
    return respuesta.data;
};

/**
 * Fachada (Facade) que expone el método de consulta.
 * Permite desacoplar los componentes de la implementación
 * real de la llamada HTTP.
 * 
 * @returns {Object} Datos obtenidos desde el API.
 */
export async function consultarApiFacade() {
    return await consultarApi();
}
