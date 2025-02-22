import { LargeAuthorListItem } from "./components/authors/LargeListItems";
import { SmallAuthorListItem } from "./components/authors/SmallListItems";
import { LargeBookListItem } from "./components/books/LargeListItems.jsx";
import { SmallBookListItem } from "./components/books/SmallListItems.jsx";
import { NumberedList } from "./components/list/Numbered.jsx";
import { RegularList } from "./components/list/Regular";
import { Modal } from "./components/Modal.jsx";
import { SplitScreen } from "./components/split-screen";
import { authors } from "./data/authors.js";
import { books } from "./data/books.js";

const LeftSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};

const RightSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "burlywood" }}>{title}</h2>;
};

function App() {
  return (
    <>
      <SplitScreen leftWidth={1} rightWidth={3}>
        <LeftSideComponent title="Left" />
        <RightSideComponent title="Right" />
      </SplitScreen>
      <div>
        <RegularList items={authors} sourceName={"author"} ItemComponent={SmallAuthorListItem} />
        <RegularList items={authors} sourceName={"author"} ItemComponent={LargeAuthorListItem} />
        <NumberedList items={books} sourceName={"book"} ItemComponent={SmallBookListItem} />
      </div>
      <Modal>
        <NumberedList items={books} sourceName={"book"} ItemComponent={LargeBookListItem} />
      </Modal>
    </>
  );
}

export default App;
