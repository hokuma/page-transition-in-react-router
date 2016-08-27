import React, { Component } from 'react';
import { sendName } from '../actions';

class Form extends Component {
  onClick() {
    sendName(this.state.name);
  }

  onChange(e) {
    this.setState({name: e.target.value});
  }

  render() {
    return (
      <div>
        Name: <input type='text' onChange={this.onChange.bind(this)} />
        <button onClick={this.onClick.bind(this)}>Go</button>
      </div>
    );
  };
}

export default Form;
