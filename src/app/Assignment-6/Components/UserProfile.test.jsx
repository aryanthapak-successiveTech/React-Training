import UserProfile from "./UserProfile";
import { render, screen } from "@testing-library/react";

describe("User Profile ", () => {
  it("User Profile renders", () => {
    render(<UserProfile />);
    expect(screen.getByText(/User Profile/i)).toBeInTheDocument();
  }),
    it("All Fields show data", () => {
      render(
        <UserProfile
          name="Aryan Thapak"
          email="aryanthapak@gmail.com"
          phoneNo="9098334189"
        />
      );

      expect(screen.getByText(/Name :Aryan Thapak/i)).toBeInTheDocument();
      expect(screen.getByText(/Email :aryanthapak@gmail.com/i)).toBeInTheDocument();
      expect(screen.getByText(/Phone Number :9098334189/i)).toBeInTheDocument();
    });
});
