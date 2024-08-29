import { render, screen } from "@testing-library/react";
import { SimpleButton } from "./SimpleButton";

test ( "Change on off when the button is clicked", async () => {
    render(<SimpleButton />);

    const simpleButton = screen.getByRole("button");
//    expect(simpleButton).toContainEqual(<button>OFF</button>);
});
