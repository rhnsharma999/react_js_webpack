### Test environment setup for React typescript with Enzyme and Jest

---

- Install ts-jest the required types

  ```bash
  npm install --save-dev raf jest ts-jest @types/jest
  ```

  &nbsp;

- Add `jest.config.js`
  Before running any tests in typescript, we need to transpile these to javascript so that it can be executed.

  ts-jest comes with a preprocessor which can be used for this purpose.

  ```javascript
  module.exports = {
    moduleFileExtensions: ["ts", "tsx", "js"],
    transform: {
      "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js",
    },
    setupFiles: ["raf/polyfill"],
    testRegex: "/__tests__/.*\\.(ts|tsx|js)$",
    setupTestFrameworkScriptFile: "<rootDir>src/setup/setupTests.ts",
  }
  ```

- Add enzyme

  ```bash
  npm install --save-dev enzyme enzyme-adapter-react-16
  npm install --save-dev @types/enzyme @types/enzyme-adapter-react-16
  ```

- Configure enzyme adapter

  ```typescript
  // src/setupTests.ts
  import * as Enzyme from "enzyme"
  import * as Adapter from "enzyme-adapter-react-16"

  Enzyme.configure({
    adapter: new Adapter(),
  })
  ```

- For snapshot matching we may also need a snapshot serialiser. We can use _enzyme-to-json_.

  ```bash
  npm install --save-dev enzyme-to-json
  ```

  - Add the following key to jest.config.js
    `"snapshotSerializers": ["enzyme-to-json/serializer"]`

* Write a sample test

  ```typescript
  import { shallow } from "enzyme"
  import * as React from "react"
  import RootComponent from "../../components/RootComponent/RootComponent"

  describe("this is a sample test", () => {
    it("executes succesfully", () => {
      const wrapper = shallow(<RootComponent />)
      expect(wrapper).toMatchSnapshot()
    })
  })
  ```

##### Issues faced

- Ensure if you are snapshot testing or using a component that your test file has the extension `.tsx` or its gonna screw it up.
