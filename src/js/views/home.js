import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";



export const Home = () => {
	const { store, actions } = useContext(Context);

	const imageUrls = [
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

	useEffect(() => { actions.getPeople() }, [])

	console.log(store.people);


	return (

		<>
			<div className="container mt-5 overflow-scroll">
				<div className="d-flex flex-nowrap">
					{store.people.map((item, index) => (
						<div key={index} className="col-md-4">
							<div className="card">
								<img src={imageUrls[index % imageUrls.length]} style={{ objectFit: "cover", width: "400px", height: "200px",}} className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">{item.uid}</p>
									<a href="#" className="btn btn-primary">
										Go somewhere
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>

	)


};





