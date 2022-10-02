let initialState = {
  favourites: [],
  lang:"en-US"
};

export default function favouriteReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ToFavourites":
      let favv = state.favourites.findIndex(
        (favourite) => favourite.id == action.payload.id
      );
      if (favv != -1) return state;
      state.favourites.push(action.payload);
      return state;
    case "LANG":
      return {
        ...state,
        lang:action.payload
      }

    default:
      return state;
  }
}
