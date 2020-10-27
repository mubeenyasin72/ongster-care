import React, { Component } from 'react'
import './mainNavbar.css'
import MainLogo from '../../../Images/mainlogo.png'
class HeaderNavbar extends Component {
    render() {
        return (
        <div className="header__navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-2 header__icons">
                        <img className="header__logo" src={MainLogo} alt="" />
                        <p style={{marginTop:"30px",fontSize:"20px"}}>OngsterCare</p>
                    </div>
                    <div className="col-6"></div>
                    <div className="col-1 ">
                        <button className="btn btn-light header__login__button">Login</button>
                    </div>
                    <div className="col-1 ">
                        <button className="btn header__join__button">Join Now</button>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>        
        </div>
        )
    }
}

export default HeaderNavbar;