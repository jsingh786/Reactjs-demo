import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from './common/Form'
import RegistrationForm from './common/RegistrationForm'

import {loginRequest} from '../actions'

import {registerRequest} from '../actions'

class Register extends Component {
  constructor (props) {
    super(props)

      this._postLogin = this._postLogin.bind(this)
        this.register = this.register.bind(this)
  }

  render () {
    let {dispatch} = this.props
    let {formState, currentlySending, error} = this.props.data

    return (
  <div>
        <div className="main-page-list text-center">
          <div className="container">
            <div className="signup-form">
              <h2>Create  a Free Client Account Now</h2>
              <h4>Register your Details Below</h4>
              <RegistrationForm data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this.register} btnText={'Register'} error={error} currentlySending={currentlySending} />
            </div>
          </div>
        </div>
        <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
        <h4 className="modal-title">Login</h4>
        <div className="title-border"></div>
        </div>
        <div className="login-inner">
        <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this._postLogin} btnText={'Login'} error={error} currentlySending={currentlySending} />
        <div className="close-popup">
        <a href="javascript:;" data-dismiss="modal"><img src="app/styles/images/close-btn.png" alt="" /></a>
        </div>
        </div>
        </div>
        </div>
        </div>

      <div className="modal fade" id="successModal" role="dialog">
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
        <h4 className="modal-title">Response Message</h4>
        <div className="title-border"></div>
        </div>
        <div className="login-inner">
            <p id="getMessage"> </p>
        <div className="close-popup">
        <a  id="takeToHome"><img src="app/styles/images/close-btn.png" alt="" /></a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
  }

  register (name,address,phone_home,phone_work,email,password,website) {
    this.props.dispatch(registerRequest({name,address,phone_home,phone_work,email,password,website}))
  }

  _postLogin (username, password) {
    this.props.dispatch(loginRequest({username, password}))
  }

}

Register.propTypes = {
  data: React.PropTypes.object,
  history: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Register)
