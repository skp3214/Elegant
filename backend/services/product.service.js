import productDao from "../dao/product.dao.js";

export const createProduct = async (product) => {
    return await productDao.createProduct(product);
};

export const getProducts = async () => {
    return await productDao.getProducts();
};

export const getProductById = async (id) => {
    return await productDao.getProductById(id);
}

export const updateProduct = async (id, product) => {
    return await productDao.updateProduct(id, product);
};

export const deleteProduct = async (id) => {
    return await productDao.deleteProduct(id);
}