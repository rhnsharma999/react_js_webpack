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
