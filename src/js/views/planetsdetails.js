import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const PlanetsDetails = () => {

  const { store, actions } = useContext(Context);

  let params = useParams();

  let planetsID = params.uid;

  let { uid } = useParams();

  let selectedPlanet = store.planets.find(item => item.result && item.result.uid === planetsID);



  let imagePlanetsUrls = [
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


  if (!selectedPlanet) {
    return (
      <div className="container">
        <p>Planet not found.</p>
        <Link to="/">
          <button className="btn btn-primary">Back to home</button>
        </Link>
      </div>
    );
  }

 
  console.log("store.planets", store.planets);
  console.log("planetsID:", planetsID);
  console.log("Selected Planet:", selectedPlanet);



  return (
    <div className="container" id={`character-${selectedPlanet.result.uid}`}>
      <h1 className="container container-title mt-3">{selectedPlanet.result.properties.name}</h1>
      <div className="card mb-3 mt-4">
        <div className="row g-0 d-flex flex-row-reverse">
          <div className="col-md-6">
            <img src={imagePlanetsUrls[uid - 1]} style={{ objectFit: "fill", borderRadius: '10px'  }} className="card-img-top" alt="Images of planets" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h4 className="card-title mt-3">Name: {selectedPlanet.result.properties.name}</h4>
              <p className="card-text-description mt-4"><b>Description: </b><br />{selectedPlanet.result.properties.name} is a fictional planet Contrary to popular belief, 
              Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, 
              a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, a
              nd going through the cites of the word in classical literature, discovered the undoubtable source.Lorem Ipsum comes 
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero.
              written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
              The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
              The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
            </div>
          </div>
          <br />
          <div className="row g-0">
            <div className="red-line"></div>
            <div className="col-md-12 mini-container d-flex justify-content-evenly mt-3">
              <p className="card-text"><h5>Gravity: </h5>{selectedPlanet.result.properties.gravity}</p>
              <p className="card-text"><h5>Orbital Period: </h5> {selectedPlanet.result.properties.orbital_period}</p>
              <p className="card-text"><h5>Population: </h5> {selectedPlanet.result.properties.population}</p>
              <p className="card-text"><h5>Rotation Period: </h5> {selectedPlanet.result.properties.rotation_period}</p>
              <p className="card-text"><h5>Surface Water: </h5> {selectedPlanet.result.properties.surface_water}</p>
              <p className="card-text"><h5>Terrain: </h5> {selectedPlanet.result.properties.terrain}</p>
              <p className="card-text"><h5>Name: </h5> {selectedPlanet.result.properties.name}</p>
            </div>
          </div>

        </div>
      </div>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
