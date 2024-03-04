import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const PeopleDetails = () => {
  const { store, actions } = useContext(Context);

  const params = useParams();

  const characterId = params.uid;

  const { uid } = useParams();

  const selectedCharacter = store.people.find(item => item.result && item.result.uid === characterId);

  const [localPeople, setLocalPeople] = useState([""]);


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
  ]


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if data is in localStorage
        const storedData = localStorage.getItem("peopleData");

        if (storedData) {
          // If data is available, use it directly from localStorage
          setLocalPeople(JSON.parse(storedData));
        } else {
          // If not, make the network request
          const fetchedData = await actions.getPeople();

          // Store the data in localStorage for future use
          localStorage.setItem("peopleData", JSON.stringify(fetchedData));
          setLocalPeople(fetchedData);
        }
      } catch (error) {
        console.error('Error fetching or storing data:', error);
      }
    };

    fetchData();
  }, [actions.getPeople]);



  if (!selectedCharacter) {
    return (
      <div className="container">
        <p>Character not found.</p>
        <Link to="/">
          <button className="btn btn-primary">Back to home</button>
        </Link>
      </div>
    );
  }

 
  console.log("store.people:", store.people);
  console.log("characterId:", characterId);
  console.log("Selected Character:", selectedCharacter);
  console.log("characterId:", characterId)
  console.log("store.people:", store.people);
  console.log("characterId:", characterId);



  return (
    <div className="container" id={`character-${selectedCharacter.result.uid}`}>
      <h1 className="container container-title mt-3">{selectedCharacter.result.properties.name}</h1>
      <div className="card mb-3 mt-4">
        <div className="row g-0 d-flex flex-row-reverse">
          <div className="col-md-6">
            <img src={imagePeopleUrls[uid - 1]} style={{ objectFit: "fill", borderRadius: '10px'  }} className="card-img-top" alt="Images of characters" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h4 className="card-title mt-3">Name: {selectedCharacter.result.properties.name}</h4>
              <p className="card-text-description mt-4"><b>Description: </b><br />{selectedCharacter.result.properties.name} is a fictional character Contrary to popular belief, 
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
              <p className="card-text"><h5>Birth Year: </h5>{selectedCharacter.result.properties.birth_year}</p>
              <p className="card-text"><h5>Eyes:</h5> {selectedCharacter.result.properties.eye_color}</p>
              <p className="card-text"><h5>Gender:</h5> {selectedCharacter.result.properties.gender}</p>
              <p className="card-text"><h5>Hair Color:</h5> {selectedCharacter.result.properties.hair_color}</p>
              <p className="card-text"><h5>Height:</h5> {selectedCharacter.result.properties.height}</p>
              <p className="card-text"><h5>Mass:</h5> {selectedCharacter.result.properties.mass}</p>
              <p className="card-text"><h5>Skin Color:</h5> {selectedCharacter.result.properties.skin_color}</p>
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
