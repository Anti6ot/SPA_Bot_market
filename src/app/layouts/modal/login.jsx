import React, { useState } from "react";
import PropTypes from "prop-types";
import LoginForm from "../../components/ui/loginForm";
import { useParams } from "react-router-dom";
import RegisterForm from "../../components/ui/registerForm";
const Login = ({ active, setActive }) => {
    const { type } = useParams();

    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );

    const toggleFormType = () => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };
    return (
        <div
            className={active ? "modal active" : "modal"}
            onClick={() => setActive(false)}
        >
            <div className="container mt-5">
                <div
                    className={
                        active ? "modal__content active" : "modal__content"
                    }
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="row">
                        <div
                            className={
                                "col-md-4 offset-md-4 shadow p-4 card-center " +
                                active
                                    ? "modal__content active"
                                    : "modal__content"
                            }
                        >
                            {formType === "register" ? (
                                <>
                                    <RegisterForm />
                                    <p>
                                        Уже есть аккаутнт?
                                        <a
                                            role="button"
                                            onClick={toggleFormType}
                                        >
                                            Войти
                                        </a>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <LoginForm />
                                    <p>
                                        Еще незарегестрированы?
                                        <a
                                            role="button"
                                            onClick={toggleFormType}
                                        >
                                            Зарегестрироваться
                                        </a>
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Login.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func
};
export default Login;
