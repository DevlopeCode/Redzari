import React, { Component } from "react";
import './slickSlider.css'
import Slider from "react-slick";
import img1 from '../../assets/redzari/redzari/DSC_0208.JPG'
import img2 from '../../assets/redzari/redzari/DSC_0260.JPG'
import img3 from '../../assets/redzari/redzari/DSC_0227.JPG'
import img4 from '../../assets/redzari/redzari/DSC_0286.JPG'
import img5 from '../../assets/redzari/redzari/DSC_0232.JPG'
import img6 from '../../assets/redzari/redzari/DSC_0298.JPG'

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 600,
			autoplay:true,
			slidesToShow: 3,
			autoplaySpeed: 1500,
			slidesToScroll: 1
		};
		return (
			<div className="slider-container" >
				<div className="section-title-02 text-center margin-bottom-30">
					{/* <h6>FASHION FOR ALL</h6> */}
					<h3>TRENDING COLLECTION </h3>
				</div>				<Slider {...settings}>
					<div>
						<img src={img1} className="slider-image" />
					</div>
					<div>
						<img src={img2} className="slider-image" />
					</div>
					<div>
						<img src={img3} className="slider-image" />
					</div>
					<div>
						<img src={img4} className="slider-image" />
					</div>
					<div>
						<img src={img5} className="slider-image" />
					</div>
					<div>
						<img src={img6} className="slider-image" />
					</div>
				</Slider>
			</div>
		);
	}
}