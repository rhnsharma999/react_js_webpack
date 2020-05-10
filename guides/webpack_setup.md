### React typescript webpack setup

---

- Initialise project directory and npm
  ```bash
  mkdir sample-project
  cd sample-project
  npm init -y
  ```
- Install webpack
  ```bash
  npm i webpack webpack-cli -D
  ```
- Initialise webpack config
  - Create a file `webpack.config.js`
    &nbsp;
    ```javascript
    const path = require("path")
    module.exports = {
      entry: "./src/index.tsx",
      output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js",
      },
    }
    ```
- Add typescript
  ```
  npm install --save-dev typescript ts-loader
  ```
- Update webpack config to use typescript loader
  ```javascript
  const path = require("path")
  module.exports = {
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "./dist"),
      fileName: "bundle.js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: "/node_modules/" }],
    },
  }
  ```

* Configure `tsconfig.json`
  ```json
  {
    "compilerOptions": {
      "outDir": "./dist/",
      "noImplicitAny": false,
      "module": "commonjs",
      "target": "es5",
      "jsx": "react",
      "allowJs": true
    }
  }
  ```
* Install react dom and its type declarations

  ```
  npm i react react-dom @types/react @types/react-dom
  ```

* Initialise source directories
  - `src/components/RootComponent.tsx`
  - `src/index.tsx`
    &nbsp;
* Initialise `RootComponent`

  ```javascript
  import * as React from "react"
  export interface RootComponentProps {}

  export interface RootComponentState {}
  class RootComponent extends React.Component<
    RootComponentProps,
    RootComponentState
  > {
    render() {
      return <h1>Hello World</h1>
    }
  }
  export default RootComponent
  ```

- Initialise `index.tsx`

  ```javascript
  import * as React from "react"
  import * as ReactDOM from "react-dom"
  import RootComponent from "./components/RootComponent"

  ReactDOM.render(<RootComponent />, document.getElementById("root"))
  ```

* Initialise an html page to use the generated bundle.
  For this we can use a handy plugin called `html-webpack-plugin` which does the script addition and html page generation for us.

  - install

    ```
    npm i html-webpack-plugin -D
    ```

  - Update webpack config
    ```javascript
    const htmlPlugin = require('html-webpack-plugin')
    //...
    //other code
    //...
    ,plugins : [ new htmlPlugin({ template : './src/index.html'})]
    ```
  - Create the template html page

    - `src/index.html`

      ```html
      <html>
        <head>
          <title>Hello World</title>
        </head>
        <body>
          <div id="root" />
        </body>
      </html>
      ```

* Initialise Dev Server
  `npm install --save-dev webpack-dev-server`
  &nbsp;

* Update `scripts` in `package.json`
  ```javascript
  "scripts": {
  "start": "webpack-dev-server --mode development --open --hot",
  "build": "webpack --mode production"
  }
  ```
