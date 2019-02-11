import React, { Component } from "react"
import { connect } from "react-redux"

import HelloWorld from "../components/HelloWorld"
import ButtonGroup from "./ButtonGroup"

class App extends Component {
  render() {
    const { tech } = this.props
    return [
      <HelloWorld key={1} tech={tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ]
  }
}

const mapStateToProps = ({ tech }) => ({ tech })

export default connect(
  mapStateToProps,
  null
)(App)
