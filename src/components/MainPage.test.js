import React from "react";
import { render } from "@testing-library/react";
import MainPage from "./MainPage";
import { createRef } from 'react';

let wrapper;
let wrapper2;
let ref;
let ref2;

beforeEach(() => {
    const mockStore = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: "",
        isPending: false,
    }

    var mockStore2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: "Jack",
            email: "jack@example.com"
        }],
        searchField: "a",
        isPending: false,
    }
    ref = createRef();
    ref2 = createRef();
    wrapper = render(<MainPage {...mockStore} ref={ref} />);
    wrapper2 = render(<MainPage {...mockStore2} ref={ref2} />);
});

it("expect renders MainPage component", () => {
    expect(wrapper).toBeTruthy();
});

it("filters robots correctly", () => {
    expect(ref.current.filterRobots()).toEqual([]);
    expect(ref2.current.filterRobots()).toHaveLength(1);
})