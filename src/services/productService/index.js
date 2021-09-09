// UTILS
import { handleResponse, handleError } from '../../utils/apiUtils';

const API_DOMAIN = 'https://front-test-api.herokuapp.com';

// GET PRODUCT LIST
export async function getProductList() {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return await fetch(`${API_DOMAIN}/api/product`, requestOptions).then(handleResponse, handleError);
};

// GET PRODUCT DETAILS
export async function getProductDetails(id) {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return await fetch(`${API_DOMAIN}/api/product/${id}`, requestOptions).then(handleResponse, handleError);
};

// ADD PRODUCT TO CART
export async function addProductToCart(product) {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...product })
    };

    return await fetch(`${API_DOMAIN}/api/cart`, requestOptions).then(handleResponse, handleError);
};