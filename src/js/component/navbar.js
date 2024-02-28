import React from "react";
import { Link } from "react-router-dom";
import starwarsicon from "/src/img/starwarsicon.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light mb-3 container">
			<Link to="/">
				<img src={starwarsicon} className="card-img-top img-fluid" style={{ width: '10%', height: '10%', marginRight: '10px', }} alt="starwarsicon" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Favorites</button>
				</Link>
			</div>
		</nav>
	);
};

