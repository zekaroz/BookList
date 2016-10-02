import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{

  renderList(){
      return this.props.books.map((book) => {
        return (
          <li
              key={book.title}
              onClick= { () => this.props.selectBook(book) } 
              className="list-group-item">
            {book.title}
          </li>
        )
      });
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        { this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return { books: state.books };
}

// Anything return from this functoin will end up as props
// on the BookList container
function mapDispatchToProps(dispatch){
  // sempre que é chamado o metodo selectBook, o resultado
  // tem que ser passado a todos os reducers
  return bindActionCreators( { selectBook: selectBook }, dispatch );
}

// Connect returns a container that maps the app State with
// this BookList class.
//Promote BookList from a component to a container;
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
