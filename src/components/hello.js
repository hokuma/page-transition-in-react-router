import React, { Component } from 'react';

class Hello extends  Component {
  render() {
    return (
      <div>Hello {this.props.location.query.name || 'World'}</div>
    );
  }
}

export default Hello;
