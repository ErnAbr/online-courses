import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserForm } from "../components/UserForm";
import { vi } from "vitest";

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

test("it calls onUserAdd when the form is submitted", async () => {
  const mock = vi.fn();

  // Render the component
  render(<UserForm onUserAdd={mock} />);

  // Find the two inputs
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // Simulate typing in a name
  await userEvent.type(nameInput, "jane");

  // Simulate typing in an email
  await userEvent.type(emailInput, "jane@gmail.com");

  // Find the button
  const button = screen.getByRole("button");

  // Simulate clicking the button
  await userEvent.click(button);

  // Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: "jane", email: "jane@gmail.com" });
});

test("empties the two inputs when form is submitted", async () => {
  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const button = screen.getByRole("button");

  await userEvent.type(nameInput, "jane");
  await userEvent.type(emailInput, "jane@gmail.com");
  await userEvent.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
