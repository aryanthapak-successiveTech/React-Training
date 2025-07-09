import { screen,render } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import BasicModal from "./Modal";

describe("Modal Component",()=>{
    it("Modal Button Renders",()=>{
        render(<BasicModal title="Some Title" text="Some Text"/>);
        expect(screen.getByRole("button",{name:/OPEN MODAL/i})).toBeInTheDocument();
    }),
    it("Modal Opens and closes",async()=>{
        render(<BasicModal title="Some Title" text="Some Text"/>);
        const openButton=screen.getByRole("button",{name:/OPEN MODAL/i});
        await userEvent.click(openButton);
        expect(screen.getByText(/Some Title/i)).toBeInTheDocument();
        expect(screen.getByText(/Some text/i)).toBeInTheDocument();
        const closeButton=screen.getByRole("button",{name:/Close/});
        await userEvent.click(closeButton);
        expect(screen.getByRole("button",{name:/OPEN MODAL/i})).toBeInTheDocument();
    })
})