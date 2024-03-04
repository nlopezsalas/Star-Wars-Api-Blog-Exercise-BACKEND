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
	<nav className="navbar navbar-light container bg-opacity-100 .bg-dark" style={{ borderBottom: "1px solid #2020207d", }}>
		<Link to="/">
			<img src={starwarsicon} className="card-img-top" style={{ width: '10%', height: '10%', marginRight: '10px', filter: "contrast(40%) sepia(1) hue-rotate(20deg) saturate(1000%)", }} alt="starwarsicon" />
		</Link>
		<div className="ml-auto">
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle me-3"
					style={{ width: "200px" }}
					type="button"
					id="Button1"
					onClick={handleToggleDropdown}>Favorites <span className="counter">{store.counter}</span>
				</button>

				<ul className={`dropy dropdown-menu${isDropdownOpen ? ' show' : ''}`}
					aria-labelledby="dropdownMenuButton1">
					{store.favorites.map((item, index) => (

						<li className="text-dark d-flex justify-content-between"
							key={index}>{item}<span className="bean">

							<i className="fas fa-trash" onClick={() =>
							actions.deleteFavorites(item)} ></i></span>

						</li>
					))}
				</ul>
			</div>
		</div>
	</nav>
);
};

