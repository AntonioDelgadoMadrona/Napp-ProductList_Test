// TYPES
import * as types from "../../actions/productActions/types";

const initialState = {
  productList: [],
  cartList: []
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    // GET MOVIE LIST
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

    default:
      return { ...state };
  };
};