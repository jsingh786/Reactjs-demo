import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from './common/Form'

import {loginRequest} from '../actions'

class Home extends Component {
    constructor (props) {

        super(props)

        this.postLogin = this.postLogin.bind(this)
    }

  render () {

      let {dispatch} = this.props
      let {formState, currentlySending, error} = this.props.data

    return (
    <span>
        <div className="home-banner" id="home">
          <div className="container">
          <div className="home-search">
          Create Proposals, Tenders and Quotes on the Spot for free
           <div className="search-bar">
              <input type="text" placeholder="Search Contractors"/>
              <input type="submit" className="home-srch-btn" value=""/>
          </div>
          </div>
          </div>
          </div>
          <div className="signup-section">
          <div className="container">
          <ul>
          <li>
          <a href="register" className="contractor-sign">Sign up as<span>Client</span></a>
      </li>

      </ul>
      </div>
      </div>
      <div className="how-works" id="howworks">
          <div className="container">
          <div className="how-works-inner">
          <h2 className="section-head">How it Works</h2>
      <h4 className="sud-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
      <div className="working-img-main">
          <div className="working-img">
          <img src="app/styles/images/works-img.png" alt="" />
          </div>
          <ul>
          <li>
          <img src="app/styles/images/work-1.png" alt="" />
          <div className="working-txt">
          <h4>Create an Account</h4>
      <p>Create your account by adding information that never changes. Such as your address and name.</p>
      </div>
      </li>
      <li>
      <img src="app/styles/images/work-2.png" alt="" />
          <div className="working-txt">
          <h4>Write Proposal</h4>
      <p>While you are at the clients site, you can easily add the materials you need to get the job done. You can decide what level of detail you want for each material and price. Also, you will probably need some of your people on the job.</p>
      </div>
      </li>
      <li>
      <img src="app/styles/images/work-3.png" alt="" />
          <div className="working-txt">
          <h4>Win the Contract</h4>
      <p>You are now ready to send the client the proposal but before you do that, you can check out the proposal summary. If everything looks fine, you can now send the proposal to the client.</p>
      </div>
      </li>
      </ul>
      </div>
      </div>
      </div>
      </div>
      <div className="parallex-comment" id="aboutUs">
          <div className="container">
          <div className="main-comment">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
      Maecenas mollis laoreet eros.
      </div>
      </div>
      </div>
      <div className="feature-main" id="features">
          <div className="container">
          <h2 className="section-head">Important Features</h2>
      <h4 className="sud-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
      <ul>
      <li>
      <a href="javascript:;">
          <span><i className="fa fa-phone" aria-hidden="true"></i></span>
          <h3>Lorem ipsum dolor sit</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis laoreet eros, posuere convallis justo. </p>
      </a>
      </li>
      <li>
      <a href="javascript:;">
          <span><i className="fa fa-wifi" aria-hidden="true"></i></span>
          <h3>Lorem ipsum dolor sit</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis laoreet eros, posuere convallis justo. </p>
      </a>
      </li>
      <li>
      <a href="javascript:;">
          <span><i className="fa fa-plane" aria-hidden="true"></i></span>
          <h3>Lorem ipsum dolor sit</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis laoreet eros, posuere convallis justo. </p>
      </a>
      </li>
      <li>
      <a href="javascript:;">
          <span><i className="fa fa-wifi" aria-hidden="true"></i></span>
          <h3>Lorem ipsum dolor sit</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis laoreet eros, posuere convallis justo. </p>
      </a>
      </li>
      <li>
      <a href="javascript:;">
          <span><i className="fa fa-cog" aria-hidden="true"></i></span>
          <h3>Lorem ipsum dolor sit</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis laoreet eros, posuere convallis justo. </p>
      </a>
      </li>
      <li>
      <a href="javascript:;">
          <span><i className="fa fa-map-marker" aria-hidden="true"></i></span>
          <h3>Lorem ipsum dolor sit</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis laoreet eros, posuere convallis justo. </p>
      </a>
      </li>
      </ul>
      </div>
      </div>
      <div className="benefited-people" id="blog">
          <div className="container">
          <h2 className="section-head">People Who have Benefited</h2>
      <h4 className="sud-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
      <ul>
      <li>
      <img src="app/styles/images/people-01.png" alt=""/>
          <h3>Tim Scott</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis laoreet eros, posuere convallis justo. Quisque bibendum at augue in hendrerit. Donec eget metus quam.</p>
      <p>Suspendisse tempus blandit ipsum a rhoncus. Donec at egestas lorem. Etiam hendrerit nec lorem sit amet.</p>
      </li>
      <li>
      <img src="app/styles/images/people-02.png" alt=""/>
          <h3>Rayan Miller</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis laoreet eros, posuere convallis justo. Quisque bibendum at augue in hendrerit. Donec eget metus quam.</p>
      <p>Suspendisse tempus blandit ipsum a rhoncus. Donec at egestas lorem. Etiam hendrerit nec lorem sit amet.</p>
      </li>
      <li>
      <img src="app/styles/images/people-03.png" alt=""/>
          <h3>Mark Sandos</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis laoreet eros, posuere convallis justo. Quisque bibendum at augue in hendrerit. Donec eget metus quam.</p>
      <p>Suspendisse tempus blandit ipsum a rhoncus. Donec at egestas lorem. Etiam hendrerit nec lorem sit amet.</p>
      </li>
      <li>
      <img src="app/styles/images/people-04.png" alt=""/>
          <h3>David Smith</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis laoreet eros, posuere convallis justo. Quisque bibendum at augue in hendrerit. Donec eget metus quam.</p>
      <p>Suspendisse tempus blandit ipsum a rhoncus. Donec at egestas lorem. Etiam hendrerit nec lorem sit amet.</p>
      </li>
      </ul>
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
                        <Form data={formState} dispatch={dispatch} history={this.props.history} onSubmit={this.postLogin} btnText={'Login'} error={error} currentlySending={currentlySending} />
                        <div className="close-popup">
                            <a href="javascript:;" data-dismiss="modal"><img src="app/styles/images/close-btn.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </span>
    )
  }

    postLogin (username, password) {
        this.props.dispatch(loginRequest({username, password}))
    }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Home)
