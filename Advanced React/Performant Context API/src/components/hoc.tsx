import React from "react";
import { useNav } from "../context/nav-controller";

const withNavClose = (Component: any) => {
  const MomoizedComponent = React.memo(Component);
  return (props: any) => {
    const { close } = useNav();
    return <MomoizedComponent {...props} closeNav={close} />;
  };
};

export default withNavClose;
