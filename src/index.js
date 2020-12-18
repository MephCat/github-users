import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from 'react-redux';

import store from "./store";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";

import GithubApiService from "./services/github-api-service";
import { UsersServiceProvider } from "./components/github-service-context";

const githubApiService = new GithubApiService();
ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <UsersServiceProvider value={githubApiService}>
                <Router>
                    <App/>
                </Router>
            </UsersServiceProvider>
        </ErrorBoundry>
    </Provider>,
  document.getElementById('root')
);
