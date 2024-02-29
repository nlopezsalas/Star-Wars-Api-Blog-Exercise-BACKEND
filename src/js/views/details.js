import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Details = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const characterId = parseInt(params.uid);

  useEffect(() => {
    if (characterId !== null) {
      actions.getPeople(); // Asegúrate de que los datos estén cargados
    }
  }, [characterId, actions.getPeople]);

  // Lógica de selección directamente en el componente
  const selectedCharacter = store.people.find(item => item.result && item.result.uid === characterId);

  if (!selectedCharacter || !store.people.length) {
    return (
      <div className="container">
        <p>Loading or character not found.</p>
        <Link to="/">
          <button className="btn btn-primary">Back home</button>
        </Link>
      </div>
    );
  }

  // Renderiza la información del personaje encontrado
  return (
    <div className="container" id={`character-${selectedCharacter.result.uid}`}>
      <h1 className="container container-title">{selectedCharacter.result.properties.name}</h1>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt={selectedCharacter.result.properties.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{selectedCharacter.result.properties.name}</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </p>
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
