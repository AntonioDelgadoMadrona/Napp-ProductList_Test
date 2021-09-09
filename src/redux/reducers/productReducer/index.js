// TYPES
import * as types from "../../actions/productActions/types";

const initialState = {
  productList: [],
  cartList: [],
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    // GET PRODUCT LIST
    case types.GET_PRODUCT_LIST_REQUEST:
      return { ...state, gettingProductList: true };
    case types.GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        gettingProductList: false,
        productList: action.payload,
      };
    case types.GET_PRODUCT_LIST_FAILURE:
      return { ...state, gettingProductList: false };
    // GET PRODUCT DETAILS
    case types.GET_PRODUCT_DETAILS_REQUEST:
      return { ...state, gettingProductDetails: true };
    case types.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        gettingProductDetails: false,
        productDetails: { ...action.payload },
      };
    case types.GET_PRODUCT_DETAILS_FAILURE:
      return { ...state, gettingProductDetails: false };

    default:
      return { ...state };
  }
}
