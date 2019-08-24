const initialState = {
     data: [],
     weather: []
};

export const dataReducer = (state = initialState, action) => {
     switch (action.type) {
          case "GET_DATA":
               return {
                    ...state,
                    data: action.payload
               };
          default:
               return state;
     }
};

export const weatherReducer = (state = initialState, action) => {
     switch (action.type) {
          case "GET_WEATHER":
               return {
                    ...state,
                    weather: action.payload
               };
          default:
               return state;
     }
};