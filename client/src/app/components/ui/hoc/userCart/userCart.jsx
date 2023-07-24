import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "./userCart.css";

const UserCart = ({ user }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push(history.location.pathname + "/edit");
    };
    return (
        <div className="user-cart">
            <div className="user-cart_body">
                <div className="user-cart_item">
                    <button
                        className="btn btn-dark btn-sm"
                        onClick={handleClick}
                    >
                        <i className="bi bi-gear"></i>
                    </button>

                    <img
                        src={user.image}
                        className="rounded-circle"
                        width="50"
                    />

                    <div className="mt-3">
                        <h4>{user.login}</h4>
                        <p className="text-secondary mb-1">{user.doj}</p>
                        <div className="text-muted">
                            <i
                                className="bi bi-caret-down-fill text-primary"
                                role="button"
                            ></i>
                            <i
                                className="bi bi-caret-up text-secondary"
                                role="button"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
UserCart.propTypes = {
    user: PropTypes.object
};

export default UserCart;
