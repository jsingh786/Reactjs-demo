import React, {Component} from 'react'
 

import {logout} from '../../actions'

class Nav extends Component {
    constructor (props) {
        super(props)
        this._logout = this._logout.bind(this)

    }
  render () {
      let navButtons = this.props.loggedIn ? (
          <li><a onClick={this._logout} className="btn btn-info btn-lg">logout</a></li>
      ) : (
          <li><a data-target="#myModal" data-toggle="modal" className="btn btn-info btn-lg" href="javascript:;">login</a></li>
      )
      let nodesNav
      if(this.props.location.pathname == '/') {
          nodesNav = (
              <ul className="nav navbar-nav">
                  <li className="active"><a className="page-scroll" href="#home">HOME</a></li>
                  <li><a className="page-scroll" href="#aboutUs">About Us</a></li>
                  <li><a className="page-scroll" href="#features">Features</a></li>
                  <li><a className="page-scroll" href="#howworks">How it Works</a></li>
                  <li><a className="page-scroll" href="#blog">Blog</a></li>
                  <li><a className="page-scroll" href="#contactus">Contact Us</a></li>
                  {navButtons}
              </ul>
          )
      } else {
          nodesNav =(
              <ul className="nav navbar-nav">
                  {navButtons}
              </ul>
          )
      }
    return (
        <header className="header">
            <div className="navigation">
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="logo-section">
                            <div className="logo">
                                <a href="/"><img alt="" src="app/styles/images/logo.png" /></a>
                            </div>
                        </div>
                        <div className="nav-section">
                            <div className="navbar-header">
                                <button aria-expanded="false" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" className="navbar-toggle collapsed" type="button"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span> </button>
                            </div>
                            <div id="bs-example-navbar-collapse-1" className="collapse navbar-collapse">
                                {nodesNav}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )

  }

    _logout () {
        this.props.dispatch(logout())
    }

}



Nav.propTypes = {
  loggedIn: React.PropTypes.bool,
  currentlySending: React.PropTypes.bool,
  dispatch: React.PropTypes.func
}

export default Nav
