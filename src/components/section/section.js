import React from 'react';
import logo from './logo.svg';
import './section.css';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
    }
  };
  render() {
    return (
      <div style={{float:"left"}} id={this.props.counter}>
        Section {this.state.counter}
      </div>
    );
  }
}

export default Section;
