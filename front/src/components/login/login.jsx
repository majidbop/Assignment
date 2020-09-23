import React, { PureComponent } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles/login.scss'
import { Button, TextField } from '@material-ui/core'

class Login extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            errorMessageEmail: '',
            errorMessagePassword: '',
        }
        this.onLoginClick = this.onLoginClick.bind(this)
    }


    async onLoginClick(e) {
        e.preventDefault()

        const { password } = this.state
        let { username } = this.state
        username = username.trim()
        if (username === '') {
            this.setState({ errorMessageEmail: 'Please enter your email address' })
        }
        if (password === '') {
            this.setState({ errorMessagePassword: 'Please enter your password' })
        }

        if (username === '' || password === '') {
            return false
        }

        if (password !== '') {
            this.setState({ errorMessagePassword: '' })
        }
        if (
            username !== '' &&
            !username.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        ) {
            this.setState({
                errorMessageEmail: 'Please enter a valid email address.',
            })
            return false
        }

        this.setState({ errorMessageEmail: '', errorMessagePassword: '' })
        return true
    }


    handleChange(event, fieldName) {
        this.setState({
            [fieldName]: event[fieldName],
        })
    }

    render() {

        return (
            <div className="row justify-content-md-center login">
                <div className="col-md-auto">
                    <form className="login__form row justify-content-md-center" noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Username" variant="outlined" className="col-12 login__textbox" />

                        <TextField id="outlined-basic" type="password" label="Password" password={true} variant="outlined" className="col-12 login__textbox" />
                        <Button className="col-8 center login__btn" variant="contained" color="primary">
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login

Login.defaultProps = {
}
Login.propTypes = {
}
