import productsModel from "../models/productsModel.js";

const productsController = {

    getAllProducts: async (req, res) => {
        try {
            const products = await productsModel.getAllProducts()
            res.send(products)
        }catch (e) {
            console.error(e);
        }
    },

    getProductById: async (req, res) => {
        try {
            const id = req.params.id
            const product = await productsModel.getProductById(id)
            res.send(product)
        }catch (e) {
            console.error(e);
        }
    },

    createProduct: async (req, res) => {
        try {
            const { name, description, id_category, price, stock, tax } = req.body
            const product = await productsModel.createProduct(name, description, id_category, price, stock, tax)
            res.status(201).send(product)
        }catch (e) {
            console.error(e);
        }
    }
}

export default productsController;