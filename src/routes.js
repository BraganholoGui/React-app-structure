import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import history from './appHistory';
import Layout from './components/layout';
// import GlobalStyle, { Wrapper } from './globalStyles';
// import store from './reducers/configStore';
import Home from './pages/Home';


const AppRoutes = () => {
    return (
        <Provider data-test="component-app">
            <Router history={history}>
                {/* <GlobalStyle /> */}
                {/* <Wrapper> */}
                <Layout>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        {/* <Redirect path="/" to="/home" /> */}
                    </Switch>
                </Layout>
                {/* </Wrapper> */}
            </Router>
        </Provider >
    );
};

export default AppRoutes;
