import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Marker from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Marker />).toJSON()

  expect(tree).toMatchSnapshot()
})
