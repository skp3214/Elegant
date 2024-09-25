import Product from "../model/product.model.js";

const createProduct = async (product) => {
    return await Product.create(product);
};

const getProductById = async (id) => {
    return await Product.findById(id);
};

const getProducts = async () => {
    return await Product.find();
};

const updateProduct = async (id, product) => {
    await Product.findByIdAndUpdate(id, product);
    return getProductById(id);
};

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

export default {
    createProduct,
    getProductById,
    getProducts,
    updateProduct,
    deleteProduct,
}