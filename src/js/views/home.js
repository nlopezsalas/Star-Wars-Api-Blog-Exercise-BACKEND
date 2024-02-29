import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Home = () => {
	const { store, actions } = useContext(Context);

	const imagePeopleUrls = [
		"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796",
		"https://lumiere-a.akamaihd.net/v1/images/c-3po-main_d6850e28.jpeg?region=176%2C0%2C951%2C536",
		"https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",
		"https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720",
		"https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786",
		"https://lumiere-a.akamaihd.net/v1/images/owen-lars-main_08c717c8.jpeg?region=0%2C34%2C1053%2C593",
		"https://lumiere-a.akamaihd.net/v1/images/beru-lars-main_fa680a4c.png?region=342%2C0%2C938%2C527",
		"https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666",
		"https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878",
		"https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721",

	];

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

	const [selectedId, setSelectedId] = useState(null);

	// Por ejemplo, en tu componente Home.js
	const handleClick = (characterId) => {
		const selectedCharacter = actions.selectCharacterById(store, characterId);
		// Resto del código
	};




	useEffect(() => { actions.getPeople(), actions.getPlanets(), actions.getStarships() }, [])

	console.log(store.people);
	// console.log(store.peopleDetails);
	console.log(store.planets);
	// console.log(store.planetsDetails);
	console.log(store.starships);
	// console.log(store.starshipsDetails);


	return (

		<>
			<br />
			<h1 className="container container-title">Characters</h1>
			<div className="container mt-5 container-cards">
				<div className="d-flex flex-nowrap">
					{store.people.map((item, index) => (
						<div key={index} className="col-md-4 me-3">
							<div className="card">
								<img src={imagePeopleUrls[index % imagePeopleUrls.length]} style={{ objectFit: "contain" }} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.result.properties.name}</h5>

									{store.people[index] && store.people[index].result && store.people[index].result.properties && (
										<div>
											<p className="card-text">Height {store.people[index].result.properties.height}</p>
											<p className="card-text">Mass: {store.people[index].result.properties.mass}</p>
											<p className="card-text">Gender: {store.people[index].result.properties.gender}</p>
										</div>
									)}
									<Link to={`/details/${item.result.uid}`}>
										<a className="btn btn-primary mt-2" onClick={() => handleClick(item.uid)}>
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
			</div>
		</>

	)


};





