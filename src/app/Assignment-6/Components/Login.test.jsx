import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import Login from "./Login";

describe("Login Component", () => {
  it("Login form is working", async () => {
    render(<Login />);

    const usernameInput = await screen.findByLabelText(/username/i);
    await userEvent.type(usernameInput, "Aryan");
    const passwordField = await screen.findByLabelText(/password/i);
    await userEvent.type(passwordField, "Aryan@@@");
    const submitButton=screen.getByRole("button",{name:/Login/i});
    await userEvent.click(submitButton);
    const successMessage=await screen.findByText(/Login Successful/i);
    expect(successMessage).toBeInTheDocument();
  });
});
