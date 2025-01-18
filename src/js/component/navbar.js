import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* Logo que redirige a Home */}
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                        alt="Star Wars"
                        width="100"
                        height="40"
                        className="d-inline-block align-top"
                    />
                </Link>

                {/* Dropdown de Favoritos */}
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="favoritesDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favorites <span className="badge bg-secondary">{store.favorites.length}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">

                        {store.favorites.length === 0 ? (
                            <li className="dropdown-item text-muted">No favorites added</li>
                        ) : (
                            store.favorites.map((fav) => (
                                <li key={fav.uid} className="dropdown-item d-flex justify-content-between align-items-center">
                                    {/* Nombre del favorito */}
                                    <span>{fav.name}</span>
                                    {/* Botón de eliminación */}
                                    <button
                                        className="btn btn-sm btn-danger ms-2"
                                        onClick={() => actions.removeFromFavorites(fav.uid)}
                                    >
                                        <i className="bi bi-trash"></i>
                                    </button>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
