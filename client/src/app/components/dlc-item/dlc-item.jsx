import React from "react";
import "./dlc-item.css";
import PropTypes from "prop-types";
import { DlcBuy } from "../dlc-buy";

const DlcItem = ({ dlc }) => {
    return (
        <div className="dlc-item">
            <div className="dlc-item__details">
                <span className="dlc-item__title">{dlc.name}</span>
                <span className="dlc-item__description">{dlc.desc}</span>
                <div className="dlc-item__buy">
                    <DlcBuy dlc={dlc} />
                </div>
            </div>
        </div>
    );
};

export default DlcItem;

DlcItem.propTypes = {
    dlc: PropTypes.object
};
