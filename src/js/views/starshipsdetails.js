import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const StarshipsDetails = () => {

  const { store, actions } = useContext(Context);

  let params = useParams();

  let starshipsID = params.uid;

  let { uid } = useParams();

  let selectedStarships = store.starships.find(item => item.result && item.result.uid === starshipsID);



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


  if (!selectedStarships) {
    return (
      <div className="container">
        <p>Planet not found.</p>
        <Link to="/">
          <button className="btn btn-primary">Back to home</button>
        </Link>
      </div>
    );
  }

 
  console.log("store.planets", store.starships);
  console.log("starshipsID:", starshipsID);
  console.log("Selected Planet:", selectedStarships);



  return (
    <div className="container" id={`character-${selectedStarships.result.uid}`}>
      <h1 className="container container-title mt-3">{selectedStarships.result.properties.name}</h1>
      <div className="card mb-3 mt-4">
        <div className="row g-0 d-flex flex-row-reverse">
          <div className="col-md-6">
            <img src={imageStarshipsUrls[uid - 1]} style={{ objectFit: "fill", borderRadius: '10px'  }} className="card-img-top" alt="Images of planets" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h4 className="card-title mt-3">Name: {selectedStarships.result.properties.name}</h4>
              <p className="card-text-description mt-4"><b>Description: </b><br />{selectedStarships.result.properties.name} is a fictional starship Contrary to popular belief, 
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
              <p className="card-text"><h5>Cargo Capacity: </h5>{selectedStarships.result.properties.cargo_capacity}</p>
              <p className="card-text"><h5>Consumables: </h5> {selectedStarships.result.properties.consumables}</p>
              <p className="card-text"><h5>Hyperdrive Rating: </h5> {selectedStarships.result.properties.hyperdrive_rating}</p>
              <p className="card-text"><h5>Manufacturer: </h5> {selectedStarships.result.properties.manufacturer}</p>
              <p className="card-text"><h5>Atmosphering Speed: </h5> {selectedStarships.result.properties.max_atmosphering_speed}</p>
              <p className="card-text"><h5>Model: </h5> {selectedStarships.result.properties.model}</p>
              <p className="card-text"><h5>Crew: </h5> {selectedStarships.result.properties.crew}</p>
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
