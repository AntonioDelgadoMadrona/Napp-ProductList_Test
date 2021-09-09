// ACTION / TYPES
import * as types from './types';
import * as alertActions from '../alertActions';

// SERVICES
import * as productService from '../../../services/productService';

// GET PRODUCT LIST
export function getProductListAction() {

    return async function (dispatch) {

        dispatch(request());

        await productService.getProductList()
            .then(response => {
                dispatch(success(response));
            })
            .catch(() => {
                dispatch(failure());
            });
    };

    function request() { return { type: types.GET_PRODUCT_LIST_REQUEST } };
    function success(payload) { return { type: types.GET_PRODUCT_LIST_SUCCESS, payload } };
    function failure() { return { type: types.GET_PRODUCT_LIST_FAILURE } };
};

// GET PRODUCT DETAILS
export function getProductDetailsAction(id) {

    return async function (dispatch) {

        dispatch(request());

        await productService.getProductDetails(id)
            .then(response => {
                dispatch(success(response));
            })
            .catch(() => {
                dispatch(failure());
            });
    };

    function request() { return { type: types.GET_PRODUCT_DETAILS_REQUEST } };
    function success(payload) { return { type: types.GET_PRODUCT_DETAILS_SUCCESS, payload } };
    function failure() { return { type: types.GET_PRODUCT_DETAILS_FAILURE } };
};

// SET PRODUCT REDUCER 
export function setProductReducerAction(tuplesArray) {
    return { type: types.SET_PRODUCT_REDUCER, payload: tuplesArray }
};

// ADD MOVIE TO FAVOURITE LIST
export function addProductToCartAction(movieDetails) {

    return async function (dispatch) {

        dispatch(request());

        await productService.addProductToCart(movieDetails)
            .then(response => {
                dispatch(success(movieDetails));
                dispatch(alertActions.showToastAction({ message: "Has añadido el producto al carrito", type: "SUCCESS" }));
            })
            .catch(() => {
                dispatch(failure());
            });
    };

    function request() { return { type: types.ADD_PRODUCT_TO_CART_REQUEST } };
    function success(payload) { return { type: types.ADD_PRODUCT_TO_CART_SUCCESS, payload } };
    function failure() { return { type: types.ADD_PRODUCT_TO_CART_FAILURE } };
};

// REMOVE PRODUCT FROM CART
export function removeProductFromCartAction(id) {

    return async function (dispatch) {
        dispatch(request(id));
        dispatch(alertActions.showToastAction({ message: "Has eliminado el producto del carrito", type: "SUCCESS" }));
    };

    function request(payload) { return { type: types.REMOVE_PRODUCT_FROM_CART_REQUEST, payload } };
};