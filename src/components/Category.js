import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Category extends Component {
  render() {
    console.log('category props', this.props);
    
    return (
      <div>
        <Link to='/' className='link-home'><h4>Home</h4></Link>
        <h2>Category title</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { category: state.category }
}

// A 2nd parameter of null means we are not binding
// any action creators
export default connect(mapStateToProps, null)(Category);
