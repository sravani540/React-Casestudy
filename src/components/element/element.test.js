import React from 'react';
import ReactDOM from 'react-dom';
import Element from './element';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Element />, div);
  ReactDOM.unmountComponentAtNode(div);
});
