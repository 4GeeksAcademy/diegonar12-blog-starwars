import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

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
				<div style={{
					display: "flex",
					flexDirection: "row",
					overflowX: "auto",
					overflowY: "hidden",
					whiteSpace: "nowrap",
					padding: "1rem",
					gap: "1rem",
					border: "1px solid #ccc",
					borderRadius: "8px",
				}} className="d-flex overflow-auto">
					{store.characters.map((character) => (
						<div className="card mx-2" style={{
							minWidth: "200px",
							height: "450px",
							backgroundColor: "#f5f5f5",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							borderRadius: "8px",
							boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
						}} key={character.uid}>
							<img
								src={`https://starwars-visualguide.com//assets/img/characters/${character.uid}.jpg`}
								className="card-img-top"
								alt={character.name}
								style={{
									width: "100%",
									height: "200px",
									objectFit: "cover",
									borderRadius: "8px 8px 0 0",
								}}
							/>
							<div className="card-body d-flex flex-column justify-content-between">
								<h5 className="card-title">{character.name}</h5>
								<p className="card-text">
									<strong>Gender:</strong> {character.gender || "Unknown"} <br />
									<strong>Hair Color:</strong> {character.hair_color || "Unknown"} <br />
									<strong>Eye-Color:</strong> {character.eye_color || "Unknown"}
								</p>
								<div className="d-flex justify-content-between">
									<a href={`/character/${character.uid}`} className="btn btn-primary">
										Learn more!
									</a>
									<button
										className="btn btn-outline-warning"
										style={{ border: "none", background: "transparent" }}
										onClick={() => actions.addToFavorites(character)}
									>
										<i className="bi bi-heart"></i>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Planets */}
			<div className="container my-4">
				<h3 className="text-danger">Planets</h3>
				<div style={{
					display: "flex",
					flexDirection: "row",
					overflowX: "auto",
					overflowY: "hidden",
					whiteSpace: "nowrap",
					padding: "1rem",
					gap: "1rem",
					border: "1px solid #ccc",
					borderRadius: "8px",
				}} className="d-flex overflow-auto">
					{store.planets.map((planets) => (
						<div className="card mx-2" style={{
							minWidth: "200px",
							height: "450px",
							backgroundColor: "#f5f5f5",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							borderRadius: "8px",
							boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
						}} key={planets.uid}>
							<img
								src={`https://starwars-visualguide.com//assets/img/planets/${planets.uid}.jpg`}
								className="card-img-top"
								alt={planets.name}
								style={{
									width: "100%",
									height: "200px",
									objectFit: "cover",
									borderRadius: "8px 8px 0 0",
								}}
							/>
							<div className="card-body d-flex flex-column justify-content-between">
								<h5 className="card-title">{planets.name}</h5>
								<p className="card-text">
									<strong>Population:</strong> {planets.population || "Unknown"} <br />
									<strong>Terrain:</strong> {planets.terrain || "Unknown"} <br />
								</p>
								<div className="d-flex justify-content-between">
									<a href={`/planets/${planets.uid}`} className="btn btn-primary">
										Learn more!
									</a>
									<button
										className="btn btn-outline-warning"
										style={{ border: "none", background: "transparent" }}
										onClick={() => actions.addToFavorites(planets)}
									>
										<i className="bi bi-heart"></i>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Vehicles */}
			<div className="container my-4">
				<h3 className="text-danger">Vehicles</h3>
				<div style={{
					display: "flex",
					flexDirection: "row",
					overflowX: "auto",
					overflowY: "hidden",
					whiteSpace: "nowrap",
					padding: "1rem",
					gap: "1rem",
					border: "1px solid #ccc",
					borderRadius: "8px",
				}} className="d-flex overflow-auto">
					{store.vehicles.map((vehicles) => (
						<div className="card mx-2" style={{
							minWidth: "200px",
							height: "450px",
							backgroundColor: "#f5f5f5",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							borderRadius: "8px",
							boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
						}} key={vehicles.uid}>
							<img
								src={`https://starwars-visualguide.com//assets/img/vehicles/${vehicles.uid}.jpg`}
								className="card-img-top"
								alt={vehicles.name}
								style={{
									width: "100%",
									height: "200px",
									objectFit: "cover",
									borderRadius: "8px 8px 0 0",
								}}
							/>
							<div className="card-body d-flex flex-column justify-content-between">
								<h5 className="card-title">{vehicles.name}</h5>
								<p className="card-text">
									<strong>Model:</strong> {vehicles.name|| "Unknown"} <br />
								</p>
								<div className="d-flex justify-content-between">
									<a href={`/vehicles/${vehicles.uid}`} className="btn btn-primary">
										Learn more!
									</a>
									<button
										className="btn btn-outline-warning"
										style={{ border: "none", background: "transparent" }}
										onClick={() => actions.addToFavorites(vehicles)}
									>
										<i className="bi bi-heart"></i>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
