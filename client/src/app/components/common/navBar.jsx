import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../layouts/modal/login";
import { useSelector } from "react-redux";
import { getCurrentUserId } from "../../store/users";

const NavBar = () => {
    const currentUserId = useSelector(getCurrentUserId());
    console.log(currentUserId);

    const [modalActive, setModalActive] = useState(false);
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
            <div className="container d-flex">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarNav"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item  mx-5">
                            <Link
                                className="nav-link "
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center mx-5">
                            <i
                                className="bi bi-robot"
                                style={{ fontSize: 22 + "px", color: "white" }}
                            ></i>
                            <Link className="nav-link " to="/jess">
                                Jess
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center mx-5">
                            <i
                                className="bi bi-piggy-bank"
                                style={{ fontSize: 22 + "px", color: "white" }}
                            ></i>
                            <Link className="nav-link" to="/kanki">
                                Kanki
                            </Link>
                        </li>
                    </ul>
                    <div className="container-fluid d-flex justify-content-end">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item mx-5">
                                <Login
                                    active={modalActive}
                                    setActive={setModalActive}
                                />
                                <Link
                                    className="nav-link"
                                    to="/login"
                                    onClick={() => setModalActive(true)}
                                >
                                    Login
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
