export default function Signin (props) {
    const [values, setvalues] = useState({
        email: '',
        password: '',
        error: '',
        redirectToReferrer: false
    })
}

const clickSubmit = () => {
    const user = {
        email: values.email || undefined, 
        password: values.password || undefined
    }

    signin (user) .then((data) => {
        if (data.error) {
            setValues({ ...values, error: data.error})
        } else {
            Auth.authenticate(data, () => {
                setValues ({ ...values, error: '', redirectToReferrer: true})
            })
        }
        })
    }

    const {from} = props.location.state || {
        from: {
            pathname: '/'
        }
    }
    const {redirectToReferrer} = values
    if (redirectToReferrer) {
        return (<Redirect to={from}/>)
    }