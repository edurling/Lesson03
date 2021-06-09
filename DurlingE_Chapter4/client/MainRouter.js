import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './core/Home'

const MainRouter = () => {
    return ( <div>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </div>
    )
}

export default MainRouter

<Route path="/users" component={Users}/>
<Route path="/signup" component={Signup}/>
<Route path="/signin" component={Signin}/>
<Route path="/user/:userId" component={Profile}/>

<Switch>
    ...
    <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
    <Route path="/user/:userId" component={profile}/>
</Switch>

<Menu/>
<Switch>
    ...
</Switch>