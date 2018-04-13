import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Content from './Content';
import { createStore } from 'redux';
// import { Provider } from './react-redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

// function createStore(reducer) {
//     let state = null;
//     let listeners = [];
//     const subscribe = listener => listeners.push(listener);
//     const getState = () => state;
//     const dispatch = action => {
//         state = reducer(state, action);
//         listeners.forEach(item => item());
//     };
//     dispatch({});  //初始化state
//     return { getState, dispatch, subscribe };
// }

function themeReducer (state, action) {
    if(!state) {
        return { themeColor: 'red' };
    }

    switch(action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                themeColor: action.themeColor
            };
        default:
            return state;
    }
}

const store = createStore(themeReducer);

class Index extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Index />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
