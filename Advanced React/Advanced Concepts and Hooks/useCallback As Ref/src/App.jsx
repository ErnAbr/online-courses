import { useCallback, useState } from "react";

function App() {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useCallback((input) => {
    if (input === null) return;
    input.focus();
  }, []);

  return (
    <>
      <button onClick={() => setShowInput((s) => !s)}>Switch</button>
      {showInput && <input type="text" ref={inputRef} />}
    </>
  );
}

export default App;
