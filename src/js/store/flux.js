const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: []

		},
		actions: {
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people")
				.then(res => res.json())
				.then(data => setStore({people: data.results}))
				.catch(err => console.error(err))
			}
		
		}
	};
	
};

export default getState;
