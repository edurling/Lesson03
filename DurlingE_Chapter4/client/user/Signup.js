export default function Signup () {
    ...consoleconst [values, setValues] = useState ({
        name: '',
        password: '',
        email: '',
        open: false,
        error: ''
    })
    ...
}

const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
}

const clickSubmit = () => {
    const user = {
        name: values.name || undefined, 
        email: values.email || undefined, 
        password: values.password || undefined,
    }
    create (user) .then((data) => {
        if (data.error) {
            setValues ({...values, error: data.error})
        } else {
            setValues ({...values, error: '', open: true})
        }
    })
}

return (
    <div>
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h6" className={classes.title}>
                    Sign up
                </Typography>
                <TextField id="name" label="Name"
                 className={classes.textfield}
                 value={values.email} onChange={handleChange ('name')}
                 margin="normal"/>
                 <br/>
                 <TextField id="email" type="email" label="Email"
                 className={classes.textField}
                 value={values.email} onChange={handleChange ('email')}
                 margin="normal"/>
                 <br/>
                 <Textfield id="password" type="password" labels="passwords"
                 className={classes.textField} Value={values.password}
                 onChange={handleChange('password')} margin="normal"/>
                 <br/>
                 {
                     values.error && (<Typography component="p" color="error">
                         <Icon color="error"
                         className={classes.error}>error</Icon>
                         {values.error}</Typography>)
                 }
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contiained"
                onClick={clicksubmit}
                className={classes.submit}>submit</Button>
            </CardActions>
        </Card>
    </div>
)

<Dialog open={values.open} disableBackdropClick={true}>
    <DialogTitle>New Account</DialogTitle>
    <DialogContent>
        <DialogContentText>
            New account successfully created.
        </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Link to="/signin">
            <Button color="primary" autoFocus="autoFocus" variant="contained">
                Sign In
            </Button>
        </Link>
    </DialogActions>
    </Dialog>