import React from 'react'
import {Route, Switch} from 'react-router'
import Dashboard from '../Dashboard'
import '../../assets/styles/app.css'

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/test" render={() => (<div>/test</div>)}/>
            <Route render={() => (<div>Miss</div>)}/>
        </Switch>
    </div>
)

export default App
