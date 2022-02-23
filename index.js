import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router';
import { Auth0Provider } from "@auth0/auth0-react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css"


ReactDOM.render(
<Auth0Provider
    domain="dev-bf7kjbe1.us.auth0.com"
    clientId="TCancQVh2gAL1UJGZ3Fmmno442foswOQ"
    redirectUri={window.location.origin}
  >
    <Router />,
</Auth0Provider>,
  document.getElementById('root')
);
