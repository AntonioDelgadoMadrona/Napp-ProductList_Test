// DEPENDENCIES
import React, { memo } from "react";
import PropTypes from "prop-types";

// STYLED
import {
  InputContainer,
  StyledInput,
  StyledLabel,
  StyledError,
} from "./styles";

const Input = memo(
  ({
    type,
    name,
    label,
    onChange,
    placeholder,
    value,
    error,
    disabled,
    disableError,
  }) => {
    return (
      <InputContainer className="input__container">
        {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}

        <StyledInput
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          showError={error ? true : false}
        />

        {!disableError && (
          <StyledError>{error && <span>{error}</span>}</StyledError>
        )}
      </InputContainer>
    );
  }
);

Input.propTypes = {
  type: "text" | "password" | "email",
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  disableError: PropTypes.bool,
};

export { Input };
