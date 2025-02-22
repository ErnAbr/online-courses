import { emitter } from "../App";

const Buttons = () => {
  const onIncrementCounter = () => {
    emitter.emit("inc");
  };

  const onDecrementCounter = () => {
    emitter.emit("dec");
  };

  return (
    <div>
      <button onClick={onIncrementCounter}>Add</button>
      <button onClick={onDecrementCounter}>Remove</button>
    </div>
  );
};

export default Buttons;
