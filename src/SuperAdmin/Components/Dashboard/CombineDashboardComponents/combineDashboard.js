import React, { Component } from 'react';
import './combineDeshboard.css'
import HeaderNavbar from '../../Navbar/navbar';
import BannerImage from '../BannerPic/bannerPic';
class CombineDashboard extends Component {
    render() {
        return (
           <div className="">
             <HeaderNavbar/>
            <BannerImage/>
           </div>
        )
    }
}
export default CombineDashboard;