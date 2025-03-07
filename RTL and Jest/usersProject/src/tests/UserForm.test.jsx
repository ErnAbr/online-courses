import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { UserForm } from "../components/UserForm";

test("it shows two inputs and a button", () => {
  // render the component
  render(<UserForm />);
  // manipulate the component or find an element in it
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");
  // Assertion - make sure the component is doing what we expect to do
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});
