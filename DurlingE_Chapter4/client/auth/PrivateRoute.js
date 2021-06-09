import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './auth-helper'

const Private Route = ({ component : Component, ...rest }) => (
    <Route {...rest} render={props => )
    auth.isAuthenticated () ? (
        <component {...props}/>
    ) : (
        <redirect to={{
            pathname: '/signin',
            state: { from: props.location }
        }}/>
    )
    )}/>
)

export default PrivateRoute