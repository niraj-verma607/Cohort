import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeThemeToBrown,
  changeThemeToDark,
  changeThemeToLight,
} from "./redux/slices/themeSlice";
import {
  decrement,
  increment,
  incrementBy5,
} from "./redux/slices/counterSlice";

const App = () => {
  const num = useSelector((state) => {
    return state.counter.value;
  });
  const theme = useSelector((state) => {
    return state.theme.value;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number : {num}</h1>
      <h1>Theme : {theme}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementBy5())}>Increment by 5</button>
      <br />
      <button onClick={() => dispatch(changeThemeToLight())}>
        Change Theme to Light
      </button>
      <button onClick={() => dispatch(changeThemeToDark())}>
        Change Theme to Dark
      </button>
      <button onClick={() => dispatch(changeThemeToBrown())}>
        Change Theme to Brown
      </button>
    </div>
  );
};

export default App;
