import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import {Provider} from 'react-redux';
import {Store} from './Store'
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css"


ReactDOM.render(

    <Router />,

  document.getElementById('root')
);
