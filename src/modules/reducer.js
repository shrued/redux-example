import ACTIONS from "./action";

const initialState = {
  number: 0,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.Types.ADD_ONE:
      return {
        number: state.number + 1,
      };
    case ACTIONS.Types.MINUS_ONE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}
