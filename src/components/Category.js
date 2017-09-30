import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    return (
      <div>
        <Link to='/' className='link-home'><h4>Home</h4></Link>
        <h2>Category title</h2>
      </div>
    )
  }
}

export default Category;
