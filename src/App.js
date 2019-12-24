import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from './routes'
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <Router>
                {renderRoutes(routes)}
            </Router>
        </Provider>
    );
}

export default App;
