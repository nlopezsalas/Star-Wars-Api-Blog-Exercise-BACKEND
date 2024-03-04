import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import starwarsicon from "/src/img/starwarsicon.png";
import { Context } from "../store/appContext";



export const Navbar = () => {

	const { store, actions } = useContext(Context);

	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleToggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	useEffect(() => {
		if (store.favorites.length > 0) {
			setIsDropdownOpen(true);
		} else {
			setIsDropdownOpen(false);
		}
	}, [store.favorites]);


	return (
		<nav className="navbar navbar-light container bg-opacity-100 .bg-dark">
			<Link to="/">
				<img src={starwarsicon} className="card-img-top" style={{ width: '10%', height: '10%', marginRight: '10px', filter: "contrast(40%) sepia(1) hue-rotate(20deg) saturate(1000%)" }} alt="starwarsicon" />
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle me-3"
						style={{ width: "200px" }}
						type="button"
						id="Button1"
						onClick={handleToggleDropdown}>Favorites <span className="counter">{store.counter}</span>
					</button>
					<ul
						className={`dropy dropdown-menu${isDropdownOpen ? ' show' : ''}`}
						aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((item, index) => (
							<li className="text-dark d-flex justify-content-between"
								key={index}>{item}<span
								className="bean"
								onClick={() =>
								actions.deleteFavorites(
								store.favorites.filter((item, myIndex) => index !== myIndex))}>
								<i className="fas fa-trash"></i>
												</span>
							</li>
						))}
					</ul>
				</div>


				{/* <div class="dropdown">
						<button class="btn btn-primary dropdown-toggle me-3" style={{width:"200px"}} type="button" id="Button1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites <span className="counter">{store.counter}</span>
						</button>
						<ul class="dropy dropdown-menu" aria-labelledby="dropdownMenuButton1">
							{store.favorites.map((item, index) => (<li className="text-dark d-flex justify-content-between" key={index}>{item}<span className="bean" onClick={() =>
								actions.deleteFavorites(store.favorites.filter((item, myIndex) => index !== myIndex))}><i className="fas fa-trash"></i></span></li>))}

						</ul>
				</div> */}
			</div>
		</nav>
	);
};

