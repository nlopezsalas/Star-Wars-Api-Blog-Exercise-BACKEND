import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import starwarsicon from "/src/img/starwarsicon.png";
import { Context } from "../store/appContext";
import { Lightsaber } from "./lightsaber";



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

		<nav className="navbar navbar-light container" style={{ borderBottom: "1px solid #2020207d" }}>
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-md-2 col-2">
						<Link to="/">
							<img
								src={starwarsicon}
								className="card-img-top img-fluid"
								style={{ filter: "contrast(40%) sepia(1) hue-rotate(20deg) saturate(1000%)" }}
								alt="starwarsicon"
							/>
						</Link>
					</div>

					<div className="col-md-8 col-8 img-fluid lightsaber-container" style={{ marginLeft: '0', paddingLeft: '0px' }}>
						<Lightsaber />
					</div>

					<div className="col-md-2 col-12 d-flex justify-content-end">
						<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle me-3 d-none d-md-block"
								type="button"
								id="Button1"
								onClick={handleToggleDropdown}
							>
								Favorites <span className="counter">{store.counter}</span>
							</button>
							
							<Link to={{ pathname: `/login` }}>
								Login
							</Link>

							<button
								className="btn btn-secondary dropdown-toggle me-3 d-block d-md-none"
								type="button"
								id="Button1"
								onClick={handleToggleDropdown}
								style={{ fontSize: "0.8rem", }}
							>
								<span className="counter">Favorites {store.counter}</span>
							</button>


							<ul className={`dropy dropdown-menu${isDropdownOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuButton1">
								{store.favorites.map((item, index) => (
									<li className="text-dark d-flex justify-content-between" key={index}>
										{item}
										<span className="bean">
											<i className="fas fa-trash" onClick={() => actions.deleteFavorites(item)}></i>
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>



		// <nav className="navbar navbar-light container" style={{ borderBottom: "1px solid #2020207d" }}>
		// 	<div className="container-fluid">
		// 		<div className="row align-items-center">
		// 			<div className="col-md-2 col-2">
		// 				<Link to="/">
		// 					<img
		// 						src={starwarsicon}
		// 						className="card-img-top img-fluid" style={{ filter: "contrast(40%) sepia(1) hue-rotate(20deg) saturate(1000%)" }}
		// 						alt="starwarsicon"
		// 					/>
		// 				</Link>
		// 			</div>

		// 			<div className="col-md-8 col-8 img-fluid lightsaber-container" style={{ marginLeft: '0', paddingLeft: '0px' }}>
		// 				<Lightsaber />
		// 			</div>

		// 			<div className="col-md-2 col-2 d-flex justify-content-end">
		// 				<div className="dropdown">
		// 					<button
		// 						className="btn btn-secondary dropdown-toggle me-3"
		// 						type="button"
		// 						id="Button1"
		// 						onClick={handleToggleDropdown}>
		// 						Favorites <span className="counter">{store.counter}</span>
		// 					</button>

		// 					<ul className={`dropy dropdown-menu${isDropdownOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuButton1">
		// 						{store.favorites.map((item, index) => (
		// 							<li className="text-dark d-flex justify-content-between" key={index}>
		// 								{item}
		// 								<span className="bean">
		// 									<i className="fas fa-trash" onClick={() => actions.deleteFavorites(item)}></i>
		// 								</span>
		// 							</li>
		// 						))}
		// 					</ul>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </nav>

	);
};

