import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card.jsx";
const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.fetchCharacters();
        actions.fetchPlanets();
        actions.fetchVehicles();
    }, []);

    return (
        <div>
            {/* Characters */}
            <div className="container my-4">
                <h3 className="text-danger">Characters</h3>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        overflowX: "auto",
                        overflowY: "hidden",
                        whiteSpace: "nowrap",
                        padding: "1rem",
                        gap: "1rem",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                    }}
                    className="d-flex overflow-auto"
                >
                    {store.characters.map((character) => (
                        <Card
                            key={character.uid}
                            item={character}
                            type="characters"
                            onAddToFavorites={actions.addToFavorites}
                        />
                    ))}
                </div>
            </div>

            {/* Planets */}
            <div className="container my-4">
                <h3 className="text-danger">Planets</h3>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        overflowX: "auto",
                        overflowY: "hidden",
                        whiteSpace: "nowrap",
                        padding: "1rem",
                        gap: "1rem",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                    }}
                    className="d-flex overflow-auto"
                >
                    {store.planets.map((planet) => (
                        <Card
                            key={planet.uid}
                            item={planet}
                            type="planets"
                            onAddToFavorites={actions.addToFavorites}
                        />
                    ))}
                </div>
            </div>

            {/* Vehicles */}
            <div className="container my-4">
                <h3 className="text-danger">Vehicles</h3>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        overflowX: "auto",
                        overflowY: "hidden",
                        whiteSpace: "nowrap",
                        padding: "1rem",
                        gap: "1rem",
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                    }}
                    className="d-flex overflow-auto"
                >
                    {store.vehicles.map((vehicle) => (
                        <Card
                            key={vehicle.uid}
                            item={vehicle}
                            type="vehicles"
                            onAddToFavorites={actions.addToFavorites}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
