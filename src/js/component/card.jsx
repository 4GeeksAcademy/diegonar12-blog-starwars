import React from "react";

const Card = ({ item, type, onAddToFavorites }) => {
    return (
        <div
            className="card mx-2"
            style={{
                minWidth: "250px",
                minHeight: "450px",
                maxHeight: "550px",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
        >
            <img
                src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`}
                className="card-img-top"
                alt={item.name}
                style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px 8px 0 0",
                }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5
                    className="card-title"
                    style={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                    }}
                >
                    {item.name}
                </h5>
                <p
                    className="card-text"
                    style={{
                        fontSize: "0.9rem",
                        lineHeight: "1.4",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 6,
                        WebkitBoxOrient: "vertical",
                        wordWrap: "break-word",
                    }}
                >
                    {type === "characters" && (
                        <>
                            <strong>Gender:</strong> {item.gender || "Unknown"} <br />
                            <strong>Hair Color:</strong> {item.hair_color || "Unknown"} <br />
                            <strong>Eye Color:</strong> {item.eye_color || "Unknown"}
                        </>
                    )}
                    {type === "planets" && (
                        <>
                            <strong>Population:</strong> {item.population || "Unknown"} <br />
                            <strong>Terrain:</strong> {item.terrain || "Unknown"} <br />
                            <strong>Climate:</strong> {item.climate || "Unknown"}
                        </>
                    )}
                    {type === "vehicles" && (
                        <>
                            <strong>Manufacturer:</strong> {item.manufacturer || "Unknown"} <br />
                            <strong>Cost in credits:</strong> {item.cost_in_credits || "Unknown"} <br />
                            <strong>Max atmosphering speed:</strong> {item.max_atmosphering_speed || "Unknown"}
                        </>
                    )}
                </p>
                <div className="d-flex justify-content-between">
                    <a href={`/learnMore/${type}/${item.uid}`} className="btn btn-primary">
                        Learn more!
                    </a>
                    <button
                        className="btn btn-outline-warning"
                        style={{ border: "none", background: "transparent" }}
                        onClick={() => onAddToFavorites(item)}
                    >
                        <i className="bi bi-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
