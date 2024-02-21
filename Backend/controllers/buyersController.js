import buyersModel from "../models/buyersModel.js";

const buyersController = {

    getAllProducts: async (req, res) => {
        try {
            const products = await buyersModel.getAllProducts()
            res.send(products)
        }catch (e) {
            console.error(e);
        }
    },

    getProductById: async (req, res) => {
        try {
            const id = req.params.id
            const product = await buyersModel.getProductById(id)
            res.send(product)
        }catch (e) {
            console.error(e);
        }
    }
}

export default buyersController;