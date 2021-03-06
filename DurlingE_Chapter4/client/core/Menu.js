const Menu = withRouter(({history}) => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit">
                MERN Skeleton
            </Typography>
            <Link to="/">
                <IconButton aria-label="Home" style={isActive(history, "/")}>
                    <HomeIcon/>
                </IconButton>
            </Link>
            <Link to="/users">
                <Button style={isActive(History, "/usrs")}>Users</Button>
            </Link>
        </Toolbar>
    </AppBar>))

    const isActive = (history, path) => {
        if (history.location.pathname == path)
        return {color: '#ff4081'}
        else
        return {color: 'ffffff'}
    }

    {
        !Auth.isAuthenticated() && (<span>
            <Link to="/signup">
            <Button style={isActive(history, "/signup")}> Signup </Button>
            </Link>
            <Link to="/signin">
                <Button style={isActive(history, "/signin")}> Sign In</Button>
                </Link>
        </span>)
    }

    {
        auth.isAuthenticated() && (<span>
            <Link to={"/user/" + auth.isAuthenticated() .user._id}>
                <Button style={isActive(history, "/user/"
                +auth.isAuthenticated().user._id) }>
                    My Profile
                </Button>
            </Link>
            <Button color="inherit"
            onClick={() => { auth.clearJWT(() => history.push ('/')) }}>
                Sign Out
            </Button>
        </span>)
    }

    