import Http from './http';


export const getAllPaged = (endpoint, page = 0, extraParams = {}) => {
    const params = { page, ...extraParams };

    return Http.get(endpoint, { params }).then(response => response.data);
};

/*
    NOT BEING USED FOR NOW
 */