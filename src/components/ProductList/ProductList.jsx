// DEPENDENCIES
import React, { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";

// REDUX
import { connect } from "react-redux";
import { getProductListAction } from "../../redux/actions/productActions";

// COMPONENTS
import Table from "../common/Table/Table";
import { Input } from "../common/Input/Input";

// STYLED
import {
  productListContainer as Container,
  StyledPosterImg,
  InputContainer,
} from "./styles";

const ProductList = memo(({ getProductListAction, productList }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getProductListAction();
  }, []);

  // IF THE UI IS SEARCHING
  let filteredProducts = [
    ...productList?.filter((product) => product.price !== ""),
  ];
  if (searchText && productList.length > 0) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        product?.model?.toLowerCase().includes(searchText.toLowerCase()) ||
        product?.brand?.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  // SAVE THE CORRECT COLLECTION FOR SHOW IN ORDER
  let products = [];
  if (filteredProducts?.length > 0) {
    filteredProducts.map((product) => {
      const updatedItem = {
        image: (
          <StyledPosterImg>
            <img src={`${product.imgUrl}`} alt={product.model}></img>
          </StyledPosterImg>
        ),
        model: product.model,
        brand: product.brand,
        price: product.price ? `${product.price}€` : "-",
        oldPrice: product.price ? `${Number(product.price) + 25}€` : "",
        id: product.id,
      };
      return (products = [...products, updatedItem]);
    });
  }

  return (
    <Container>
      <h1>Descubre nuestros productos</h1>
      <InputContainer>
        <Input
          type="text"
          label="¿Buscas algun modelo en concreto?"
          name="searchText"
          value={searchText ?? ""}
          onChange={({ target }) => setSearchText(target.value)}
          disableError
        />
      </InputContainer>
      <Table items={products} />
    </Container>
  );
});

ProductList.propTypes = {
  getProductListAction: PropTypes.func,
  productList: PropTypes.array,
};

const mapState = (state) => {
  const { productReducer } = state;
  return {
    productList: productReducer?.productList,
  };
};

const mapDispatch = {
  getProductListAction,
};

ProductList.displayName = 'ProductList';

export { ProductList };

const ProductListContainer = connect(mapState, mapDispatch)(ProductList);

export default ProductListContainer;
