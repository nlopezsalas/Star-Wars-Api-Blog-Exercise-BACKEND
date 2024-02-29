const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			// peopleDetails: [],
			planets: [],
			// planetsDetails: [],
			starships: [],
			// starshipsDetails: [],
		},


		actions: {    
			  
			// getPeople: () => {
			// 	fetch("https://www.swapi.tech/api/people")
			// 	.then(res => res.json())
			// 	.then(data => setStore({people: data.results}))
			// 	.catch(err => console.error(err))
			// },


			getPeople: () => {
                const fetchPromises = [];
                for (let index = 1; index <= 10; index++) {
                    const url = `https://www.swapi.tech/api/people/${index}`;
                    const fetchPromise = fetch(url)
                        .then(res => res.json())
                        .catch(err => console.error(`Error al obtener datos de ${url}: ${err}`));

                    fetchPromises.push(fetchPromise);
                }
                Promise.all(fetchPromises)
                    .then(people => {
                        setStore({ people });
                    })
                    .catch(err => console.error('Error al obtener detalles de personas:', err));
            },

			
			// getPlanets: () => {
			// 	fetch("https://www.swapi.tech/api/planets/")
			// 	.then(res => res.json())
			// 	.then(data => setStore({planets: data.results}))
			// 	.catch(err => console.error(err))
			// },


			getPlanets: () => {
                const fetchPromisesPlanets = [];
                for (let index = 1; index <= 10; index++) {
                    const url = `https://www.swapi.tech/api/planets/${index}`;
                    const fetchPromise = fetch(url)
                        .then(res => res.json())
                        .catch(err => console.error(`Error al obtener datos de ${url}: ${err}`));

                    fetchPromisesPlanets.push(fetchPromise);
                }
                Promise.all(fetchPromisesPlanets)
                    .then(planets => {
                        setStore({ planets });
                    })
                    .catch(err => console.error('Error al obtener detalles de personas:', err));
            },


			// getStarships: () => {
			// 	fetch("https://www.swapi.tech/api/starships/")
			// 	.then(res => res.json())
			// 	.then(data => setStore({starships: data.results}))
			// 	.catch(err => console.error(err))
			// },
                    


      getStarships: () => {
          const fetchPromisesStarshipsDetails = [];
          let starshipsDetailsWithPropertiesCount = 0;
          let totalStarshipsDetailsChecked = 0;
          const maxStarships = 10;
        
          const fetchStarshipDetailsData = async (index) => {
            const url = `https://www.swapi.tech/api/starships/${index}`;
            try {
              const res = await fetch(url);
              const data = await res.json();
              
              if (data && data.result && data.result.properties) {
                starshipsDetailsWithPropertiesCount++;
                return data;
              } else {
                throw new Error('Nave sin propiedades');
              }
            } catch (error) {
              console.error(`Error al obtener datos de ${url}: ${error}`);
              return null;
            }
          };
        
          (async () => {
            for (let index = 1; starshipsDetailsWithPropertiesCount < maxStarships && totalStarshipsDetailsChecked < maxStarships * 2; index++) {
              const starshipDetailsData = await fetchStarshipDetailsData(index);
              if (starshipDetailsData) {
                fetchPromisesStarshipsDetails.push(starshipDetailsData);
              }
              totalStarshipsDetailsChecked++;
            }
        
            setStore({ starships: fetchPromisesStarshipsDetails });
          })();
        },
                       		
		}
	};
	
};

export default getState;
