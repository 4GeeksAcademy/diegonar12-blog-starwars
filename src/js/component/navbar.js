import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg"
                        alt="Star Wars"
                        width="100"
                        height="40"
                    />
                </a>

                {/* Dropdown de Favoritos */}
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="favoritesDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Favorites <span className="badge bg-secondary">4</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="favoritesDropdown">
                        <li>
                            <a className="dropdown-item" href="#">
                                Luke Skywalker{" "}
                                <button className="btn btn-sm btn-danger ms-2">
                                    <i className="bi bi-trash"></i>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Darth Vader{" "}
                                <button className="btn btn-sm btn-danger ms-2">
                                    <i className="bi bi-trash"></i>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Leia Organa{" "}
                                <button className="btn btn-sm btn-danger ms-2">
                                    <i className="bi bi-trash"></i>
                                </button>
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Han Solo{" "}
                                <button className="btn btn-sm btn-danger ms-2">
                                    <i className="bi bi-trash"></i>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
