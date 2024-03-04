import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import "../../styles/details.css"
import { Context } from "../store/appContext";
import { Link, } from "react-router-dom";



export const Planets = () => {
	const { store, actions } = useContext(Context);

	const imagePlanetsUrls = [
		"https://lumiere-a.akamaihd.net/v1/images/tatooine-main_9542b896.jpeg?region=165%2C0%2C949%2C534",
		"https://lumiere-a.akamaihd.net/v1/images/alderaan-main_f5b676cf.jpeg?region=0%2C0%2C1280%2C720",
		"https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878",
		"https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675",
		"https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711",
		"https://lumiere-a.akamaihd.net/v1/images/databank_cloudcity_01_169_e589ba2c.jpeg?region=0%2C0%2C1560%2C878",
		"https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878",
		"https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878",
		"https://lumiere-a.akamaihd.net/v1/images/coruscant-main_59b865a4.jpeg?region=164%2C0%2C953%2C536",
		"https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542",
	];

	useEffect(() => { actions.getPlanets() }, [])

    console.log(store.planets);

	return (

		<>
			<br />
			<h1 className="container container-title text-gradient">PLANETS</h1>
			<div className="container mt-5 container-cards">
				<div className="d-flex flex-nowrap">
					{store.planets.map((item, index) => (
						<div key={index} className="col-md-4 me-3">
							<div className="card">
								<img src={imagePlanetsUrls[index % imagePlanetsUrls.length]} style={{ objectFit: "contain" }} className="card-img-top" alt="Images of characters" />
								<div className="card-body">
									<h5 className="card-title">{item.result.properties.name}</h5>

									{store.planets[index] && store.planets[index].result && store.planets[index].result.properties && (
										<div>
											<p className="card-text"><b>Climate:</b>  {store.planets[index].result.properties.climate}</p>
											<p className="card-text"><b>Diameter:</b>  {store.planets[index].result.properties.diameter}</p>
											<p className="card-text"><b>Terrain:</b>  {store.planets[index].result.properties.terrain}</p>
										</div>
									)}
									<div className="d-flex justify-content-between align-items-center">
										<Link to={{ pathname: `/planetsdetails/${item.result.uid}` }}>
											<button className="btn btn-primary mt-2">
												Learn More!
											</button>
										</Link>

										<button
											type="button"
											className={`btn ${store.favorites.includes(item.result.properties.name) ? 'btn-danger' : 'btn-outline-danger'} mt-2`}
											onClick={() => {const isFavorite = store.favorites.includes(item.result.properties.name)
												if (isFavorite) {
													actions.deleteFavorites(item.result.properties.name);
												} else {
													actions.addFavorites(item.result.properties.name);
												}
											}}>
											<i className="fas fa-heart" />
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>


	)
}