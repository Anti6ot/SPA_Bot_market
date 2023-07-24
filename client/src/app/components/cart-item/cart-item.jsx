import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./cart-item.css";
import PropTypes from "prop-types";
import { deleteItemFromCart } from "../../store/cart";

export const CartItem = ({ title, price, id, desc }) => {
    const dispatch = useDispatch();

    const handleDeleteClick = () => {
        dispatch(deleteItemFromCart(id));
    };

    return (
        <div className="cart-item">
            <span>{title}</span>
            <div className="cart-item__price">
                <span>{price} руб.</span>
                <AiOutlineCloseCircle
                    size={15}
                    className="cart-item__delete-icon"
                    onClick={handleDeleteClick}
                />
            </div>
        </div>
    );
};

CartItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    desc: PropTypes.string
};
