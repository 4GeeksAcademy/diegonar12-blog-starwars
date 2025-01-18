import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const LearnMore = () => {
    const { type, id } = useParams();
    const { store } = useContext(Context);
    const [item, setItem] = useState(null);

    useEffect(() => {
        console.log("Store data:", store);
        console.log("Type:", type);
        console.log("ID:", id);

        let foundItem = null;

        if (type === "characters") {
            foundItem = store.characters.find((character) => String(character.uid) === String(id));
        } else if (type === "planets") {
            foundItem = store.planets.find((planet) => String(planet.uid) === String(id));
        } else if (type === "vehicles") {
            foundItem = store.vehicles.find((vehicle) => String(vehicle.uid) === String(id));
        }

        console.log("Found Item:", foundItem);
        setItem(foundItem || null);
    }, [type, id, store.characters, store.planets, store.vehicles]);

    if (
        (type === "characters" && store.characters.length === 0) ||
        (type === "planets" && store.planets.length === 0) ||
        (type === "vehicles" && store.vehicles.length === 0)
    ) {
        return <div>Loading {type}...</div>;
    }

    if (!item) {
        return <div>Item not found in store!</div>;
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <p>Details about this {type}:</p>
            {type === "characters" && (
                <>
                    <p>Gender: {item.gender}</p>
                    <p>Hair Color: {item.hair_color}</p>
                    <p>Eye Color: {item.eye_color}</p>
                </>
            )}
            {type === "planets" && (
                <>
                    <p>Population: {item.population}</p>
                    <p>Terrain: {item.terrain}</p>
                    <p>Climate: {item.climate}</p>
                </>
            )}
            {type === "vehicles" && (
                <>
                    <p>Manufacturer: {item.manufacturer}</p>
                    <p>Cost in Credits: {item.cost_in_credits}</p>
                    <p>Max Atmosphering Speed: {item.max_atmosphering_speed}</p>
                </>
            )}
        </div>
    );
};

export default LearnMore;
