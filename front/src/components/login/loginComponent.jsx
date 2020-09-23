import { connect } from 'react-redux'
import Login from './login'
import {
    USER_AUTHENTICATION_REQUEST

} from './actions'

const mapStateToProps = state => ({
    user: state.key.user,
})

const mapDispatchToProps = dispatch => ({

    userLoggedInRequest: (username, password) => {
        dispatch({ type: USER_AUTHENTICATION_REQUEST, username, password });
    },

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Login)
