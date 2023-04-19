import React, { Component } from "react";
import './slickSlider.css'
import Slider from "react-slick";
import img1 from '../../assets/redzari/redzari/DSC_0191.JPG'
import img2 from '../../assets/redzari/redzari/DSC_0279.JPG'
import img3 from '../../assets/redzari/redzari/DSC_0255.JPG'
import img4 from '../../assets/redzari/redzari/DSC_0227.JPG'
import img5 from '../../assets/redzari/redzari/DSC_0232.JPG'
import img6 from '../../assets/redzari/redzari/DSC_0298.JPG'

export default class LatestArticleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 600,
			autoplay: true,
			slidesToShow: 4,
			autoplaySpeed: 1700,
			slidesToScroll: 1
		};
		return (
			<div className="latestSlider-container" >
				<div className="section-title-02 text-center margin-bottom-30">
					<h6>FASHION FOR ALL</h6>
					<h3>LATEST COLLECTION </h3>
				</div>	
					<Slider {...settings}>
					<div className="latest-collection" >
						<img src={img1} />
						<h5>description</h5>
            <p>Rs. xxxxx</p>
					</div>
					<div className="latest-collection" >
					<div>
						<img src={img2}  />
					<h5>description</h5>
							<p>Rs. xxxxx</p>

					</div>
					</div>
					<div className="latest-collection" >
						<img src={img3}  />
						<h5>description</h5>
						<p>Rs. xxxxx</p>

					</div>
					<div className="latest-collection" >
						<img src={img4}  />
						<h5>description</h5>
						<p>Rs. xxxxx</p>

					</div>
					<div className="latest-collection" >
						<img src={img5} />
						<h5>description</h5>
						            <p>Rs. xxxxx</p>

					</div>
					<div className="latest-collection" >
						<img src={img6}  />
						<h5>description</h5>
						<p>Rs. xxxxx</p>

					</div>
				</Slider>
			</div>
		);
	}
}