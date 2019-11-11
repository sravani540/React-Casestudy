import React from 'react';
import logo from './logo.svg';
import './element.css';

class Element extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter,
    }
  };
  render() {
    return (
      <div>
         <br/><label>Textbox # {this.state.counter} </label>
          <input type="text" name="textbox" id="textbox" />
      </div>
    );
  }
}

export default Element;
