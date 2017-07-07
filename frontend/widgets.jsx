import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Weather from './weather';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root');
  ReactDOM.render(<div><Clock /> <Weather /></div>, root);
});

//DOMContentLoaded === fires once when everything is loaded EXCEPT for stylesheets. images. subframes
