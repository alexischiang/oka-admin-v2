import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Login, Main } from './pages'

const App = () :JSX.Element => {
    return <Router>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/main' component={Main}/>
        </Switch>
    </Router>
}


export default App