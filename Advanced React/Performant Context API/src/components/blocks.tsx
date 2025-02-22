import styled from "styled-components";
import { useNavData } from "../context/nav-controller-reducer";

const BottomBlock = styled.div<{ collapsed?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.collapsed ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  gap: 10px;
  margin-top: 20px;
  text-align: center;
`;
const Blocks = () => {
  const { collapsed } = useNavData();
  console.log("blocks rendered");

  return (
    <>
      <BottomBlock collapsed={collapsed}>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </BottomBlock>
    </>
  );
};

export default Blocks;
