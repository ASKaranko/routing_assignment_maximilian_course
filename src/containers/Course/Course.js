import React, { Component } from 'react';

class Course extends Component {
  state = {
    title: null
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadData();
    }
  }

  loadData = () => {
    const query = new URLSearchParams(this.props.location.search);
    let title = null;
    for (let param of query.entries()) {
      title = param[1];
    }
    this.setState({title:title});
  }

  render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id} </p>
            </div>
        );
    }
}

export default Course;