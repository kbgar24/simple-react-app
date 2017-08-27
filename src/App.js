import React from 'react';
// import PropTypes from 'prop-types'

//Stateless function (Cannot have state)
// const App = () => <h1>Hello World & Beyond</h1> 

//Class component (Has State)
class App extends React.Component {
 render () {
  return <Button>I <Heart /> React</Button>
 }
}

class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

const Button = (props) => <button>{props.children}</button>

export default App
