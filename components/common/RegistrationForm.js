import React, {Component} from 'react'
import Validation from 'react-validation'
import validator from 'validator'
import ErrorMessage from './ErrorMessage'
import LoadingButton from './LoadingButton'

import {changeForm} from '../../actions'

class RegistrationForm extends Component {
  constructor (props) {

    super(props)

    this._onSubmit = this._onSubmit.bind(this)
    this._changeName = this._changeName.bind(this)
    this._changeAddress = this._changeAddress.bind(this)
    this._changeEmail = this._changeEmail.bind(this)
    this._changePhoneHome = this._changePhoneHome.bind(this)
    this._changePhoneWork = this._changePhoneWork.bind(this)
    this._changePassword = this._changePassword.bind(this)
    this._passwordConfirm = this._passwordConfirm.bind(this)
    this._changeWebsite = this._changeWebsite.bind(this)
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
          numeric: {
              rule: value => {
                  return validator.isNumeric(value);
              },
              hint: value => {
                  return <span className='form-error is-visible'>{value} isn't a number.</span>
              }
          },
          website:{
             rule: value => {
                  return validator.isURL(value);
              },
              hint: value => {
                  return <span className='form-error is-visible'>{value} isn't a Url.</span>
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
        <div className="form-group col-lg-6 col-sm-12">
          <Validation.components.Input
                type="text"
                onChange={this._changeName}
                className="form-control user-icon"
                id="name"
                name="name"
                value=''
                placeholder="Name"
                validations={['required']}
          />
        </div>
        <div className="form-group col-lg-6 col-sm-6">
          <Validation.components.Input
              type="text"
              onChange={this._changeAddress}
              className="form-control user-address"
              id="address"
              name="address"
              value=''
              placeholder="Address"
              validations={['required']}
          />
        </div>
        <div className="form-group col-lg-12 col-sm-6">
          <Validation.components.Input
              type="text"
              name="phone_home"
              onChange={this._changePhoneHome}
              className="form-control user-landline-icon"
              value=''
              id="phone_home"
              placeholder="Phone Home"
              validations={['required','numeric']}
          />
        </div>
        <div className="form-group col-lg-12 col-sm-6">
          <Validation.components.Input
              type="text"
              name="phone_work"
              onChange={this._changePhoneWork}
              className="form-control user-phone-icon"
              value=''
              id="phone_work"
              placeholder="Phone Work"
              validations={['required','numeric']}
          />
        </div>
        <div className="form-group col-lg-12 col-sm-12">
          <Validation.components.Input
              type="text"
              name="email"
              onChange={this._changeEmail}
              className="form-control mail-icon"
              value=''
              id="email"
              placeholder="Email"
              validations={['required','email']}
          />
        </div>
        <div className="form-group col-lg-6 col-sm-6">
          <Validation.components.Input
              type="password"
              onChange={this._changePassword}
              value=''
              className="form-control password-icon"
              id="password"
              name="password"
              placeholder="Password"
              validations={['required']}
          />
        </div>

        <div className="form-group col-lg-6 col-sm-6">
          <Validation.components.Input
              type="password"
              onChange={this._passwordConfirm}
              value=''
              className="form-control password-icon"
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Confirm Password"
              validations={['required','password']}
          />
        </div>

        <div className="form-group col-lg-12 col-sm-12">
          <Validation.components.Input
              type="text"
              onChange={this._changeWebsite}
              value=''
              className="form-control user-website-icon"
              id="website"
              name="website"
              placeholder="Website"
              validations={['required','website']}
          />
        </div>
        <div className="form-group col-lg-12 col-sm-12">
            <Validation.components.Button className='btn signup-submit txt-upper'>{this.props.btnText}</Validation.components.Button>
        </div>
      </Validation.components.Form>
    )
  }

    _changeName (event) {
    this._emitChange({...this.props.data, name: event.target.value})
  }

    _changeAddress (event) {
    this._emitChange({...this.props.data, address: event.target.value})
  }

    _changeEmail (event) {
    this._emitChange({...this.props.data, email: event.target.value})
  }

    _changePhoneHome (event) {
    this._emitChange({...this.props.data, phone_home: event.target.value})
  }

    _changePhoneWork (event) {
    this._emitChange({...this.props.data, phone_work: event.target.value})
  }

    _changePassword (event) {
    this._emitChange({...this.props.data, password: event.target.value})
  }

    _passwordConfirm (event) {
    this._emitChange({...this.props.data, passwordConfirm: event.target.value})
  }

    _changeWebsite (event) {
    this._emitChange({...this.props.data, website: event.target.value})
  }

  _emitChange (newFormState) {
    this.props.dispatch(changeForm(newFormState))
  }

  _onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.props.data.name,this.props.data.address,this.props.data.phone_home,this.props.data.phone_work,this.props.data.email,this.props.data.password,this.props.data.website)
  }
}

RegistrationForm.propTypes = {
  dispatch: React.PropTypes.func,
  data: React.PropTypes.object,
  onSubmit: React.PropTypes.func,
  changeForm: React.PropTypes.func,
  btnText: React.PropTypes.string,
  error: React.PropTypes.string,
  currentlySending: React.PropTypes.bool
}

export default RegistrationForm
