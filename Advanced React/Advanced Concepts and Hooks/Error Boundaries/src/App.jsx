import "./App.css";
import { Child } from "./child";
import { ErrorBoundry } from "./error-boundary";

function App() {
  return (
    <>
      <h1>Parent Component</h1>
      <ErrorBoundry fallback={<h1>Error at child Level</h1>}>
        <Child />
      </ErrorBoundry>
    </>
  );
}

export default App;
