import React from 'react'
import {Route, Switch} from 'react-router'
import Home from '../Home'

const App = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/test" render={() => (<div>/test</div>)}/>
            <Route render={() => (<div>Miss</div>)}/>
        </Switch>
    </div>
)

export default App
