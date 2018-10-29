import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import {createBrowserHistory} from 'history'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'
import configureStore from './configureStore'

const history = createBrowserHistory()
const store = configureStore(history)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister()
