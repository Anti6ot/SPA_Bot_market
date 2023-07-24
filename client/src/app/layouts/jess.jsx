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
    console.log(DLCs);
    return (
        <>
            {isLoading ? (
                <div className="jess_container">
                    <div className="jess_item">
                        <div className="jess_text">
                            <h1>JE$$</h1>
                            <h2>34500 P</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Facere itaque minus non
                                provident quisquam, sapiente ullam. Aliquid
                                aperiam ea in incidunt maiores provident saepe,
                                veritatis? Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Ad aliquid, aut,
                                consequatur dolorem earum enim, id molestiae
                                molestias mollitia nemo nesciunt nihil
                                praesentium quo voluptates.
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
                            {DLCs.map((dls) => (
                                <DlcItem dlc={dls} key={dls._id} />
                            ))}
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
