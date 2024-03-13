import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import "../../styles/details.css"
import { Context } from "../store/appContext";
import { Link, } from "react-router-dom";



export const Starships = () => {
	const { store, actions } = useContext(Context);

	const imageStarshipsUrls = [
		"https://lumiere-a.akamaihd.net/v1/images/hammerhead-corvette-rogue-update_453ce60b.jpeg?region=154%2C0%2C892%2C502",
		"https://lumiere-a.akamaihd.net/v1/images/Star-Destroyer_ab6b94bb.jpeg?region=0%2C0%2C1600%2C900",
		"https://lumiere-a.akamaihd.net/v1/images/mobile-tac-pod-main_933a2b48.jpeg?region=383%2C40%2C1167%2C657",
		"https://lumiere-a.akamaihd.net/v1/images/Death-Star-I-copy_36ad2500.jpeg?region=0%2C0%2C1600%2C900",
		"https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg?region=0%2C0%2C1280%2C720",
		"https://lumiere-a.akamaihd.net/v1/images/Y-Wing-Fighter_0e78c9ae.jpeg?region=0%2C0%2C1536%2C864",
		"https://lumiere-a.akamaihd.net/v1/images/resistance-x-wing_9433981f.jpeg?region=0%2C0%2C1560%2C878",
		"https://lumiere-a.akamaihd.net/v1/images/image_3aaf40b1.jpeg?region=0%2C0%2C1920%2C1080",
		"https://lumiere-a.akamaihd.net/v1/images/databank_executor_01_169_8157df82.jpeg?region=57%2C0%2C1503%2C845",
		"https://lumiere-a.akamaihd.net/v1/images/gr-75-medium-transport_cd04862d.jpeg?region=15%2C0%2C770%2C433",
	];

	useEffect(() => { actions.getStarships() }, [])

	console.log(store.starships);

	return (

		<>
			<br />
			<div className="container mt-5">
				<div className="row">
					<div className="col-12">
						<span className="container-title text-gradient text-center mt-5"> S T A R S H i P S </span>
					</div>
				</div>

				<div className="row overflow-auto">
					<div className="col-12 d-flex flex-row gap-3" style={{ width: `${store.starships.length * 100}%` }}>
						{store.starships.map((item, index) => (
							<div key={index} className="col-md-4 col-sm-6 col-12 mb-3">
								<div className="card">
									<img src={imageStarshipsUrls[index % imageStarshipsUrls.length]} style={{ objectFit: "contain" }} className="card-img-top" alt="Images of characters" />
									<div className="card-body">
										<h5 className="card-title">{item.result.properties.name}</h5>

										{store.starships[index] && store.starships[index].result && store.starships[index].result.properties && (
											<div>
												<p className="card-text"><b>Cost:</b> {store.starships[index].result.properties.cost_in_credits}</p>
												<p className="card-text"><b>Length:</b> {store.starships[index].result.properties.length}</p>
												<p className="card-text"><b>Passengers:</b> {store.starships[index].result.properties.passengers}</p>
											</div>
										)}

										<div className="d-flex justify-content-between align-items-center">
											<Link to={{ pathname: `/starshipsdetails/${item.result.uid}` }}>
												<button className="btn btn-secondary mt-2">
													Learn More!
												</button>
											</Link>

											<button
												type="button"
												className={`btn ${store.favorites.includes(item.result.properties.name) ? 'btn-danger' : 'btn-outline-danger'} mt-2`}
												onClick={() => {
													const isFavorite = store.favorites.includes(item.result.properties.name);
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
			</div>
		</>


	)
}