import { render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Counter from "./Counter"
describe("Counter Component",()=>{
    
    it("renders count and button",()=>{
        render(<Counter/>);
        expect(screen.getByText(/Count :0/)).toBeInTheDocument();
        expect(screen.getByRole("button",{name:/Increment/})).toBeInTheDocument();
    }),
    it("Increment Correctly",async()=>{
        render(<Counter/>);
        const button=screen.getByRole("button",{name:/Increment/})
        await userEvent.click(button);
        expect(screen.getByText(/Count :1/)).toBeInTheDocument();
    }),
    it("Decrement Correctly",async()=>{
        render(<Counter/>);
        const button=screen.getByRole("button",{name:/Decrement/});
        await userEvent.click(button);
        expect(screen.getByText(/Count :-1/)).toBeInTheDocument();
    })
})