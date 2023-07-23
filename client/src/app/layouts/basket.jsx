import React from "react";
import { useSelector } from "react-redux";
import { getDLC } from "../store/dlc";

const Basket = () => {
    const dlcs = useSelector(getDLC());
    const addParams = dlcs.map(el => el.add === false);
    console.log(addParams);
    return (
        <div>
            sd
        </div>
        );
};

export default Basket;
