import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import { Form } from "react-bootstrap";
import authService from "../../services/auth.service";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const RegisterForm = ({ setActive }) => {
    const history = useHistory();
    const [data, setData] = useState({
        email: "",
        password: "",
        login: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        // Создать валидацию по логину
        login: {
            isRequired: {
                message: "Поле не должно быть пустым"
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

    async function signUp() {
        try {
            const content = await authService.register(data);
            return content;
        } catch (e) {
            setErrors(e.response.data.error);
            if (e.response.data.error.message === "EMAIL_EXISTS") {
                console.log("Почта уже зарегестрирована");
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
            await signUp(data);
            history.push("/");
            setActive(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3 className="mb-4 text-center">Зарегестрироваться</h3>
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                errors={errors.email}
            />
            <TextField
                label="логин"
                name="login"
                value={data.login}
                onChange={handleChange}
                errors={errors.login}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                errors={errors.password}
            />
            <div>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <Form.Group controlId="doj">
                            <Form.Label>Дата рождения </Form.Label>
                            <Form.Control
                                type="date"
                                name="doj"
                                placeholder="Дата рождения"
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </div>
                </div>
            </div>
            <div className="btn btn-block w-100">
                <button className="btn btn-primary btn-lg w-100" disabled={!isValid}>
                    Зарегестрироваться
                </button>
            </div>
        </form>
    );
};

RegisterForm.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func
};
export default RegisterForm;
