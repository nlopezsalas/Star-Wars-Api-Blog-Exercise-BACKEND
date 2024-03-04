const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			// peopleDetails: [],
			planets: [],
			// planetsDetails: [],
			starships: [],
			// starshipsDetails: [],
      favorites: [],
      //
      counter: 0,
		},


		actions: {    

      // addFavorites: (name) =>{
      //   setStore({favorites: getStore().favorites.concat(name)});
      //   getStore().counter++
      // },

      // deleteFavorites:(name)=>{
			// 	setStore({favorites: name});
			// 	getStore().counter--
			// },

      addFavorites: (name) => {
        setStore({
          favorites: [...getStore().favorites, name],
          counter: getStore().counter + 1,  // Incrementa el contador
        });
      },
      
      deleteFavorites: (name) => {
        const currentFavorites = getStore().favorites;
        const updatedFavorites = currentFavorites.filter((favorite) => favorite !== name);
      
        setStore({
          favorites: updatedFavorites,
          counter: getStore().counter - 1,  // Decrementa el contador
        });
      },
      
  
      
      

			// getPeople: () => {
			// 	fetch("https://www.swapi.tech/api/people")
			// 	.then(res => res.json())
			// 	.then(data => setStore({people: data.results}))
			// 	.catch(err => console.error(err))
			// },

      getPeople: async () => {
        try {
            // Verifica si la información está en localStorage
            const storedData = localStorage.getItem("peopleData");
    
            if (storedData) {
                // Si hay información en localStorage, actualiza el estado sin realizar una solicitud de red
                setStore({ people: JSON.parse(storedData) });
            } else {
                // Si no hay información en localStorage, realiza la solicitud de red
                const fetchPromises = [];
                for (let index = 1; index <= 10; index++) {
                    const url = `https://www.swapi.tech/api/people/${index}`;
                    const fetchPromise = fetch(url)
                        .then(res => res.json())
                        .catch(err => console.error(`Error al obtener datos de ${url}: ${err}`));
    
                    fetchPromises.push(fetchPromise);
                }
    
                // Espera a que todas las solicitudes de red se completen
                const people = await Promise.all(fetchPromises);
    
                // Actualiza el estado con los datos obtenidos
                setStore({ people });
    
                // Almacena la información en localStorage para futuras visitas
                localStorage.setItem("peopleData", JSON.stringify(people));
            }
        } catch (error) {
            console.error('Error al obtener detalles de personas:', error);
        }
    },
    

			// getPeople: () => {
      //           const fetchPromises = [];
      //           for (let index = 1; index <= 10; index++) {
      //               const url = `https://www.swapi.tech/api/people/${index}`;
      //               const fetchPromise = fetch(url)
      //                   .then(res => res.json())
      //                   .catch(err => console.error(`Error al obtener datos de ${url}: ${err}`));

      //               fetchPromises.push(fetchPromise);
      //           }
      //           Promise.all(fetchPromises)
      //               .then(people => {
      //                   setStore({ people });
      //               })
      //               .catch(err => console.error('Error al obtener detalles de personas:', err));
      //       },

			
			// getPlanets: () => {
			// 	fetch("https://www.swapi.tech/api/planets/")
			// 	.then(res => res.json())
			// 	.then(data => setStore({planets: data.results}))
			// 	.catch(err => console.error(err))
			// },


			// getPlanets: () => { ES ESTE
      //           const fetchPromisesPlanets = [];
      //           for (let index = 1; index <= 10; index++) {
      //               const url = `https://www.swapi.tech/api/planets/${index}`;
      //               const fetchPromise = fetch(url)
      //                   .then(res => res.json())
      //                   .catch(err => console.error(`Error al obtener datos de ${url}: ${err}`));

      //               fetchPromisesPlanets.push(fetchPromise);
      //           }
      //           Promise.all(fetchPromisesPlanets)
      //               .then(planets => {
      //                   setStore({ planets });
      //               })
      //               .catch(err => console.error('Error al obtener detalles de personas:', err));
      //       },


			// getStarships: () => {
			// 	fetch("https://www.swapi.tech/api/starships/")
			// 	.then(res => res.json())
			// 	.then(data => setStore({starships: data.results}))
			// 	.catch(err => console.error(err))
			// },
                    


      // getStarships: () => { ES STE
      //     const fetchPromisesStarshipsDetails = [];
      //     let starshipsDetailsWithPropertiesCount = 0;
      //     let totalStarshipsDetailsChecked = 0;
      //     const maxStarships = 10;
        
      //     const fetchStarshipDetailsData = async (index) => {
      //       const url = `https://www.swapi.tech/api/starships/${index}`;
      //       try {
      //         const res = await fetch(url);
      //         const data = await res.json();
              
      //         if (data && data.result && data.result.properties) {
      //           starshipsDetailsWithPropertiesCount++;
      //           return data;
      //         } else {
      //           throw new Error('Nave sin propiedades');
      //         }
      //       } catch (error) {
      //         console.error(`Error al obtener datos de ${url}: ${error}`);
      //         return null;
      //       }
      //     };
        
      //     (async () => {
      //       for (let index = 1; starshipsDetailsWithPropertiesCount < maxStarships && totalStarshipsDetailsChecked < maxStarships * 2; index++) {
      //         const starshipDetailsData = await fetchStarshipDetailsData(index);
      //         if (starshipDetailsData) {
      //           fetchPromisesStarshipsDetails.push(starshipDetailsData);
      //         }
      //         totalStarshipsDetailsChecked++;
      //       }
        
      //       setStore({ starships: fetchPromisesStarshipsDetails });
      //     })();
      //   },
                       		
		}
	};
	
};

export default getState;
