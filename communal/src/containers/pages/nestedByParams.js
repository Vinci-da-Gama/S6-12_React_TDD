import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { getBooks } from '../../actions';
import UlCompo from '../../components/contents/ul';
import SigCompo from '../../components/contents/single-book';

class NestedBooksViaIdCompo extends Component {

    componentWillMount() {
        this.props.getBooks();
    }

    render() {
        if (this.props.books.length === 0 || !this.props.books) {
            return (
                <div>
                    loading books...
                </div>
            );
        }
        return (
            <div className="row mx-3">
                <div className="col-12">
                    <UlCompo collection={ this.props.books } match={ this.props.match } />
                </div>
                <div className="col-12">
                    <Route path={ `${this.props.match.path}/:bookId` }
                        render={(props) => (<SigCompo {...props} books={this.props.books} />)} />
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { books: state.books.books };
};

// const mapDispatchToProps = () => {
// };

export default connect(mapStateToProps, { getBooks })(NestedBooksViaIdCompo);
