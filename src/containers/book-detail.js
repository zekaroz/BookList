import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component{
  render(){
    if( ! this.props.book){
        return <div>Select a book to see details...</div>
    }
    return (
        <div>
          <h3>Details for:</h3>
          <div>Title: {this.props.book.title} </div>
          <div>Nr. of Pages: {this.props.book.pages} </div>
          <div className="book-description"> {this.props.book.description} </div>
        </div>
    )

  }
}

function mapStateToProps(state){
  return { book: state.activeBook };
}

export default connect(mapStateToProps)(BookDetail);
