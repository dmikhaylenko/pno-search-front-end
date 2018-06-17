import "./index.css";
import "typeface-roboto";
import config from "./config"
import ReactDOM from "react-dom"
import React, {Fragment} from "react"
import {Provider, connect} from "react-redux"
import HomePage from "./react/pages/Home/Home"
import createActionCreators from "./redux/actions"
import {createStore, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import apiCallMiddleware from "./redux/middlewares/apiCallMiddleware"



import reducer from "./redux/reducers"

const store = createStore(reducer,
    composeWithDevTools(
        applyMiddleware(apiCallMiddleware)
    )
);

const actionCreatorsMapper = createActionCreators(config);

const statePropertiesMapper = (state) => {
    return {
        $state: state
    }
};

const Application = connect(statePropertiesMapper, actionCreatorsMapper)(({$state, $actions}) => {
    const props = {
        $global: {$actions, $state}
    }

    return (<Fragment>
        <HomePage {...props}/>
    </Fragment>)
});

ReactDOM.render(<Provider store={store}>
    <Application/>
</Provider>, document.getElementById('root'));

