import React from "react";
import "../styles/jess.css";
import { useSelector } from "react-redux";
import { getDLC } from "../store/dlc";
import { getQuality } from "../store/quality";
import DlcItem from "../components/dlc-item/dlc-item";
import { getIsLoggedIn } from "../store/users";
// import CheckBoxField from "../components/common/form/checkBoxField";

const Jess = () => {
    const qualities = useSelector(getQuality());
    const DLCs = useSelector(getDLC());
    const isLoading = useSelector(getIsLoggedIn());
    return (
        <>
            {isLoading ? (
                <div className="jess_container">
                    <div className="jess_item">
                        <div className="jess_text">
                            <h1>JE$$</h1>
                            <h2>34500 P</h2>
                            <p>
                                Профессиональный инструмент , который подходит
                                как для новичков, так и для опытных трейдеров.
                                HERME$ оценивает текущее состояние рынка,
                                снижает возможные риски и увеличивает прибыль.
                                Торговля предусмотрена на валютной паре: XAUUSD
                                (Золото/Доллар)
                            </p>
                        </div>
                        <div className="jess_img">
                            <img
                                src="https://regmedia.co.uk/2018/12/01/cyborg.jpg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="jess_products">
                        <h1>Что я умею</h1>
                        <div>
                            {qualities ? (
                                <div className="jess_cards">
                                    {qualities.map((el) => (
                                        <div
                                            key={el._id}
                                            className="jess_card card-body"
                                        >
                                            <div className="card_text">
                                                <p>{el.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                "Loading...."
                            )}
                        </div>
                    </div>

                    <div className="jess_products">
                        <h1>Продукты</h1>
                        <div className="carts_container">
                            {DLCs
                                ? DLCs.map((dls) => (
                                      <DlcItem dlc={dls} key={dls._id} />
                                  ))
                                : "Loading2234"}
                        </div>
                    </div>
                </div>
            ) : (
                "Loading11..."
            )}
        </>
    );
};

export default Jess;
