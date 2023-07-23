import React from "react";
import "./dlc-buy.css";
import PropTypes from "prop-types";
import { Button } from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../store/cart";

export const DlcBuy = ({ dlc }) => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.itemsInCart);
    const isItemInCart = items.some((item) => item.id === dlc.id);
    const handleClick = (e) => {
        e.stopPropagation();
        if (isItemInCart) {
            dispatch(deleteItemFromCart(dlc.id));
        } else {
            dispatch(setItemInCart(dlc));
        }
    };
    return (
        <div className="dlc-buy">
            <span className="dlc-buy__price">{dlc.price} руб.</span>
            <Button
                type={isItemInCart ? "secondary" : "primary"}
                onClick={handleClick}
            >
                {isItemInCart ? "Убрать из корзины" : "В корзину"}
            </Button>
        </div>
    );
};

DlcBuy.propTypes = {
    dlc: PropTypes.object
};
