// DEPENDENCIES
import React, { memo, useEffect } from "react";
import queryString from "querystring";
import { useHistory, useLocation } from "react-router-dom";

// REDUX
import { connect } from "react-redux";
import { getProductDetailsAction } from "../../redux/actions/productActions";

// COMPONENTS
import { Button } from "../common/Button/Button";

// STYLES
import { StyledProductDetails as Container, StyledDetails } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faBatteryFull, faBroadcastTower, faCamera, faCartPlus, faPlug, faStar, faTabletAlt, faUser } from "@fortawesome/free-solid-svg-icons";


const ProductDetails = memo(
  ({
    getProductDetailsAction,
    productDetails,
  }) => {
    // FILTERS FROM URL
    const history = useHistory();
    const { search } = useLocation();
    const { id: productId } = queryString.decode(search.replace("?", ""));

    useEffect(() => {
      getProductDetailsAction(productId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
            <h1>{productDetails?.brand} {productDetails?.model}</h1>
            <div className="productDetails__skills">
              <h3>CARACTERISTICAS</h3>
              <h4>Sistema Operativo: <span>{productDetails?.os}</span></h4>
              <h4>Cámaras: <span>{productDetails?.primaryCamera}  {productDetails?.secondaryCmera}</span></h4>
              <h4>RAM: <span>{productDetails?.ram}</span></h4>
              <h4>CPU: <span>{productDetails?.cpu}</span></h4>
              <h4>Resolucion de pantalla: <span>{productDetails?.displayResolution}</span></h4>
              <h4>Batería: <span>{productDetails?.battery}</span></h4>
              <h4>Dimensiones: <span>{productDetails?.dimentions}</span></h4>
              <h4>Peso: <span>{productDetails?.weight}gr</span></h4>
            </div>

            <div className="productDetails__actions">
              {productDetails?.internalMemory &&
                <div>
                  <label htmlFor="internalMemory">Memoria:</label>
                  <select name="internalMemory" id="internalMemory">
                    {productDetails?.internalMemory.map((item, index) => (
                      <option value={item} selected={index === 0}>{item}</option>
                    ))}
                  </select>
                </div>
              }
              {productDetails?.colors &&
                <div>
                  <label htmlFor="colors">Color:</label>
                  <select name="colors" id="colors">
                    {productDetails?.colors.map((item, index) => (
                      <option value={item} selected={index === 0}>{item}</option>
                    ))}
                  </select>
                </div>
              }
              <Button
                size="large"
                color={`${false ? "danger" : "primary"}`}
              // onClick={() =>
              //   isFav
              //     ? deleteProductFromFavouritesAction(productDetails?.id)
              //     : addProductToFavouritesAction(productDetails)
              // }
              >
                <FontAwesomeIcon icon={faCartPlus} />                
                {false ? "Eliminar del Carrito" : "Añadir al Carrito"}
              </Button>
            </div>
          </div>
        </StyledDetails>
      </Container>
    );
  }
);

const mapState = (state) => {
  const { productReducer } = state;
  return {
    productDetails: productReducer.productDetails,
    cartList: productReducer.cartList,
  };
};

const mapDispatch = {
  getProductDetailsAction,
};

export { ProductDetails };

const ProductDetailsContainer = connect(mapState, mapDispatch)(ProductDetails);

export default ProductDetailsContainer;
