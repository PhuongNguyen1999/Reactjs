import http from "../Http";

const getAll = () => {
    return http.get("/product");
};

const get = id => {
    return http.get(`/product/${id}`);
};

const create = data => {
    return http.post("/product", data);
};

const update = (id, data) => {
    return http.put(`/product/${id}`, data);
};

const remove = id => {
    return http.delete(`/product/${id}`);
};

const removeAll = () => {
    return http.delete(`/product`);
};

const findByName = name => {
    return http.get(`/product?name=${name}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByName
};