import React from 'react';
import logo from './logo.svg';
import './App.css';
import Section from '../section/section';
import Element from '../element/element';


class App extends React.Component {

  constructor() {
    super();

    this.displayData = [];

    this.state = {
      sections: [],
      vcounter: 0,
      hcounter: 0,
      elements: []
    }

    this.appendHData = this.appendHData.bind(this);
    this.appendVData = this.appendVData.bind(this);
  };

  appendHData() {
    this.setState({
      sections: [...this.state.sections, <Section counter={this.state.hcounter} />]
    })
    this.setState(prevState => {
      return { hcounter: prevState.hcounter + 1 }
    });
  }

  appendVData() {
    this.setState({
      elements: [...this.state.elements, <Element counter={this.state.vcounter} />]
    })
    this.setState(prevState => {
      return { vcounter: prevState.vcounter + 1 }
    });
  }

  render() {
    return (
      <div id="mainContainer" className="center">
        <h1>Retail Disputes Case Study</h1>

        <h3>Add Sections</h3>
        <div className="divCenter">{this.state.sections}</div>

        <br />
        <div>
          <span>Form Elements</span>
          <div>{this.state.elements}</div>
        </div>

        <div>
          <button id="hform" onClick={this.appendHData}>Append elements horizantally</button>
          <button id="vform" onClick={this.appendVData}>Append elements vertically</button>
        </div>
      </div>
    );
  }
}


export default App;
