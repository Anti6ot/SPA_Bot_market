import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import userService from "../../services/user.service";

// НАСТРОИТЬ ЛОГИН ФОРМ
const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
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
    };
    const isValid = Object.keys(errors).length === 0;

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();

        if (!isValid) {
            try {
                const { content } = await userService.get();
                console.log(content);
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <form onSubmit={handleSubmit}>
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

export default LoginForm;
