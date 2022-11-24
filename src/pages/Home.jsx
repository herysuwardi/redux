import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../store/slice/homeSlice";

import Spinnner from "../components/Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const { listData, isLoading, isError } = useSelector((state) => state.home);

  useEffect(() => {
    if (listData.length === 0) dispatch(fetchTodos());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayList =
    listData.length !== 0 &&
    listData.map((val) => (
      <div
        key={val.id}
        style={{
          borderStyle: "solid",
          padding: "10px",
          marginBottom: "5px",
          borderRadius: "20px",
          width: "400px",
        }}
      >
        <p>{val.title}</p>
      </div>
    ));

  if (isLoading)
    return (
      <section style={{ justifyContent: "center", display: "flex", marginTop: "20px" }}>
        <Spinnner />
      </section>
    );

  if (isError)
    return (
      <section style={{ justifyContent: "center", display: "flex", marginTop: "20px" }}>
        <h3 style={{ color: "red" }}>This is error message!</h3>
      </section>
    );

  return (
    <>
      {/* <section style={{ justifyContent: "center", display: "flex" }}>
        <div
          style={{ borderStyle: "solid", padding: "20px", marginTop: "25px", borderRadius: "20px" }}
        >
          <h2> Count : {count}</h2>
        </div>
      </section> */}
      <section style={{ margin: "20px" }}>
        <h2>data display</h2>
        {displayList}
      </section>
    </>
  );
};

export default Home;
