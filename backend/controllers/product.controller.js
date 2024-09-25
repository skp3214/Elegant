import { createProduct, getProductById, getProducts, updateProduct, deleteProduct } from "../services/product.service.js";

export const createProductController = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await createProduct(product);
        res.status(201).json(newProduct);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }
};

export const getProductsController = async (req, res) => {
    try {
        const products = await getProducts();
        res.status(200).json(products);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }
};

export const getProductByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await getProductById(id);
        res.status(200).json(product);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });   
    }
};

export const updateProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = req.body;
        const updatedProduct = await updateProduct(id, product);
        res.status(200).json(updatedProduct);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }
};

export const deleteProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await deleteProduct(id);
        res.status(200).json(deletedProduct);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }
};

