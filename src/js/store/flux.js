const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            planets: [],
            vehicles: [],
        },
        actions: {
            fetchCharacters: async () => {
                try {
                    setStore({ loading: true, error: null });
                    const response = await fetch("https://www.swapi.tech/api/people");
                    if (!response.ok) throw new Error("Error al hacer fetch en los personajes");
                    const data = await response.json();

                    const characters = data.results.map(async (item) => {
                        const res = await fetch(item.url);
                        if (!res.ok) throw new Error(`Error al obtener detalles de ${item.name}`);
                        const details = await res.json();
                        return {
                            uid: item.uid,
                            name: item.name,
                            ...details.result.properties,
                        };
                    });

                    const resolvedCharacters = await Promise.all(characters);
                    setStore({ characters: resolvedCharacters, loading: false });
                } catch (error) {
                    console.error("Error fetching characters:", error);
                    setStore({ error: error.message, loading: false });
                }
            },
            fetchPlanets: async () => {
                try {
                    setStore({ loading: true, error: null });
                    const response = await fetch("https://www.swapi.tech/api/planets");
                    if (!response.ok) throw new Error("Error al hacer fetch en los planetas");
                    const data = await response.json();

                    const planets = data.results.map(async (item) => {
                        const res = await fetch(item.url);
                        if (!res.ok) throw new Error(`Error al obtener detalles de ${item.name}`);
                        const details = await res.json();
                        return {
                            uid: item.uid,
                            name: item.name,
                            ...details.result.properties,
                        };
                    });

                    const resolvedPlanets = await Promise.all(planets);
                    setStore({ planets: resolvedPlanets, loading: false });
                } catch (error) {
                    console.error("Error fetching planets:", error);
                    setStore({ error: error.message, loading: false });
                }
            },
            fetchVehicles: async () => {
                try {
                    setStore({ loading: true, error: null });
                    const response = await fetch("https://www.swapi.tech/api/vehicles");
                    if (!response.ok) throw new Error("Error al hacer fetch en los vehículos");
                    const data = await response.json();

                    const vehicles = data.results.map(async (item) => {
                        const res = await fetch(item.url);
                        if (!res.ok) throw new Error(`Error al obtener detalles de ${item.name}`);
                        const details = await res.json();
                        return {
                            uid: item.uid,
                            name: item.name,
                            ...details.result.properties,
                        };
                    });

                    const resolvedVehicles = await Promise.all(vehicles);
                    setStore({ vehicles: resolvedVehicles, loading: false });
                } catch (error) {
                    console.error("Error fetching vehicles:", error);
                    setStore({ error: error.message, loading: false });
                }
            },
        },
    };
};

export default getState;
