// DEPENDENCIES
import React, { memo, useState } from "react";
import PropTypes from "prop-types";

// COMPONENTS
import { Button } from "../../common/Button/Button";

// STYLE
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const ProductDetailsForm = memo(
  ({ productDetails, isOnCart, addProductToCart, removeProductFromCart }) => {
    const initialState = {
      id: productDetails?.id,
      colorCode: productDetails?.options?.colors[0]?.code,
      storageCode: productDetails?.options?.storages[0]?.code,
    };

    const [state, setState] = useState(initialState);

    // UPDATE STATE BY KEY VALUE
    const handleChange = (event) => {
      const { name, value } = event.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    return (
      <React.Fragment>
        {productDetails?.options?.storages && (
          <div>
            <label htmlFor="storageCode">Almacenamiento:</label>
            <select name="storageCode" id="storageCode" onChange={handleChange}>
              {productDetails?.options?.storages.map((storage, index) => (
                <option
                  key={storage.code}
                  value={storage.code}
                  selected={index === 0}
                >
                  {storage.name}
                </option>
              ))}
            </select>
          </div>
        )}
        {productDetails?.options?.colors && (
          <div>
            <label htmlFor="colorCode">Color:</label>
            <select name="colorCode" id="colorCode" onChange={handleChange}>
              {productDetails?.options?.colors.map((color, index) => (
                <option
                  key={color.code}
                  value={color.code}
                  selected={index === 0}
                >
                  {color.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <Button
          size="large"
          color={`${isOnCart ? "danger" : "primary"}`}
          onClick={() =>
            isOnCart
              ? removeProductFromCart(productDetails?.id)
              : addProductToCart(state)
          }
        >
          <FontAwesomeIcon icon={faCartPlus} />
          {isOnCart ? "Eliminar del Carrito" : "Añadir al Carrito"}
        </Button>
      </React.Fragment>
    );
  }
);

ProductDetailsForm.propTypes = {
  productDetails: PropTypes.object,
  isOnCart: PropTypes.bool,
  addProductToCart: PropTypes.func,
  removeProductFromCart: PropTypes.func,
};

export { ProductDetailsForm };
