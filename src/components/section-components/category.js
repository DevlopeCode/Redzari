import React from 'react'
import img from "../../assets2/category.jpg"
import { Link } from 'react-router-dom'
import '../global-components/navbar-v5.css'



const Category = () => {
	return (
		<div className='category-main'>
			<div
				className='category-demo'
				style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", height: "370px", margin: "0px 0px 0px 60px" }}>

				<div style={{ margin: "0px" }} >
					<h5 style={{ color: "white", padding: "20px 0px 0px 0px", color: "#FF8E78" }} >Category</h5>
					<div
						className='category-div'
						style={{display: "flex", flexDirection: "column", width: "130px" }}>
						<Link to="/collection" ><p style={{ fontSize: "10px", margin: "-10px", padding: "0px", color: 'black' }} >Anarkali</p></Link>
						<Link to="/collection" ><p style={{ fontSize: "10px", margin: "-10px", padding: "0px", color: 'black' }} >Saree</p></Link>
						<Link to="/collection" ><p style={{ fontSize: "10px", margin: "-10px", padding: "0px", color: 'black' }} >Lehangas</p></Link>
						<Link to="/collection" ><p style={{ fontSize: "10px", margin: "-10px", padding: "0px", color: 'black' }} >Co-ords</p></Link>
						<Link to="/collection" ><p style={{ fontSize: "10px", margin: "-10px", padding: "0px", color: 'black' }} >Bottoms</p></Link>
						<Link to="/collection" ><p style={{ fontSize: "10px", margin: "-10px", padding: "0px", color: 'black' }} >Dresses</p></Link>
						<Link to="/collection" ><p style={{ fontSize: "10px", margin: "-10px", padding: "0px", color: 'black' }} >Kurtis</p></Link>
						<Link to="/collection" ><p style={{ fontSize: "10px", margin: "-10px", padding: "0px", color: 'black' }} >Gowns</p></Link>
						<Link to="/collection" ><p style={{ fontSize: "10px", margin: "-10px", padding: "0px", color: 'black' }} >Kaftans</p></Link>
						<Link to="/collection" ><p style={{ fontSize: "10px", margin: "-10px", padding: "0px", color: 'black' }} >Sharara Sets </p></Link>
					</div>
				</div>
				<div  >
					<h5 style={{ color: "white", padding: "20px 0px 10px 0px", color: "#FF8E78" }} >Trending</h5>
					<div className='category-div2' style={{ width: "150px", color: "white" }} >
						<Link><p style={{ fontSize: "10px", margin: '-20px', padding: '-5px', color: 'black' }} >Contemporary clothing</p></Link>
						<Link><p style={{ fontSize: "10px", margin: '-20px', padding: '-5px', color: 'black' }} >Ethnic</p></Link>
						<Link><p style={{ fontSize: "10px", margin: '-20px', padding: '-5px', color: 'black' }} >Resort Wear</p></Link>
						<Link><p style={{ fontSize: "10px", margin: '-20px', padding: '-5px', color: 'black' }} >Bridal</p></Link>
						<Link><p style={{ fontSize: "10px", margin: '-20px', padding: '-5px', color: 'black' }} >Office Traditional</p></Link>
						<Link><p style={{ fontSize: "10px", margin: '-20px', padding: '-5px', color: 'black' }} >office Western</p></Link>
						<Link><p style={{ fontSize: "10px", margin: '-20px', padding: '-5px', color: 'black' }} >Haldi</p></Link>
						<Link><p style={{ fontSize: "10px", margin: '-20px', padding: '-5px', color: 'black' }} >Mehandi</p></Link>
						<Link><p style={{ fontSize: "10px", margin: '-20px', padding: '-5px', color: 'black' }} >Cocktail</p></Link>

					</div>
				</div>
				<div className='category-img' >
					<img src={img} style={{ height: "300px", margin: "25px 50px 0px 0px" }} alt="hello" />
				</div>
			</div>
		</div>
	)
}

export default Category