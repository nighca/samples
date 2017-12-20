import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Notfound extends Component {
  componentDidMount() {
    console.log('notfound with match', this.props.match);
  }

  render() {
    return (
      <div>
        Notfound
        <Link to="/">
          Home
        </Link>
      </div>
    );
  }
}
