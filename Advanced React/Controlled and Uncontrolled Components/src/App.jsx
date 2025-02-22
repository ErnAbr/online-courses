import { useState } from "react";
// import { ControlledModal } from "./components/controlled-modal";

// import { UncontrolledFlow } from "./components/uncontrolled-flow";
import { ControlledFlow } from "./components/controlled-flow";

const StepOne = ({ goNext }) => {
  return (
    <>
      <h1>Step #1: Enter Your Name</h1>
      <button onClick={() => goNext({ name: "MyName" })}>NEXT</button>
    </>
  );
};
const StepTwo = ({ goNext }) => {
  return (
    <>
      <h1>Step #2: Enter Your Age</h1>
      <button onClick={() => goNext({ age: 26 })}>NEXT</button>
    </>
  );
};
const StepThree = ({ goNext }) => {
  return (
    <>
      <h1>Congrats! You qualify for the gift!</h1>
      <button onClick={() => goNext({})}>NEXT</button>
    </>
  );
};
const StepFour = ({ goNext }) => {
  return (
    <>
      <h1>Step #4: Enter Your Country</h1>
      <button onClick={() => goNext({ country: "MyCountry" })}>NEXT</button>
    </>
  );
};

function App() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [data, setData] = useState({});

  const goNext = (dataFromStep) => {
    setData({ ...data, ...dataFromStep });
    setCurrentStepIndex(currentStepIndex + 1);
  };

  // const [shouldDisplay, setShouldDisplay] = useState(false);
  return (
    <>
      {/* <ControlledModal
        shouldDisplay={shouldDisplay}
        onClose={() => setShouldDisplay(false)}
      >
        <h3>I am the body of the controlled modal</h3>
      </ControlledModal>
      <button onClick={() => setShouldDisplay(!shouldDisplay)}>
        {shouldDisplay ? "Hide Modal" : "Display Modal"}
      </button> */}

      {/* <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
          alert("Form Completed!!!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow> */}

      <ControlledFlow currentIndex={currentStepIndex} onNext={goNext}>
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}
        <StepFour />
      </ControlledFlow>
    </>
  );
}

export default App;
