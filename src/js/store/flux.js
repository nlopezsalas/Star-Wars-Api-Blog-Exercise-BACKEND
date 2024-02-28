const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			peopleDetails: [],
			planets: [],
			planetsDetails: [],
			starships: [],
			starshipsDetails: [],
		},


		actions: {    
			  
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(res => res.json())
				.then(data => setStore({people: data.results}))
				.catch(err => console.error(err))
			},


			getPeopleDetails: () => {
                const fetchPromises = [];
                for (let index = 1; index <= 10; index++) {
                    const url = `https://www.swapi.tech/api/people/${index}`;
                    const fetchPromise = fetch(url)
                        .then(res => res.json())
                        .catch(err => console.error(`Error al obtener datos de ${url}: ${err}`));

                    fetchPromises.push(fetchPromise);
                }
                Promise.all(fetchPromises)
                    .then(peopleDetails => {
                        setStore({ peopleDetails });
                    })
                    .catch(err => console.error('Error al obtener detalles de personas:', err));
            },

			
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
				.then(data => setStore({planets: data.results}))
				.catch(err => console.error(err))
			},


			getPlanetsDetails: () => {
                const fetchPromisesPlanets = [];
                for (let index = 1; index <= 10; index++) {
                    const url = `https://www.swapi.tech/api/planets/${index}`;
                    const fetchPromise = fetch(url)
                        .then(res => res.json())
                        .catch(err => console.error(`Error al obtener datos de ${url}: ${err}`));

                    fetchPromisesPlanets.push(fetchPromise);
                }
                Promise.all(fetchPromisesPlanets)
                    .then(planetsDetails => {
                        setStore({ planetsDetails });
                    })
                    .catch(err => console.error('Error al obtener detalles de personas:', err));
            },


			getStarships: () => {
				fetch("https://www.swapi.tech/api/starships/")
				.then(res => res.json())
				.then(data => setStore({starships: data.results}))
				.catch(err => console.error(err))
			},


			getStarshipsDetails: () => {
                const fetchPromisesStarships = [];
                for (let index = 2; index <= 12; index++) {
                    const url = `https://www.swapi.tech/api/planets/${index}`;
                    const fetchPromise = fetch(url)
                        .then(res => res.json())
                        .catch(err => console.error(`Error al obtener datos de ${url}: ${err}`));

                    fetchPromisesStarships.push(fetchPromise);
                }
                Promise.all(fetchPromisesStarships)
                    .then(starshipsDetails => {
                        setStore({ starshipsDetails });
                    })
                    .catch(err => console.error('Error al obtener detalles de personas:', err));
            },



		
		}
	};
	
};

export default getState;
