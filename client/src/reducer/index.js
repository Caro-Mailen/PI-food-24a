const initialState = {
  //declaro el estado inicial del reducer
  recipes: [],
};

function rootReducer(state = initialState, action) {
  //lo paso como parametro junto con la action
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };
  }
}

export default rootReducer;
