import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import { useDispatch } from "react-redux";
import { login } from "../../store/users";
import history from "../../utils/history";
import PropTypes from "prop-types";

// НАСТРОИТЬ ЛОГИН ФОРМ
const LoginForm = ({ setActive }) => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const redirect = history.location.state
            ? history.location.state.from.pathname
            : "/";
        const isValid = validate();
        if (!isValid) return;
        dispatch(login({ payload: data, redirect }));
        setActive(false);
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1 className="d-flex justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="red"
                     className="bi bi-person-fill-lock" viewBox="0 0 16 16">
                    <path
                        d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h5v-1a1.9 1.9 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Zm7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z"/>
                </svg></h1>
            <h3 className="mb-4 text-center">Войти</h3>
            <div className="form-group">
                <TextField
                    label="Электронная почта"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    errors={errors.email}
                />

                <TextField
                    label="Пароль"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    errors={errors.password}
                />
                <div className="btn btn-block w-100">
                    <button
                        disabled={!isValid}
                        className="btn btn-primary btn-lg w-100"
                    >
                        Войти
                    </button>
                </div>
            </div>
        </form>
    );
};
LoginForm.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func
};

export default LoginForm;
