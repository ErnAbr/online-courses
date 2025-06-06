import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { createServer } from "../../test/server";
import { SWRConfig } from "swr";
import AuthButtons from "./AuthButtons";

async function renderComponent() {
  render(
    <SWRConfig value={{ provider: () => new Map() }}>
      <MemoryRouter>
        <AuthButtons />
      </MemoryRouter>
    </SWRConfig>
  );
  await screen.findAllByRole("link");
}

describe("when user is signed in", () => {
  createServer([
    {
      path: "/api/user",
      method: "get",
      res: () => {
        return { user: { id: 1, email: "email@email.com" } };
      },
    },
  ]);

  test("sign in and sign up are not visible", async () => {
    await renderComponent();

    const signInButton = screen.queryByRole("link", {
      name: /sign in/i,
    });

    const singUpButton = screen.queryByRole("link", {
      name: /sign up/i,
    });

    expect(signInButton).not.toBeInTheDocument();
    expect(singUpButton).not.toBeInTheDocument();
  });

  test("sing out is visible", async () => {
    await renderComponent();

    const signOutButton = screen.getByRole("link", {
      name: /sign out/i,
    });

    expect(signOutButton).toBeInTheDocument();
    expect(signOutButton).toHaveAttribute("href", "/signout");
  });
});

describe("when user is not signed in", () => {
  createServer([
    {
      path: "/api/user",
      method: "get",
      res: () => {
        return { user: null };
      },
    },
  ]);

  test("sign in and sign up are visible", async () => {
    await renderComponent();

    const signInButton = screen.getByRole("link", {
      name: /sign in/i,
    });
    const singUpButton = screen.getByRole("link", {
      name: /sign up/i,
    });

    expect(signInButton).toBeInTheDocument();
    expect(signInButton).toHaveAttribute("href", "/signin");

    expect(singUpButton).toBeInTheDocument();
    expect(singUpButton).toHaveAttribute("href", "/signup");
  });

  test("sing out is not visible", async () => {
    await renderComponent();

    const signOutButton = screen.queryByRole("link", {
      name: /sign out/i,
    });

    expect(signOutButton).not.toBeInTheDocument();
  });
});
