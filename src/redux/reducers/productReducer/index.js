/* eslint-disable no-case-declarations */
// TYPES
import * as types from "../../actions/productActions/types";

// UTILS
import { getItemSessionStorage, saveItemSessionStorage } from "../../../utils/sessionStorageUtils";

const initialState = {
  productList: [],
  cartList: getItemSessionStorage('cartList', []),
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
    // SET PRODUCT REDUCER
    case types.SET_PRODUCT_REDUCER:
      let newState = { ...state };
      action.payload.map((tuple) => {
        const [key, value] = tuple;
        return (newState = {
          ...newState,
          [key]: value,
        });
      });
      return (state = { ...newState });
    // ADD PRODUCT TO CART
    case types.ADD_PRODUCT_TO_CART_REQUEST:
      return { ...state, addingProductToCart: true };
    case types.ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        addingProductToCart: false,
        cartList: [
          ...saveItemSessionStorage("cartList", [
            ...state.cartList,
            action.payload,
          ]),
        ],
      };
    case types.ADD_PRODUCT_TO_CART_FAILURE:
      return { ...state, addingProductToCart: false };
    // REMOVE PRODUCT FROM CART
    case types.REMOVE_PRODUCT_FROM_CART_REQUEST:
      const updatedCart = [
        ...state.cartList.filter((product) => product.id !== action.payload),
      ];
      return {
        ...state,
        cartList: [...saveItemSessionStorage("cartList", updatedCart)],
      };

    default:
      return { ...state };
  }
}
