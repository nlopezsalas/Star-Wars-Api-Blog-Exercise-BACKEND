import React from "react";
import "../../styles/home.css";

import { People } from "./people";
import { Planets } from "./planets";
import { Starships } from "./starships";




export const Home = () => {

	return (

		(
			<div className="base container-fluid" >
				<People />
				<Planets />
				<Starships/>
				{/* <h2 className="text-danger ms-4">Planets</h2>
				<PlanetsComp/>
				<h2 className="text-danger ms-4">Starships</h2>
				<StarshipsComp/> */}
			</div>
		)
	)
};






{/* 
			<br />
			<br />
			<h1 className="container container-title">Planets</h1>
			<div className="container mt-5 container-cards">
				<div className="d-flex flex-nowrap">
					{store.planets.map((item, index) => (
						<div key={index} className="col-md-4 me-3">
							<div className="card">
								<img src={imagePlanetsUrls[index % imagePlanetsUrls.length]} style={{ objectFit: "contain" }} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.result.properties.name}</h5>

									{store.planets[index] && store.planets[index].result && store.planets[index].result.properties && (
										<div>
											<p className="card-text">Diameter: {store.planets[index].result.properties.diameter}</p>
											<p className="card-text">Population: {store.planets[index].result.properties.population}</p>
											<p className="card-text">Climate: {store.planets[index].result.properties.climate}</p>
										</div>
									)}
									<Link to="/details">
										<a className="btn btn-primary mt-2" >
											Learn More!
										</a>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>



			<br />
			<br />
			<h1 className="container container-title">Starships</h1>
			<div className="container mt-5 container-cards">
				<div className="d-flex flex-nowrap">
					{store.starships.map((item, index) => (
						<div key={index} className="col-md-4 me-3">
							<div className="card">
								<img src={imageStarshipsUrls[index % imageStarshipsUrls.length]} style={{ objectFit: "contain" }} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.result.properties.name}</h5>

									{store.starships[index] && store.starships[index].result && store.starships[index].result.properties && (
										<div>
											<p className="card-text">Cost: {store.starships[index].result.properties.cost_in_credits}</p>
											<p className="card-text">Manufacturer: {store.starships[index].result.properties.manufacturer}</p>
											<p className="card-text">Passengers: {store.starships[index].result.properties.passengers}</p>
										</div>
									)}
									<Link to="/details">
										<a className="btn btn-primary mt-2" >
											Learn More!
										</a>
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div> */}








