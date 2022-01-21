import React from "react";
import renderer from "react-test-renderer";

import App from "./App";

describe("<App />", () => {
	it("should return one child", () => {
		const tree = renderer.create(<App />).toJSON() as any;
		expect(tree.children.length).toBe(1);
	});
});
