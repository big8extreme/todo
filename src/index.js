import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LogRocket from 'logrocket';
import * as Sentry from '@sentry/browser';
import setupLogRocketReact from 'logrocket-react';
LogRocket.init('70dp3y/todo');

Sentry.init({dsn: "https://e3d4b041ba764f95a8111ef118df6617@sentry.c-ops.com/15"});

setupLogRocketReact(LogRocket);

LogRocket.getSessionURL(sessionURL => {
  Sentry.configureScope(scope => {
    scope.setExtra('sessionURL', sessionURL);
  });
});


ReactDOM.render(<App />, document.getElementById('root'));
