const Types = {
  ADD_ONE: "ADD_ONE",
  MINUS_ONE: "MINUS_ONE",
};

const addOne = () => ({
  type: Types.ADD_ONE,
});

const minusOne = () => ({
  type: Types.MINUS_ONE,
});

export default {
  addOne,
  minusOne,
  Types,
};
