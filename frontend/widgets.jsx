import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById('root');
  ReactDOM.render(<div>React goes here</div>, root);
});

//DOMContentLoaded === fires once when everything is loaded EXCEPT for stylesheets. images. subframes
