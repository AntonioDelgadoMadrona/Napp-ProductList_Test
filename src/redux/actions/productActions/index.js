// ACTION / TYPES
import * as types from './types';

// SERVICES
import * as productService from '../../../services/productService';

// GET MOVIE LIST
export function getProductListAction(page) {

    return async function (dispatch) {

        dispatch(request());

        await productService.getProductList(page)
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