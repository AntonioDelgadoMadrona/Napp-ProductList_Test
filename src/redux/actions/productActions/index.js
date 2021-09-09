// ACTION / TYPES
import * as types from './types';

// SERVICES
import * as productService from '../../../services/productService';

// GET MOVIE LIST
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