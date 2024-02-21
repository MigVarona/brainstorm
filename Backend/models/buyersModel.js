import pool from "../database.js";

const buyersModel = {

    getAllProducts: async () => {
        const [rows] = await pool.query('SELECT * FROM products') 
        return rows
    },

    getProductById: async (id) => {
        const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]) 
        return rows[0]
    },
}

export default buyersModel;