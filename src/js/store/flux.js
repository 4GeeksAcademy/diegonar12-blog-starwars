const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            planets: [],
            vehicles: []
        },
        actions: {
            fetchCharacters: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people");
                    const data = await response.json();
                    setStore({ characters: data.results });
                } catch (error) {
                    console.error("Error al obtener personajes:", error);
                }
            },
            fetchPlanets: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets");
                    const data = await response.json();
                    setStore({ planets: data.results });
                } catch (error) {
                    console.error("Error al obtener los planetas:", error);
                }
            },
            fetchVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles");
                    const data = await response.json();
                    setStore({ vehicles: data.results });
                } catch (error) {
                    console.error("Error al obtener vehículos:", error);
                }
            }
        }
    };
};

export default getState;
