import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

ReactDom.render(
  <App message="platzi"/>, // el componente que se va a renderizar
  document.getElementById('app') // lugar donde hara el render
);