const clickSubmit = () => {
    const jwt = auth.isAuthenticated()
    const user = {
        name: values.name || undefined, 
        email: values.email || undefined, 
        password: values.password || undefined
    }
    update ({
        userId: matchMedia.params.userId
    }, {
        t: jwt.token
    }, user) .then ((data) => {
        if (data && data.error) {
            setValues ({...values, error: data.error})
        } else {
            setValues ({...values, userId: data._id, redirectToProfile:
            true})
        }
    })
}

if (values.rediretToProfile) {
    return (<Redirect to={'/user/' + values.userId}/>)
}