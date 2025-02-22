import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavController from "../context/nav-controller-reducer";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Page = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <NavController>
      <Container>{children}</Container>;
    </NavController>
  );
};

export default Page;
