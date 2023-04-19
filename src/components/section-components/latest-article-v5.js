import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/redzari/redzari/DSC_0191.JPG'
import img2 from '../../assets/redzari/redzari/DSC_0279.JPG'
import img3 from '../../assets/redzari/redzari/DSC_0255.JPG'
import img4 from '../../assets/redzari/redzari/DSC_0227.JPG'
import parse from 'html-react-parser';
// import img1 from ''

class LatestArticleV5 extends Component {



  render() {
    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var today = new Date(),
      date = (monthNames[today.getMonth()]) + " " + today.getDate() + ',' + today.getFullYear();



    return <div className="article-area margin-top-75 stone-go-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-02 text-center margin-bottom-30">
              <h6>FASHION FOR ALL</h6>
              <h3>LATEST COLLECTION </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="article-style-02">
              <div className="thumb">
                <img src={img1} width="260px" height="400px" alt="" />
              </div>
              <div className="content">
                {/* <span className="date pink-date">{date}</span> */}
                <h4><Link to="/collections">Never putting your Cocktail down to leave</Link></h4>
                <p>It reopened this year following a refurb which aims to cement its place a surfer’s paradise. It now boasts two.</p>
                <div className="btn-wrapper">
                  {/* <Link to="/blog-details" className="btn">Read more</Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="article-style-02">
              <div className="thumb">
                <img src={img2} width="260px" height="400px" alt="" />
              </div>
              <div className="content">
                {/* <span className="date pink-date">{date}</span> */}
                <h4><Link to="/collection">7 Things You Can’t Wear After Labor Day Read</Link></h4>
                <p>Typography is the work of typesetters, compositors, typographers, graphic designers, art directors, manga</p>
                <div className="btn-wrapper">
                  {/* <Link to="/blog-details" className="btn">Read more</Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="article-style-02">
              <div className="thumb">
                <img src={img3} width="260px" height="400px" alt="" />
              </div>
              <div className="content">
                {/* <span className="date pink-date">{date}</span> */}
                <h4><Link to="/collection">Never putting your Cocktail down to leave</Link></h4>
                <p>It reopened this year following a refurb which aims to cement its place a surfer’s paradise. It now boasts two.</p>
                <div className="btn-wrapper">
                  {/* <Link to="/blog-details" className="btn">Read more</Link> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="article-style-02">
              <div className="thumb">
                <img src={img4} width="260px" height="400px" alt="" />
              </div>
              <div className="content">
                {/* <span className="date pink-date">{date}</span> */}
                <h4><Link to="/collection">Never putting your Cocktail down to leave</Link></h4>
                <p>It reopened this year following a refurb which aims to cement its place a surfer’s paradise. It now boasts two.</p>
                <div className="btn-wrapper">
                  {/* <Link to="/blog-details" className="btn">Read more</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  }
}

export default LatestArticleV5