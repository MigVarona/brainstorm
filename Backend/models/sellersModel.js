import pool from "../database.js";
import buyersModel from "./buyersModel.js"

const sellersModel = {
    createProduct: async (name, description, id_category, price, stock, tax ) => {
        const [result] = await pool.query('INSERT INTO products (name, description, id_category, price, stock, tax ) VALUES (?, ?, ?, ?, ?, ?)', [name, description, id_category, price, stock, tax])
        const id = result.insertId
        console.log("Added product")
        return buyersModel.getProductById(id)
    }
}

export default sellersModel;