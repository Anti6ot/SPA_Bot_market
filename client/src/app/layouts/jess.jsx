import React, { useState, useEffect } from "react";
import "../styles/jess.css";
import { useSelector } from "react-redux";
// import { getDLC } from "../store/dlc";
import { getQuality } from "../store/quality";
import CheckBoxField from "../components/common/form/checkBoxField";

const Jess = () => {
   // const dlcs = useSelector(getDLC());
    const dlcs = [
            { _id: "67rdca3eeb7f6fgeed471818", name: "без рекламы", add: false },
            { _id: "67rdca3eeb7f6fgeed471820", name: "обучение", add: false },
            { _id: "67rdca3eeb7f6fgeed471814", name: "закрытый канал", add: false }
        ]
    ;

    const qualities = useSelector(getQuality());

    const [addDLC, setAddDLC] = useState(dlcs);

    // const [addDLC] = useState(dlcs);

    useEffect(() => {
        console.log("addDLC", addDLC);
        console.log("dlcs", dlcs);
    }, [addDLC]);

    // н а сервера значения менять через dispatch
    //     const handleSubmit = (e) => {
    //     e.preventDefault();
    // };
    const handleChange = (e) => {
        // const { target } = e;
        console.log(e);
        addDLC.map(el => setAddDLC((prevState) => ({
            ...prevState,
            [el.name]: e.value
        }))
        );
        //  setAddDLC((prevState) => ({
        //      ...prevState,
        //      "target.name": "target.value"
        // }));
    };
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
                    {Object.keys(addDLC) && addDLC.length > 0
                        ? <div className="jess_cards">
                            {addDLC.map(el =>
                                (
                                    <form key={el._id} >
                                        <div className="jess_card card-body">
                                            <div className="card_text">
                                                <p>{el.name}</p>
                                                <CheckBoxField
                                                    name={el.name}
                                                    onChange={handleChange}
                                                    value={el.add}
                                                >
                                                    добавить
                                                </CheckBoxField>
                                            </div>
                                        </div>
                                    </form>
                                    )
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
