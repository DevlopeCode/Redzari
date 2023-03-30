import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class NewArivalV2 extends Component {


  render() {

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'
    let customclass = this.props.customclass ? this.props.customclass : ''

    return <div className={"tranding-area  " + customclass}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-02 text-center">
              <h6>DISCOVER SOMETHING</h6>
              <h3>NEW ARRIVALS</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="nav nav-pills tranding-tab">
              <li className="mt-2"><a data-toggle="pill" href="#one" className="active">NEW IN</a></li>
              <li className="mt-2"><a data-toggle="pill" href="#two">BOUTIQUE</a></li>
              <li className="mt-2"><a data-toggle="pill" href="#three">WOMEN</a></li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade in show active" id="one">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0255.JPG"} alt="" />
                    <span className="out">SOLD OUT</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0255.JPG" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0232.JPG"} alt="" />
                    <span className="sale">SALE 13%</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">FPlaid Cotton Oxford Shirt</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0232.JPG" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0286.JPG"} alt="" />
                    <span className="sale">SALE 13%</span>
                    <span className="new margin-top-35">NEW</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Two-Tone Sleeveless Dress</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0286.JPG" data-name="Two-Tone Sleeveless Dress" data-price="15" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0279.JPG"} alt="" />
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarf</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0279.JPG" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0244.JPG"} alt="" />
                    <span className="new">NEW</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Round neck sweater</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0244.JPG" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0227.JPG"} alt="" />
                    <span className="sale">SALE! 13%</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                    <div className="product-countdown clockdiv" data-countdown="2021/02/02">
                    </div>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarf</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0227.JPG" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="two">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0286.JPG"} alt="" />
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarf</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0286.JPG" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0268.JPG"} alt="" />
                    <span className="new">NEW</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Round neck sweater</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0268.JPG" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0232.JPG"} alt="" />
                    <span className="sale">SALE! 13%</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarf</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0232.JPG" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0255.JPG"} alt="" />
                    <span className="out">SOLD OUT</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0255.JPG" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0298.JPG"} alt="" />
                    <span className="sale">SALE 13%</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">FPlaid Cotton Oxford Shirt</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0298.JPG" data-name="FPlaid Cotton Oxford Shirt" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0260.JPG"} alt="" />
                    <span className="sale">SALE 13%</span>
                    <span className="new margin-top-35">NEW</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Two-Tone Sleeveless Dress</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0260.JPG" data-name="Two-Tone Sleeveless Dress" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="three">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0246.JPG"} alt="" />
                    <span className="sale">SALE! 13%</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarf</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0246.JPG" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0279.JPG"} alt="" />
                    <span className="sale">SALE 13%</span>
                    <span className="new margin-top-35">NEW</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Two-Tone Sleeveless Dress</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0279.JPG" data-name="Two-Tone Sleeveless Dress" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0203.JPG"} alt="" />
                    <span className="out">SOLD OUT</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Faxon Canvas Low-Top Sneaker</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0203.JPG" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0244.JPG"} alt="" />
                    <span className="sale">SALE 13%</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">FPlaid Cotton Oxford Shirt</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0244.JPG" data-name="Faxon Canvas Low-Top Sneaker" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0298.JPG"} alt="" />
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Viscose-Cashmere Scarf</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0298.JPG" data-name="Viscose-Cashmere Scarf" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="product-style-02 margin-top-40">
                  <div className="thumb">
                    <img src={publicUrl + "assets/redzari/redzari/DSC_0208.JPG"} alt="" />
                    <span className="new">NEW</span>
                    <ul className="cart-action-02">
                      <li><a href="#"><i className="icon-heart" /></a></li>
                      <li className="stone-go-top"><Link to="/product-details"><i className="icon-quick-view" /></Link></li>
                    </ul>
                  </div>
                  <div className="content text-left">
                    <span className="brand">BRAND:GEEK</span>
                    <ul className="justify-content-start margin-bottom-10">
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                      <li><a href="#"><i className="fa fa-star-o" /></a></li>
                    </ul>
                    <h6 className="title stone-go-top"><Link to="/product-details">Round neck sweater</Link></h6>
                    <div className="d-flex position-relative">
                      <div className="content-hover-cart"><a className="add-to-cart" data-img="assets/redzari/redzari/DSC_0208.JPG" data-name="Round neck sweater" data-price="450" href="#"><i className="icon-add-to-cat" /> Add to cart</a></div>
                      <div className="content-cart"><a href="#"><i className="icon-add-to-cat" /></a></div>
                      <div className="content-price d-flex flex-column align-self-center">
                        <span className="old-price">Rs400.00</span>
                        <span className="new-price">Rs450.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  }
}

export default NewArivalV2