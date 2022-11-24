import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../store/slice/counterSlice";

const Count = () => {
  //  Wajib didalam functional component
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <section style={{ justifyContent: "center", display: "flex" }}>
      <div
        style={{ borderStyle: "solid", padding: "20px", marginTop: "25px", borderRadius: "20px" }}
      >
        <h2> Count : {count}</h2>
        <button onClick={() => dispatch(increment())}>Increase</button> &nbsp;
        <button onClick={() => dispatch(decrement())}>Decrease</button> &nbsp;
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </section>
  );
};

export default Count;
