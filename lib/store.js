const pool = require('./utils/pool.js');
const format = require('pg-format');

const store = async books => {

    const result = await Promise.all(books.map(async ({ title, cover_image, rating, price, in_stock }) => {

        console.log(books)

        return await pool.query(`
            INSERT INTO books
            (
            title,
            cover_image,
            rating,
            price,
            in_stock
            )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *
            `,
            [
                title,
                cover_image,
                rating,
                price,
                in_stock
            ]);
    }))

    return result.length;
};

module.exports = store;