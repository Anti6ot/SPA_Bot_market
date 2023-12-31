import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../layouts/modal/login";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../store/users";
import "../card-block/cart-block.css";
import { calcTotalPrice } from "../../utils/totalPrice";
import CartBlock from "../card-block/cart-block";
import { BiCartAlt } from "react-icons/bi";
import { CartMenu } from "../cart-menu/cart-menu";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const [modalActive, setModalActive] = useState(false);
    const [isCartMenuVisible, setisCartMenuVisible] = useState(false);
    const items = useSelector((state) => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
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
                    </ul>
                    <div className="container-fluid d-flex justify-content-end">
                        <ul className="navbar-nav mr-auto">
                            {isLoggedIn ? (
                                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                    <div className="container-fluid">
                                        <button
                                            className="navbar-toggler"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#navbarNavDarkDropdown"
                                            aria-controls="navbarNavDarkDropdown"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation"
                                        >
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div
                                            className="collapse navbar-collapse"
                                            id="navbarNavDarkDropdown"
                                        >
                                            <ul className="navbar-nav">
                                                <li className="nav-item dropdown">
                                                    <a
                                                        className="nav-link dropdown-toggle"
                                                        href="#"
                                                        id="navbarDarkDropdownMenuLink"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        <BiCartAlt
                                                            size={25}
                                                            className="cart-block_icon"
                                                            onClick={() =>
                                                                setisCartMenuVisible(
                                                                    !isCartMenuVisible
                                                                )
                                                            }
                                                        />

                                                        <span className="cart-block__total-price">
                                                            {totalPrice > 0
                                                                ? totalPrice
                                                                : null}
                                                        </span>
                                                    </a>
                                                    <ul
                                                        className="dropdown-menu dropdown-menu-dark"
                                                        aria-labelledby="navbarDarkDropdownMenuLink"
                                                    >
                                                        <li>
                                                            {!isCartMenuVisible ? (
                                                                <CartMenu />
                                                            ) : null}
                                                        </li>
                                                        <CartBlock />
                                                    </ul>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a
                                                        className="nav-link dropdown-toggle"
                                                        href="#"
                                                        id="navbarDarkDropdownMenuLink"
                                                        role="button"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        Profile
                                                    </a>
                                                    <ul
                                                        className="dropdown-menu dropdown-menu-dark"
                                                        aria-labelledby="navbarDarkDropdownMenuLink"
                                                    >
                                                        <li>
                                                            <Link
                                                                className="nav-link"
                                                                to="/user"
                                                            >
                                                                User
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link
                                                                className="nav-link"
                                                                to="/logout"
                                                            >
                                                                LogOut
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            ) : (
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
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
