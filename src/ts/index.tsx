import * as React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => (<div className="hello">salsa picante</div>);

window.onload = () => {
  ReactDOM.render(<Hello />, document.getElementById('app'));
};