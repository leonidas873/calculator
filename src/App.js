import "./App.css";
import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CgMathDivide } from "react-icons/cg";
import { BsDot } from "react-icons/bs";
import { TiEquals } from "react-icons/ti";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const operators = "*/+-.";

  const [state, setState] = useState("");
  const [result, setResult] = useState("");
  const changeState = (e) => {
    setResult("");
    if (!(operators.includes(state[state.length - 1]) && operators.includes(e)))
      setState(state + e);
    else {
      let newStr = state.split("");
      newStr.splice(-1);
      newStr = newStr.join("");
      newStr += e;
      setState(newStr);
    }
  };
  const calculate = () => {
    let newStr = state.split("");
    if (operators.includes(newStr[newStr.length - 1])) {
      newStr.splice(-1);
    }
    newStr = newStr.join("");

    setResult(evaluate(newStr));
    setState("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="calculator__screen">
          <input
            placeHolder="0"
            type="text"
            value={result ? result : state}
            className="calculation"
            disabled
          />
        </div>
        <button
          className="calculator__btn"
          onClick={() => {
            changeState("1");
          }}
        >
          1
        </button>
        <button
          className="calculator__btn"
          onClick={() => {
            changeState("3");
          }}
        >
          2
        </button>
        <button
          className="calculator__btn"
          onClick={() => {
            changeState("4");
          }}
        >
          3
        </button>
        <button
          className="calculator__btn calculator__btn--spec"
          onClick={() => {
            changeState("*");
          }}
        >
          <AiOutlineClose />
        </button>
        <button
          className="calculator__btn"
          onClick={() => {
            changeState("4");
          }}
        >
          4
        </button>
        <button
          className="calculator__btn"
          onClick={() => {
            changeState("5");
          }}
        >
          5
        </button>
        <button
          className="calculator__btn"
          onClick={() => {
            changeState("6");
          }}
        >
          6
        </button>
        <button
          className="calculator__btn calculator__btn--spec"
          onClick={() => {
            changeState("/");
          }}
        >
          <CgMathDivide />
        </button>
        <button
          className="calculator__btn"
          onClick={() => {
            changeState("7");
          }}
        >
          7
        </button>
        <button
          className="calculator__btn"
          onClick={() => {
            changeState("8");
          }}
        >
          8
        </button>
        <button
          className="calculator__btn"
          onClick={() => {
            changeState("9");
          }}
        >
          9
        </button>
        <button
          className="calculator__btn calculator__btn--spec"
          onClick={() => {
            changeState("+");
          }}
        >
          <AiOutlinePlus />
        </button>
        <button
          className="calculator__btn calculator__btn--spec"
          onClick={() => {
            changeState(".");
          }}
        >
          <BsDot />
        </button>
        <button
          className="calculator__btn"
          onClick={() => {
            changeState("0");
          }}
        >
          0
        </button>
        <button
          className="calculator__btn calculator__btn--spec"
          onClick={calculate}
        >
          <TiEquals />
        </button>
        <button
          className="calculator__btn calculator__btn--spec"
          onClick={() => {
            changeState("-");
          }}
        >
          <AiOutlineMinus />
        </button>
        <button
          className="calculator_clear-btn"
          onClick={() => {
            setState("");
            setResult("");
          }}
        >
          clear
        </button>
      </div>
    </div>
  );
}

export default App;
