import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import { Login, Main } from './pages'

const App = (): JSX.Element => {
    return <Router>
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/main' component={Main} />
            <Redirect from='/' to='/login' />
        </Switch>
    </Router>
}


export default App