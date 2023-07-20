import React from "react";
import "../styles/jess.css";

const Jess = () => {
    // добавить обьект в db
    const textQuality = {
        one: "Имею консервативную и агрессивную\n" +
            "настройку заработка. Выбор настройки\n" +
            "будет зависеть от твоих пожеланий моей\n" +
            "работы.",
        two: "Ежемесячно я буду приносить тебе\n" +
            "прибыль от 8-10%. За год твоя\n" +
            "доходность будет составлять от 100%.",
        three: "Меня не пугают возможные просадки.\n" +
            "Я буду продолжать зарабатывать в любой\n" +
            "экономической ситуации.",
        four: "Я быстрый и умный.\n" +
            "Меня наделили большим количеством\n" +
            "персональных настроек, которые удовлетворят\n" +
            "запросы даже самых требовательных\n" +
            "пользователей.",
        five: "Минимальная сумма для запуска моей работы\n" +
            "начинается от 200 $ до ... "
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
            <div>
                <h1>Что я умею</h1>
                <div className="jess_cards">
                        <div className="jess_card card-body">
                            <div className="card_img"></div>
                            <div className="card_text">
                                <p>{textQuality.one}</p>
                            </div>
                    </div>
                        <div className="jess_card card-body">
                            <div className="card_img"></div>
                            <div className="card_text">
                                <p>{textQuality.two}</p>
                            </div>
                    </div>
                        <div className="jess_card card-body">
                            <div className="card_img"></div>
                            <div className="card_text">
                                <p>{textQuality.three}</p>
                            </div>
                        </div>
                        <div className="jess_card card-body">
                            <div className="card_img"></div>
                            <div className="card_text">
                                <p>{textQuality.four}</p>
                            </div>
                    </div>
                        <div className="jess_card card-body">
                            <div className="card_img"></div>
                            <div className="card_text">
                                <p>{textQuality.five}</p>
                            </div>
                        </div>
                </div>
            </div>
            <div className="jess_products">
                <h1>Продукты</h1>
            </div>
        </div>
    );
};

export default Jess;
