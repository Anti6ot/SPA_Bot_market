import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../button";
import { CartItem } from "../cart-item";
import "./cart-menu.css";
import PropTypes from "prop-types";
import { calcTotalPrice } from "../../utils/totalPrice";

export const CartMenu = ({ onClick }) => {
    const items = useSelector((state) => state.cart.itemsInCart);
    return (
        <div className="cart-menu">
            <div className="cart-menu__games-list">
                {items.length > 0
                    ? items.map((dlc) => (
                          <CartItem
                              key={dlc.id}
                              price={dlc.price}
                              title={dlc.name}
                              desc={dlc.desc}
                              id={dlc.id}
                          />
                      ))
                    : null}
            </div>
            {items.length > 0 ? (
                <div className="cart-menu__arrange">
                    <div className="cart-menu__total-price">
                        <span>Итого:</span>
                        <span>{calcTotalPrice(items)} руб.</span>
                    </div>
                    <Button type="primary" size="m" onClick={onClick}>
                        Оформить заказ
                    </Button>
                </div>
            ) : null}
        </div>
    );
};

CartMenu.propTypes = {
    onClick: PropTypes.func
};
