import React from 'react'
import { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from './item.js';
import "./carousal2.css";
import img1 from '../../assets/redzari/redzari/DSC_0260.JPG'
import img2 from '../../assets/redzari/redzari/DSC_0208.JPG'
import img3 from '../../assets/redzari/redzari/DSC_0203.JPG'
import img4 from '../../assets/redzari/redzari/DSC_0191.JPG'
import img5 from '../../assets/redzari/redzari/DSC_0241.JPG'
import img6 from '../../assets/redzari/redzari/DSC_0279.JPG'
import img7 from '../../assets/redzari/redzari/DSC_0286.JPG'
import img8 from '../../assets/redzari/redzari/DSC_0268.JPG'







const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 }
];


const Carousal2 = () => {
	const [items, setItems] = useState([img1, img2, img3, img4, img5, img6, img7, img8]);

	// const addItem = () => {
	// 	const nextItem = Math.max(1, items.length + 1);
	// 	setItems([...items, nextItem]);
	// };

	// const removeItem = () => {
	// 	const endRange = Math.max(0, items.length - 1);
	// 	setItems(items.slice(0, endRange));
	// };

	return (
		<div>
			<div className="main">
				{/* <div className="controls-wrapper">
					<button onClick={removeItem}>Remove Item</button>
					<button onClick={addItem}>Add Item</button>
				</div> */}
				<hr className="seperator" />
				<div className="carousel-wrapper">
					<Carousel breakPoints={breakPoints}>
						{items.map((item) => (
							<Item key={item}>
								{/* {item} */}
								<img src={item} height="500px" width='300px' />
							</Item>
						))}
					</Carousel>
				</div>
			</div>
			);
		</div>
	)
}

export default Carousal2