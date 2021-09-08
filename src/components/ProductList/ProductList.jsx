// DEPENDENCIES
import { memo, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import queryString from "querystring";

// REDUX
import { connect } from "react-redux";
import { getProductListAction } from "../../redux/actions/productActions";

// COMPONENTS
import { Table } from "../common/Table/Table";
import { Input } from "../common/Input/Input";

// STYLED
import {
  productListContainer as Container,
  StyledPosterImg,
  InputContainer,
} from "./styles";
import { updateURLFilters } from "../../utils/urlFilters";

const MovieList = memo(({ getProductListAction, productList }) => {
  // FILTERS FROM URL
  const history = useHistory();
  const { search } = useLocation();
  const { searchText, page } = queryString.decode(search.replace("?", ""));

  useEffect(() => {
    const currentPage = page ? Number(page) : 1;
    getProductListAction(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchText]);

  // UPDATE URL FILTER BY KEY VALUE
  const handleChange = (event) => {
    const { name, value } = event.target;
    updateURLFilters(name, value, history);
  };

  // SAVE THE CORRECT COLLECTION FOR SHOW IN ORDER
  let products = [];
  if (productList.length > 0) {
    productList.map((product) => {
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

  console.log(productList);

  return (
    <Container>
      <h1>Descubre nuestros productos</h1>
      <InputContainer>
        <Input
          type="text"
          label="¿Buscas algun modelo en concreto?"
          name="searchText"
          value={searchText ?? ""}
          onChange={handleChange}
          disableError
        />
      </InputContainer>
      <Table items={products} />
    </Container>
  );
});

const mapState = (state) => {
  const { productReducer } = state;
  return {
    productList: productReducer?.productList,
  };
};

const mapDispatch = {
  getProductListAction,
};

export { MovieList };

const productListContainer = connect(mapState, mapDispatch)(MovieList);

export default productListContainer;
