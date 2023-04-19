import React, { Component } from "react";
import Slider from "react-slick";
import './carousel.css'
import img1 from '../../assets/img/banner/Banner_x800.webp'
import img2 from '../../assets/img/banner/mokshaa-utsavv-banner.webp'
import img3 from '../../assets/img/banner/eid.webp'
import img4 from '../../assets/img/banner/indian-clothes-in-new-zealand.webp'




export default class SimpleSlider2 extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay:true,
			autoplaySpeed: 1700,
			slidesToScroll: 1
		};
		return (
			<div>
				<Slider {...settings}>
					<div className="banner" >
					<img src={img1}  />
					</div>
					<div className="banner" >
						<img src={img2} />
					</div>
					<div className="banner" >
						<img src={img3} />
					</div>
					<div className="banner">
						<img src={img4}  />
					</div>
					{/* <div>
					  
						<h3>5</h3>
					</div>
					<div>
						<h3>6</h3>
					</div> */}
				</Slider>
			</div>
		);
	}
}


