import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, errors }) => {
    return (
        <div>
            <label htmlFor={name}> {label} </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />
            {errors && (
                <div className="form-control is-invalid" role="alert">
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
