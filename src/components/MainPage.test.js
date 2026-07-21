import React from "react";
import App from "./App";
import { render } from "@testing-library/react";

it("expect renders App component", () => {
    const mockStore = {
        robots: [],
        searchField: "",
        isPending: false,
    }
    render(<App store={mockStore} />);
});