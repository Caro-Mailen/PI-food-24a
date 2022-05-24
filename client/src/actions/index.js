import axios from "axios";

//en esta funcion sucede la conexion entre el front y el back!
export function getRecipes() {
  return async function (dispatch) {
    const jsonData = await axios.get("http://localhost:3001/recipes"); //axios devuelve la respuesta en un .data
    return dispatch({
      type: GET_RECIPES,
      payload: jsonData.data,
    });
  };
}

//una vez creada la accion me voy al reducer
