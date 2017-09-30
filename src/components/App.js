import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCategories, pickCategory } from '../actions';

class App extends Component {
  componentDidMount() {
    console.log('App props, before fetching categories:', this.props);

    if (this.props.categories.length === 0 ) {
      // Get the categories from the API and map them
      // as props on the component.
      fetch('http://jservice.io/api/categories?count=20')
        .then(response => response.json())
        .then(json => this.props.setCategories(json));
    }
  }
  render() {
    console.log('App props, when rendering:', this.props);

    return(
      <div>
        <h2>Jeopardy!</h2>
        {
          this.props.categories.map(category => {
            return (
              <div key={category.id}>
                <Link
                  to='/category'
                  onClick={() => this.props.pickCategory(category)}
                >
                  <h4>{category.title}</h4>
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { categories: state.categories }
}

// The first parameter refers to the function that will
// determine what part of the Redux store we want to make
// available as props on this component.
// The second parameter, setCategories, is the action creator
// we want to use as props.
export default connect(mapStateToProps, { setCategories, pickCategory })(App);
