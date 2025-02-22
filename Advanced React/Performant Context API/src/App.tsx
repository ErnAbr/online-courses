import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Page from "./components/page";

export default function App() {
  return (
    <Page>
      <Sidebar />
      <Main />
    </Page>
  );
}
