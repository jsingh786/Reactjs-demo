import React, {Component} from 'react'
import Validation from 'react-validation'
import validator from 'validator'
import ErrorMessage from './ErrorMessage'
import LoadingButton from './LoadingButton'

import {changeForm} from '../../actions'

class Form extends Component {
  constructor (props) {
    super(props)

    this._onSubmit = this._onSubmit.bind(this)
    this._changeUsername = this._changeUsername.bind(this)
    this._changePassword = this._changePassword.bind(this)
  }
  render () {

    Object.assign(Validation.rules, {
      required: {
        rule: value => {
          return value.toString().trim();
        },
        hint: value => {
          return <span className='form-error is-visible'>This field is required</span>
        }
      },
      email: {
        rule: value => {
          return validator.isEmail(value);
        },
        hint: value => {
          return <span className='form-error is-visible'>{value} isn't an Email.</span>
        }
      },
      password: {
        rule: (value, components) => {
          const password = components.password.state;
          const passwordConfirm = components.passwordConfirm.state;
          const isBothUsed = password
              && passwordConfirm
              && password.isUsed
              && passwordConfirm.isUsed;
          const isBothChanged = isBothUsed && password.isChanged && passwordConfirm.isChanged;

          if (!isBothUsed || !isBothChanged) {
            return true;
          }

          return password.value === passwordConfirm.value;
        },
        hint: () => <span className="form-error is-visible">Passwords should be equal.</span>
      }
    });
    let {error} = this.props

    return (
      <Validation.components.Form className='row' onSubmit={this._onSubmit}>
        <div className='form-group col-lg-12 col-sm-12'>
          <Validation.components.Input
            className='form-control login-icon username-icon'
            type='text'
            id='username'
            name='username'
            value={this.props.data.username}
            placeholder='Email'
            onChange={this._changeUsername}
            validations={['required', 'email']}
             />
        </div>
        <div className='form-group col-lg-12 col-sm-12'>
          <Validation.components.Input
            className='form-control password-login-icon'
            id='password'
            type='password'
            name='password'
            value=''
            placeholder='Password'
            onChange={this._changePassword}
            validations={['required']}
          />
        </div>
        <div className='form-group col-lg-12 col-sm-12'>
          <Validation.components.Button className='btn signup-submit txt-upper'>{this.props.btnText}</Validation.components.Button>
        </div>
      </Validation.components.Form>
    )
  }

  _changeUsername (event) {
    this._emitChange({...this.props.data, username: event.target.value})
  }

  _changePassword (event) {
    this._emitChange({...this.props.data, password: event.target.value})
  }

  _emitChange (newFormState) {
    this.props.dispatch(changeForm(newFormState))
  }

  _onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.props.data.username, this.props.data.password)
  }
}

Form.propTypes = {
  dispatch: React.PropTypes.func,
  data: React.PropTypes.object,
  onSubmit: React.PropTypes.func,
  changeForm: React.PropTypes.func,
  btnText: React.PropTypes.string,
  error: React.PropTypes.string,
  currentlySending: React.PropTypes.bool
}

export default Form
