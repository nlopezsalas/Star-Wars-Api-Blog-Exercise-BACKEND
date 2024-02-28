const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			peopleDetails: []

		},
		actions: {

            
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(res => res.json())
				.then(data => setStore({people: data.results}))
				.catch(err => console.error(err))
			},


			getDetails: () => {
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
		
		}
	};
	
};

export default getState;
