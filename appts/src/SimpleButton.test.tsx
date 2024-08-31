import { render, screen } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";
//import userEvent from "@testing-library/user-event";

test ( "Change on off when the button is clicked", async () => {
//    const user = userEvent.setup();

    render(<SimpleButton />);

    const simpleButton = screen.getByRole("button");

//    expect(simpleButton).toContainEqual(<button>OFF</button>);

//    await user.click(simpleButton);
    
});
