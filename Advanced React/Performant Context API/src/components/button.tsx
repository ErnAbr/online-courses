import styled from "styled-components";
import { useNavApi, useNavData } from "../context/nav-controller-reducer";
import withNavClose from "./hoc";

const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Button = () => {
  const { toggle } = useNavApi();
  const { collapsed } = useNavData();

  return <ToggleButton onClick={toggle}>{collapsed ? ">" : "⮜"}</ToggleButton>;
};

export const CloseButton = withNavClose(
  ({ closeNav }: { closeNav: () => void }) => {
    console.log("close button rendered");

    return <ToggleButton onClick={closeNav}>Close</ToggleButton>;
  }
);

export default Button;
