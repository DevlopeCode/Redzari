import { ReactPhotoCollage } from "react-photo-collage";
import img1 from '../../assets/redzari/redzari/DSC_0308.JPG'
import img2 from '../../assets/redzari/redzari/DSC_0307.JPG'
import img3 from '../../assets/redzari/redzari/DSC_0313.JPG'
import img4 from '../../assets/redzari/redzari/DSC_0156.JPG'
import img5 from '../../assets/redzari/redzari/DSC_0314.JPG'
import img6 from '../../assets/redzari/redzari/DSC_0200.JPG'

export const setting = {
	width: "100%",
	height: ['400px', '270px'],
	layout: [2, 4],
	photos: [
		{ source: img1 },
		{ source: img2 },
		{ source: img3 },
		{ source: img4 },
		{ source: img5 },
		{ source: img6 },
	],
	showNumOfRemainingPhotos: true
};

// function App() {
// 	return (
// 		<ReactPhotoCollage {...setting} />
// 	);
// }