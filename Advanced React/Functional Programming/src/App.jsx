import { GreenSmallButton, RedButton } from "./components/composition";
import { RedButtonPartial, SmallRedButtonPartial } from "./components/partial";
import { RecursiveComponent } from "./components/recursive";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerKey1",
      innerInnerKey2: "innerInnerKey2",
    },
  },
  key3: "value3",
};

function App() {
  return (
    <>
      <RecursiveComponent data={myNestedObject} />
      <RedButton text="I am Red" />
      <GreenSmallButton text="I am small and Green" />
      <RedButtonPartial text="I am Red Partial Button" />
      <SmallRedButtonPartial text="I am small Red Partial Button" />
    </>
  );
}

export default App;
