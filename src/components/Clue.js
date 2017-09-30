import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

class Clue extends Component {
  render(){
    const { answer, question, value } = this.props.clue;
    return(
      <div>
        <h4>{value || 'unknown'}</h4>
          <hr />
          <h5>{question}</h5>
          <hr />
          <h5>{answer}</h5>
      </div>
    );
  }
}

export default Clue;
