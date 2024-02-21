import sellersModel from "../models/sellersModel.js";

const sellersController = {

    createProduct: async (req, res) => {
        try {
            const { name, description, id_category, price, stock, tax } = req.body
            const product = await sellersModel.createProduct(name, description, id_category, price, stock, tax)
            res.status(201).send(product)
        }catch (e) {
            console.error(e);
        }
    }
}

export default sellersController;