import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCurrentUserData, updateUser } from "../../../../store/users";
import { validator } from "../../../../utils/validator";
import EditUserField from "../../form/editUserField";
import "./userEdit.css";

const UserEdit = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    const currentUser = useSelector(getCurrentUserData());
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        const isValid = validate();
        if (!isValid) return;
        dispatch(
            updateUser({
                ...data
            })
        );

        history.push(`/user`);
    };
    useEffect(() => {
        if (currentUser && !data) {
            setData({
                ...currentUser
            });
        }
    }, [currentUser, data]);
    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false);
        }
    }, [data]);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    return (
        <div className="user-edit">
            <div className="user-edit_container">
                <div className="user-edit_body">
                    <div className="user-edit__item">
                        {!isLoading ? (
                            <form onSubmit={handleSubmit}>
                                <EditUserField
                                    label="Электронная почта"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    errors={errors.email}
                                />
                                <EditUserField
                                    label="логин"
                                    name="login"
                                    value={data.login}
                                    onChange={handleChange}
                                    errors={errors.login}
                                />
                                <EditUserField
                                    label="Пароль"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={handleChange}
                                    errors={errors.password}
                                />
                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    className="btn btn-primary w-100 mx-auto"
                                >
                                    Обновить
                                </button>
                            </form>
                        ) : (
                            "Loading.222.."
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserEdit;
