import React from "react";
import { Carousel } from "react-responsive-carousel";
import img1 from '../../assets/img/collection/designer.jpeg'
// import img2 from '../../assets/img/collection/effortless-cord.webp'
import img2 from '../../assets/img/collection/red-silk.jpg'
import img3 from '../../assets/img/collection/Lehenga.jpg'
import img4 from '../../assets/img/collection/saree.jpg'
import '../global-components/navbar-v5.css'


// require('../../assets/img/collection/designer.jpeg')
export default () => (
	<Carousel autoPlay infiniteLoop interval={1500}>
		<div className="img">
			<img alt="" src={img1} />
		</div>

		<div className="img">
			<img alt="" src={img2} />
		</div>
		<div className="img">
			<img alt="" src={img3} />
		</div>
		<div className="img">
			<img alt="" src={img4} />
		</div>

		{/* <div>
			<img
				alt=""
				src="https://devlopecode.github.io/Redzari/assets/img/collection/effortless-cord.webp"
			/>
			<p className="legend4">Legend 1</p>
		</div> */}

	</Carousel>
);
