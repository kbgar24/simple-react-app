import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(){
    super()
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }

  update(){
    this.setState({val: this.state.val+1})
  }

  //guaranteed to make into DOM, only fired once, before rendering to DOM
  componentWillMount(){
    console.log('componentWillMount')
    this.setState({m: 2})
  }

  //after rendering to DOM
  componentDidMount(){
    console.log('componentDidMount')
    console.log(ReactDOM.findDOMNode(this))
    this.inc = setInterval(this.update, 500)
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.inc)
  }

  render(){
    console.log('render');
    return (
      <button onClick={this.update}>
        {this.state.val * this.state.m}
      </button>
    )
  }
}

class Wrapper extends React.Component {
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }

  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>UnMount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper
