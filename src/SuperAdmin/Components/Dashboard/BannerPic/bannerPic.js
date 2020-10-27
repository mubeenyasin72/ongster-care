import React from 'react'
import './bannerPic.css'
import Image from '../../../../Images/banner.jpg'
function BannerPic() {
    return (
        <div className="banner__container">
            <img className="img-fluid banner__image" src={Image} alt="" />
            <div className="top-left ">
                <h1 className="heading1__text">Care For All you Love</h1>
                <h4 className="heading2__text">In This time of Need. We are here to help</h4>
            </div>
        </div>
    )
}

export default BannerPic;