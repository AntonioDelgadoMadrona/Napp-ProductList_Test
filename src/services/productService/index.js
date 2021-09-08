// UTILS
import { handleResponse, handleError } from '../../utils/apiUtils';

const API_DOMAIN = 'https://front-test-api.herokuapp.com';

// GET MOVIE LIST
export async function getProductList(page) {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    return await fetch(`${API_DOMAIN}/api/product`, requestOptions).then(handleResponse, handleError);
};