import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import GoogleMap from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<GoogleMap />).toJSON()

  expect(tree).toMatchSnapshot()
})
