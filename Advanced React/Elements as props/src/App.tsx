import Button from "./components/button";
import { Loading } from "./components/icons";

export default function App() {
  return (
    <>
      <Button type="primary" icon={<Loading color="red" />} />
      <Button type="secondary" icon={<Loading />} />
      <Button icon={<Loading color="primary" />} />
    </>
  );
}
