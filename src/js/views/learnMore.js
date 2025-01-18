import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const LearnMore = () => {
    const { type, id } = useParams();
    const { store, actions } = useContext(Context);
    const [item, setItem] = useState(null); // Inicializamos como null
    const [isLoading, setIsLoading] = useState(true);

    const directory = type === "characters" ? "characters" : type === "planets" ? "planets" : "vehicles";

    const loadData = async () => {
        if (store[type]?.length === 0) {
            if (type === "characters") {
                await actions.fetchCharacters();
            } else if (type === "planets") {
                await actions.fetchPlanets();
            } else if (type === "vehicles") {
                await actions.fetchVehicles();
            }
        }

        const items = store[type];
        const currentItem = items?.find((item) => String(item.uid) === String(id));

        if (currentItem) {
            setItem(currentItem);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        loadData();
    }, [type, id]);

    if (isLoading) {
        return <div className="text-center my-5">Loading {type}...</div>;
    }

    if (!item) {
        return <div className="text-center my-5 text-danger">Item not found!</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                {/* Imagen */}
                <div className="col-md-6">
                    {item.uid && (
                        <img
                            src={`https://starwars-visualguide.com/assets/img/${directory}/${item.uid}.jpg`}
                            className="img-fluid rounded shadow"
                            alt={item.name}
                            onError={(e) => {
                                e.target.src = "https://via.placeholder.com/500x500?text=No+Image";
                            }}
                        />
                    )}
                </div>

                {/* Detalles */}
                <div className="col-md-6">
                    <h1 className="text-primary">{item.name}</h1>
                    <p className="text-muted">Details about this {type}:</p>
                    <div className="bg-light p-4 rounded shadow">
                        {type === "characters" && (
                            <>
                                <p>
                                    <strong>Gender:</strong> {item.gender || "Unknown"}
                                </p>
                                <p>
                                    <strong>Hair Color:</strong> {item.hair_color || "Unknown"}
                                </p>
                                <p>
                                    <strong>Eye Color:</strong> {item.eye_color || "Unknown"}
                                </p>
                            </>
                        )}
                        {type === "planets" && (
                            <>
                                <p>
                                    <strong>Population:</strong> {item.population || "Unknown"}
                                </p>
                                <p>
                                    <strong>Terrain:</strong> {item.terrain || "Unknown"}
                                </p>
                                <p>
                                    <strong>Climate:</strong> {item.climate || "Unknown"}
                                </p>
                            </>
                        )}
                        {type === "vehicles" && (
                            <>
                                <p>
                                    <strong>Manufacturer:</strong> {item.manufacturer || "Unknown"}
                                </p>
                                <p>
                                    <strong>Cost in Credits:</strong> {item.cost_in_credits || "Unknown"}
                                </p>
                                <p>
                                    <strong>Max Atmosphering Speed:</strong> {item.max_atmosphering_speed || "Unknown"}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Información adicional */}
            <div className="row mt-5">
                <div className="col">
                    <h2 className="text-secondary">Additional Information</h2>
                    <p className="text-muted">
                        This page displays detailed information about the selected {type}. Use the navigation menu to
                        explore more items. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LearnMore;
