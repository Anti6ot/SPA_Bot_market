import React, { useEffect, useState } from "react";
import TextField from "../common/form/textField";
import { validator } from "../../utils/validator";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/users";

const RegisterForm = ({ setActive }) => {
    const dispatch = useDispatch();
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

    // async function signUp() {
    //     try {
    //         const content = await authService.register(data);
    //
    //         return content;
    //     } catch (e) {
    //         setErrors(e.response.data.error);
    //         if (e.response.data.error.message === "EMAIL_EXISTS") {
    //             console.log("Почта уже зарегестрирована");
    //         }
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
            dispatch(signUp(data));
            setActive(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="d-flex justify-content-center"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="green"
                 className="bi bi-clipboard2-check-fill" viewBox="0 0 16 16">
                <path
                    d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
                <path
                    d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
            </svg></h1>
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
