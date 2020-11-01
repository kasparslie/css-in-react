import React, { Component } from 'react';
import './stars.css'
import BeautyStars from 'beauty-stars';

export default class Stars extends Component {
  state = { value: 0 };
  render() {
    return (
    <div className="stars">
      <BeautyStars
        value={this.state.value}
        onChange={value => this.setState({ value })}
      />
      </div>
    );
  }
}