import React from "react";
import { Link } from "react-router-dom";
import starwarsicon from "/src/img/starwarsicon.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light container bg-opacity-100 .bg-dark">
			<Link to="/">
				<img src={starwarsicon} className="card-img-top" style={{ width: '10%', height: '10%', marginRight: '10px', filter: "contrast(40%) sepia(1) hue-rotate(20deg) saturate(1000%)" }} alt="starwarsicon" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};

