
const getState = ({ getStore, getActions, setStore }) => {

    return {

        store: {
            people: [],

            planets: [],

            starships: [],

            favorites: [],

            counter: 0,

            auth: false

        },


        actions: {
            getFavorites: async () => {
                try {
                    const response = await fetch('', {

                    })

                }
                catch (error) {
                    console.log(error);
                    return false;
                }
            },

            login: async (email, password) => {
                try {
                    const response = await fetch('https://urban-space-funicular-xq576v9pv7cv9j-3000.app.github.dev/login', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "email": email,
                            "password": password
                        })
                    })
                    console.log(response);
                    if (response.status !== 200) {
                        // if (!response.ok) {
                        console.log("Error en la login: ", response.status);
                        return false;
                    }

                    const data = await response.json();
                    localStorage.setItem("token", data.access_token);
                    console.log(data);
                    return true;

                }
                catch (error) {
                    console.log(error);
                    return false;
                }

            },

            validToken: async () => {
                let token = localStorage.getItem('token');
                if (!token) {
                    console.log("No se encontró token en localStorage");
                    setStore({ auth: false });
                    return; // Salir temprano si no hay token
                }
                
                try {
                    let response = await fetch('https://urban-space-funicular-xq576v9pv7cv9j-3000.app.github.dev/validate-token/', {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + token
                        }
                    });
            
                    if (!response.ok) {
                        // Si el estado de la respuesta no es exitoso, manejar según el código específico
                        if (response.status == 401) {
                            localStorage.removeItem("token");
                            console.log("Sesión no autorizada o token inválido");
                            setStore({ auth: false });
                        } else {
                            console.log("Error en la validación con estado: ", response.status);
                        }
                        return; // Retorna para evitar lecturas adicionales de la respuesta
                    }
            
                    const data = await response.json();
                    console.log("Validación exitosa, datos recibidos:", data);
                    setStore({ auth: data.is_logged });
                    return data; // Retorna los datos en caso de éxito
                } catch (error) {
                    console.log("Error de red o al realizar la petición:", error);
                    setStore({ auth: false }); // Considerar no autenticado en caso de error
                }
            },            

            addFavorites: (name) => {
                setStore({
                    favorites: [...getStore().favorites, name],
                    counter: getStore().counter + 1,
                });
            },

            deleteFavorites: (name) => {
                const currentFavorites = getStore().favorites;
                const updatedFavorites = currentFavorites.filter((favorite) => favorite !== name);

                setStore({
                    favorites: updatedFavorites,
                    counter: updatedFavorites.length,
                });
            },

            getPeople: async () => {
                try {
                    const storedDataPeople = localStorage.getItem("peopleData");

                    if (storedDataPeople) {
                        setStore({ people: JSON.parse(storedDataPeople) });
                    } else {
                        const fetchPromises = [];
                        for (let index = 1; index <= 10; index++) {
                            const urlPeople = `https://www.swapi.tech/api/people/${index}`;
                            const fetchPromise = fetch(urlPeople)
                                .then(res => res.json())
                                .catch(err => console.error(`Error to get data from ${urlPeople}: ${err}`));

                            fetchPromises.push(fetchPromise);
                        }

                        const people = await Promise.all(fetchPromises);

                        setStore({ people });

                        localStorage.setItem("peopleData", JSON.stringify(people));
                    }
                } catch (error) {
                    console.error('Error to get people details:', error);
                }
            },

            getPlanets: async () => {
                try {
                    const storedDataPlanets = localStorage.getItem("planetsData");

                    if (storedDataPlanets) {
                        setStore({ planets: JSON.parse(storedDataPlanets) });
                    } else {
                        const fetchPromisesPlanets = [];
                        for (let index = 1; index <= 10; index++) {
                            const urlPlanets = `https://www.swapi.tech/api/planets/${index}`;
                            const fetchPromisePlanet = fetch(urlPlanets)
                                .then(res => res.json())
                                .catch(err => console.error(`Error getting data from  ${urlPlanets}: ${err}`));

                            fetchPromisesPlanets.push(fetchPromisePlanet);
                        }

                        const planets = await Promise.all(fetchPromisesPlanets);

                        setStore({ planets });

                        localStorage.setItem("planetsData", JSON.stringify(planets));
                    }
                } catch (error) {
                    console.error('Error getting planets details:', error);
                }
            },




            getStarships: async () => {
                try {
                    const storedDataStarships = localStorage.getItem("starshipsData");

                    if (storedDataStarships) {
                        setStore({ starships: JSON.parse(storedDataStarships) });

                    } else {
                        const fetchPromisesStarships = [];
                        const maxStarships = 10;
                        let starshipsDetailsWithPropertiesCount = 0;
                        let totalStarshipsDetailsChecked = 0;

                        const fetchStarshipDetailsData = async (index) => {
                            const url = `https://www.swapi.tech/api/starships/${index}`;
                            try {
                                const res = await fetch(url);
                                const data = await res.json();

                                if (data && data.result && data.result.properties) {
                                    starshipsDetailsWithPropertiesCount++;
                                    return data;
                                } else {
                                    throw new Error('Starship without properties');
                                }
                            } catch (error) {
                                console.error(`Error getting data from ${url}: ${error}`);
                                return null;
                            }
                        };

                        while (starshipsDetailsWithPropertiesCount < maxStarships && totalStarshipsDetailsChecked < maxStarships * 2) {
                            const starshipDetailsData = await fetchStarshipDetailsData(totalStarshipsDetailsChecked + 1);
                            if (starshipDetailsData) {
                                fetchPromisesStarships.push(starshipDetailsData);
                            }
                            totalStarshipsDetailsChecked++;
                        }

                        const starships = await Promise.all(fetchPromisesStarships);

                        setStore({ starships });

                        localStorage.setItem("starshipsData", JSON.stringify(starships));
                    }
                } catch (error) {
                    console.error('Error getting starships details:', error);
                }
            },

        }
    };

};

export default getState;
