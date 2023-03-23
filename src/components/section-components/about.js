import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import '../global-components/navbar-v5.css'

class About extends Component {



	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imagealt = 'image'

		return <div className="about-content margin-top-80">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<div
							className="content-left"
						>
							<h3>We take fashion personally &amp; we bring you happiness</h3>
							<p>REDZARI innovated casing multiple contrivers under one roof and is the best- known developer store in India. The idea began in 2016 with the idea of showcasing exquisite artificer and design in India. With an miscellaneous range of hand- picked styles ranging from marriage Trousseau, Handcrafted clothes for all your wardrobe needs.</p>
							<h4>Our Hand picked Curation</h4>
							<p>Sarees | Lehangas | Anarkali | Gowns | Kurtis | Dresses | Kaftans | Bottoms | Sharara Set | Co-ords</p>
							<h4>Designer Festive Wear for all Your Special Occasions:</h4>
							<p>Big Luxury Sale | Festive Gifting | Republic Day | Independence Day | Holi | Black Friday | Ramadan/Eid | Raksha Bandhan | Krishna Janmashtami | Ganesh Chaturthi | Karva Chauth | Diwali | Navaratri | Dussehra | Baisakhi | Lohri | Mother’s Day | Christmas</p>
							<span>Redzari</span>

						</div>
					</div>
					<div className="col-lg-7">
						<div className="thumb">
							{/* <img src={publicUrl+"assets/img/others/about.png" }alt="" /> */}
							<ReactPlayer url='https://www.youtube.com/watch?v=R3bC0ThQ2pM' className="about-vid" controls={false} />
							<ReactPlayer url='https://www.youtube.com/watch?v=R3bC0ThQ2pM' className="about-vid-responsive" controls={false} width={380} height={200} />
							{/* video button */}
							{/* <div className="video-btn-style-01">
			            <a href="#"><i className="fa fa-play" /></a>
			          </div> */}
						</div>
					</div>
				</div>
			</div>
		</div>

	}
}

export default About