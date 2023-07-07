import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, errors }) => {
    const formClassname = () => {
        return errors ? "is-invalid" : "";
    };
    return (
        <div className="mb-4">
            <label className="mb-2" htmlFor={name}>
                {" "}
                {label}{" "}
            </label>

            <div className="input-group has-validation">
                <input
                    className={"form-control " + formClassname()}
                    placeholder={name}
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            </div>
            {errors && (
                <div className="form-control" role="alert">
                    {errors}
                </div>
            )}
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    errors: PropTypes.string
};
export default TextField;
