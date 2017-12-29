// even though not including directly, it's needed for transpilation
// needs to be there for any components with jsx
import React, { Component } from 'react'

// "functional component"
// const SearchBar = () => {
// this is a function, not a class
//   return <input />
// }

// this is a class component
// this is if we want the component to have "internal record keeping"
// "Awareness of itself and what's happened to it since it was rendered"
// more intelligent / complex than a functional component
// every class-based component must have a render method, which must return jsx
class SearchBar extends Component {
  constructor(props) {
    // each class-based component has its own state
    // whenever state is changed, the component re-renders, and forces children to re-render too

    // to initialize state (and other variables), add new method "constructor" and make a state object
    // called automtically whenever a new instance is created
    super(props) // calling method from parent class Component
    
    // each instance has its own copy of state
    // only in constructor do we do "this.state="
    // everywhere else, this.setState()
    this.state = { term: '' } // we'll record user's search term on this 'term' property
  }

  render() {
    // wrap js in curly braces within jsx
    // "controlled field" = field whose value is set by the state
    //    value={this.set.xxx}
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} /> 
        Value of input: {this.state.term}
      </div>
    )
    }

  // onInputChange(event) {
  //   // never: this.state.term = event.target.value
  //   // always: this.setState() so react can respond to changed state (rerender component)
  //   this.setState({ term: event.target.value })
  // }
}

export default SearchBar

