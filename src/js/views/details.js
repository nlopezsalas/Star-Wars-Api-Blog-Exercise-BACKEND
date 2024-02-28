import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Details = () => {
	// const { store, actions } = useContext(Context);

	return (
		<>
		<div className="container">
			<div className="card mb-3">
				<div className="row g-0">
					<div className="col-md-4">
						<img src="..." className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">Card title</h5>
							<p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
							<p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
			</div>
			<br />

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
		</>
	);
};
