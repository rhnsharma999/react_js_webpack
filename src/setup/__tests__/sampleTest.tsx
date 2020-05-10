import { shallow } from "enzyme"
import * as React from "react"

describe("this is a sample test", () => {
  const testComponent = (
    <div>
      <h1>Hello World</h1>
    </div>
  )
  const wrapper = shallow(testComponent)
  it("passes snapshot test", () => {
    expect(wrapper).toMatchSnapshot()
  })

  it("test find method", () => {
    expect(wrapper.find("h1")).toHaveLength(1)
  })

  it("test finding h1 tag", () => {
    expect(wrapper.find("h1").text()).toMatch("Hello World")
  })
})
