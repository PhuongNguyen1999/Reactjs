import http from "../Http";

const getAll = () => {
    return http.get("/category");
};

const get = id => {
    return http.get(`/category/${id}`);
};

const create = data => {
    return http.post("/category", data);
};

const update = (id, data) => {
    return http.put(`/category/${id}`, data);
};

const remove = id => {
    return http.delete(`/category/${id}`);
};

const removeAll = () => {
    return http.delete(`/category`);
};

const findByTitle = name => {
    return http.get(`/category?name=${name}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};