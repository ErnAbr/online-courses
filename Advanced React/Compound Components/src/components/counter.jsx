import { useEffect, useState } from "react";
import { emitter } from "../App";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const onIncrement = () => {
      setCount((count) => count + 1);
    };

    const onDecrement = () => {
      setCount((count) => count - 1);
    };

    emitter.on("inc", onIncrement);
    emitter.on("dec", onDecrement);

    return () => {
      emitter.off("inc", onIncrement);
      emitter.off("dec", onDecrement);
    };
  }, []);

  return <div>#: {count}</div>;
};

export default Counter;
