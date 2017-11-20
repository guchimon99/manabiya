import React from "react"
import { Provider } from "react-redux"
import { browserHistory } from "react-router"
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom"

import App from "containers/App"

import store from "stores/app"

const app = () =>
    <Provider store={store}>
        <BrowserRouter history={browserHistory}>
            <Switch>
                <Route path="/" component={App} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    </Provider>

export default app
