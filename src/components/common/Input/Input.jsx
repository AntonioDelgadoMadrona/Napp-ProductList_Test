// DEPENDENCIES
import React, { memo } from "react";

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

export { Input };