import React from "react";
import "../styles/jess.css";
import { useSelector } from "react-redux";
import { getDLC } from "../store/dlc";
import { getQuality } from "../store/quality";

const Jess = () => {
    // добавить обьект в db
    const dlcs = useSelector(getDLC());
    const qualities = useSelector(getQuality());
    return (
        <div className="jess_container">
            <div className="jess_item">
                <div className="jess_text">
                    <h1>JE$$</h1>
                    <h2>34500 P</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Facere itaque minus non provident quisquam, sapiente ullam.
                        Aliquid aperiam ea in incidunt maiores provident saepe, veritatis?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid, aut,
                        consequatur dolorem earum enim, id molestiae molestias mollitia nemo
                        nesciunt nihil praesentium quo voluptates.
                    </p>
                </div>
                <div className="jess_img">
                    <img src="https://regmedia.co.uk/2018/12/01/cyborg.jpg" alt=""/>
                </div>
            </div>

            <div className="jess_products">
                <h1>Что я умею</h1>
                <div>
                    {qualities
                        ? <div className="jess_cards">
                            {qualities.map(el =>
                                (<div key={el._id} className="jess_card card-body">
                                    <div className="card_text">
                                        <p>{el.desc}</p>
                                    </div>
                                </div>)
                            )}
                        </div>
                        : "Loading...."
                    }

                </div>
            </div>

            <div className="jess_products">
                <h1>Продукты</h1>
                <div>
                    {dlcs
                        ? <div className="jess_cards">
                            {dlcs.map(el =>
                                (<div key={el._id} className="jess_card card-body">
                                    <div className="card_text">
                                        <p>{el.name}</p>
                                    </div>
                                </div>)
                            )}
                         </div>
                    : "Loading...."
                    }

                </div>
            </div>
        </div>
    );
};

export default Jess;
