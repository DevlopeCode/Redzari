import React from 'react'
import img from "../../assets2/category.jpg"
import { Link } from 'react-router-dom'
import '../global-components/navbar-v5.css'



const Category = () => {
	return (
		<div className='category-main'>
			<div
				className='category-demo'
				style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", height: "620px", margin: "0px 0px 0px 60px" }}>

				<div style={{ margin: "0px" }} >
					<h5 style={{ color: "white", padding: "20px 0px 0px 0px", color: "#FF8E78" }} >Category</h5>
					<div
						className='category-div'
						style={{ display: "flex", flexDirection: "column", width: "130px" }}>
						<ul style={{ listStyle: "none" }}>
							<Link to="/collection" ><li style={{ fontSize: "12px" }} >Anarkali</li></Link>
							<Link to="/collection" ><li style={{ fontSize: "12px" }} >Saree</li></Link>
							<Link to="/collection" ><li style={{ fontSize: "12px" }} >Lehangas</li></Link>
							<Link to="/collection" ><li style={{ fontSize: "12px" }} >Co-ords</li></Link>
							<Link to="/collection" ><li style={{ fontSize: "12px" }} >Bottoms</li></Link>
							<Link to="/collection" ><li style={{ fontSize: "12px" }} >Dresses</li></Link>
							<Link to="/collection" ><li style={{ fontSize: "12px" }} >Kurtis</li></Link>
							<Link to="/collection" ><li style={{ fontSize: "12px" }} >Gowns</li></Link>
							<Link to="/collection" ><li style={{ fontSize: "12px" }} >Kaftans</li></Link>
							<Link to="/collection" ><li style={{ fontSize: "12px" }} >Sharara Sets </li></Link>
						</ul>

						{/* <ul style={{ listStyle: "none" }} >
							<li>Sarees</li>
							<li>Sharara</li>
							<li>Shirts</li>
							<li>Skirts</li>
							<li>Tops</li>
							<li>Trouser</li>
							<li>Tunics</li>
						</ul> */}
					</div>
				</div>
				<div >
					<h5 style={{ color: "white", padding: "20px 0px 0px 0px", color: "#FF8E78" }} >Trending</h5>
					<div className='category-div2' style={{ width: "150px" }} >
						<ul style={{ listStyle: "none" }} >
							<li style={{ fontSize: "12px" }} >Contemporary clothing</li>
							<li style={{ fontSize: "12px" }} >Ethnic</li>
							<li style={{ fontSize: "12px" }} >Resort Wear</li>
							<li style={{ fontSize: "12px" }} >Bridal</li>
							<li style={{ fontSize: "12px" }} >Office Traditional</li>
							<li style={{ fontSize: "12px" }} >office Western</li>
							<li style={{ fontSize: "12px" }} >Haldi</li>
							<li style={{ fontSize: "12px" }} >Mehandi</li>
							<li style={{ fontSize: "12px" }} >Cocktail</li>
						</ul>
					</div>
				</div>
				<div className='category-img' >
					<img src={img} style={{ height: "300px", margin: "30% 0px 0px 0px" }} alt="hello" />
				</div>
			</div>
		</div>
	)
}

export default Category