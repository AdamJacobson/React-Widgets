import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root');
  ReactDOM.render(<Clock />, root);
});

//DOMContentLoaded === fires once when everything is loaded EXCEPT for stylesheets. images. subframes
