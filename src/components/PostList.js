import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
 
class PostList extends Component {
  componentDidMount() {
    console.log(this.props)
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        PostL
      </div> 
    );
  }
}

export default connect(null, { fetchPosts })(PostList)
