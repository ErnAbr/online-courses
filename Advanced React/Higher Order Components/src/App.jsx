// import { logProps } from "./components/log-props";
import { UserInfo } from "./components/user-info";
import { includeUser } from "./components/include-user";
import { UserInfoForm } from "./components/user-form";

// const UserInfoWrapper = logProps(UserInfo);

const UserInfoWithLoader = includeUser(UserInfo, "3");

function App() {
  return (
    <>
      {/* <UserInfoWrapper test={"test"} b="I am B" c={21} /> */}
      <UserInfoWithLoader />

      <UserInfoForm />
    </>
  );
}

export default App;
