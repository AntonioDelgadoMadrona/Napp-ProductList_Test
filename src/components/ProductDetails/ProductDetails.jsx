// DEPENDENCIES
import React, { memo, useEffect } from "react";
import queryString from "querystring";
import { useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// REDUX
import { connect } from "react-redux";
import {
  getProductDetailsAction,
  setProductReducerAction,
  addProductToCartAction,
  removeProductFromCartAction,
} from "../../redux/actions/productActions";

// STYLES
import { StyledProductDetails as Container, StyledDetails } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faBroadcastTower,
  faCamera,
  faPlug,
} from "@fortawesome/free-solid-svg-icons";
import { ProductDetailsForm } from "./ProductDetailsForm/ProductDetailsForm";

const ProductDetails = memo(
  ({
    getProductDetailsAction,
    productDetails,
    setProductReducerAction,
    cartList,
    addProductToCartAction,
    removeProductFromCartAction,
  }) => {
    // FILTERS FROM URL
    const history = useHistory();
    const { search } = useLocation();
    const { id: productId } = queryString.decode(search.replace("?", ""));

    useEffect(() => {
      getProductDetailsAction(productId);
      return () => setProductReducerAction([["productDetails", null]]);
    }, []);

    // CHECKS IF THE PRODUCT IS ADDED TO FAV LIST
    const isOnCart = cartList?.some(
      (product) => product.id === productDetails?.id
    );

    return (
      <Container>
        <span onClick={() => history.goBack()}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </span>
        <StyledDetails>
          <div>
            <div className="productDetails__posterImg">
              <img
                src={`${productDetails?.imgUrl}`}
                alt={productDetails?.model}
              />
              <div className="productDetails__posterImg__footer">
                <div>
                  <FontAwesomeIcon icon={faBroadcastTower} />
                  <span>Bluetooth</span>
                  <span>{productDetails?.bluetooth[0]}</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCamera} />
                  <span>Camara</span>
                  <span>{productDetails?.primaryCamera[0]}</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faPlug} />
                  <span>Usb</span>
                  <span>{productDetails?.usb}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="productDetails__info">
            <h1>
              {productDetails?.brand} {productDetails?.model}
            </h1>
            <div className="productDetails__skills">
              <h3>CARACTERISTICAS</h3>
              <h4>
                Sistema Operativo: <span>{productDetails?.os}</span>
              </h4>
              <h4>
                Cámaras:{" "}
                <span>
                  {productDetails?.primaryCamera}{" "}
                  {productDetails?.secondaryCmera}
                </span>
              </h4>
              <h4>
                RAM: <span>{productDetails?.ram}</span>
              </h4>
              <h4>
                CPU: <span>{productDetails?.cpu}</span>
              </h4>
              <h4>
                Resolucion de pantalla:{" "}
                <span>{productDetails?.displayResolution}</span>
              </h4>
              <h4>
                Batería: <span>{productDetails?.battery}</span>
              </h4>
              <h4>
                Dimensiones: <span>{productDetails?.dimentions}</span>
              </h4>
              <h4>
                Peso: <span>{productDetails?.weight}gr</span>
              </h4>
              <div className="productDetails__price">
                <span>{productDetails?.price}€</span>
                <span className="oldPrice">{`${Number(productDetails?.price) + 25}€`}</span>
              </div>
            </div>

            <div className="productDetails__actions">
              {productDetails && (
                <ProductDetailsForm
                  productDetails={productDetails}
                  isOnCart={isOnCart}
                  addProductToCart={addProductToCartAction}
                  removeProductFromCart={removeProductFromCartAction}
                />
              )}
            </div>
          </div>
        </StyledDetails>
      </Container>
    );
  }
);

ProductDetails.propTypes = {
  getProductDetailsAction: PropTypes.func,
  productDetails: PropTypes.object,
  setProductReducerAction: PropTypes.func,
  cartList: PropTypes.array,
  addProductToCartAction: PropTypes.func,
  removeProductFromCartAction: PropTypes.func,
};

const mapState = (state) => {
  const { productReducer } = state;
  return {
    productDetails: productReducer.productDetails,
    cartList: productReducer.cartList,
  };
};

const mapDispatch = {
  getProductDetailsAction,
  setProductReducerAction,
  addProductToCartAction,
  removeProductFromCartAction,
};

ProductDetails.displayName = 'ProductDetails';

export { ProductDetails };

const ProductDetailsContainer = connect(mapState, mapDispatch)(ProductDetails);

export default ProductDetailsContainer;
