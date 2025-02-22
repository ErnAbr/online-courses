// import { UserLoader } from "./components/user-loader";
import { UserInfo } from "./components/user-info";
// import { BookInfo } from "./components/book-info";
// import { ResourceLoader } from "./components/resource-loader";
import { DataSource } from "./components/data-source";
import { DataSourceWithRender } from "./components/data-source-with-render";
import axios from "axios";

const getDataFromServer = async (url) => {
  const response = await axios.get(url);
  return response.data;
};

const getDataFromLocalStorage = (key) => {
  return localStorage.getItem(key);
};

const Message = ({ msg }) => <h1>{msg}</h1>;

function App() {
  return (
    <>
      {/* <UserLoader userId={3}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={2}>
        <UserInfo />
      </UserLoader>
      <UserLoader userId={1}>
        <UserInfo />
      </UserLoader> */}

      {/* <ResourceLoader resourceUrl={"/users/2"} resourceName={"user"}>
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader resourceUrl={"/books/1"} resourceName={"book"}>
        <BookInfo />
      </ResourceLoader> */}

      <DataSourceWithRender
        getData={() => getDataFromServer("/users/2")}
        render={(resource) => <UserInfo user={resource} />}
      />

      <DataSource getData={() => getDataFromLocalStorage("value")} resourceName={"msg"}>
        <Message />
      </DataSource>
    </>
  );
}

export default App;
