import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";

function Counter() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  const containerStyle = {
    display: "flex",
  };
  const buttonStyle = {
    fontSize: "1.5rem",
    width: "40px",
    height: "40px",
  };

  function addOne() {
    dispatch({ type: "ADD_ONE" });
  }

  function minusOne() {
    dispatch({ type: "MINUS_ONE" });
  }

  return (
    <>
      <div>
        <h1>{counter.number}</h1>
        <div style={containerStyle}>
          <button onClick={() => minusOne()} type="button" style={buttonStyle}>
            -
          </button>
          <button onClick={() => addOne()} type="button" style={buttonStyle}>
            +
          </button>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    number: state.number,
  };
};

export default connect(mapStateToProps)(Counter);
