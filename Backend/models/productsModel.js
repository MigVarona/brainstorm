import pool from "../database.js";

const productsModel = {

    getAllProducts: async () => {
        const [rows] = await pool.query('SELECT * FROM products') 
        return rows
    },

    getProductById: async (id) => {
        const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]) 
        return rows[0]
    },

    createProduct: async (name, description, id_category, price, stock, tax ) => {
        const [result] = await pool.query('INSERT INTO products (name, description, id_category, price, stock, tax ) VALUES (?, ?, ?, ?, ?, ?)', [name, description, id_category, price, stock, tax])
        const id = result.insertId
        console.log("Added product")
        return productsModel.getProductById(id)
    }
}

export default productsModel;