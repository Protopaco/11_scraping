

const store = async books => {
    return await Promise.all(books.map(({ title, cover_image, rating, price, in_stock }) => {
        client.query(`
            INSERT INTO books
            title = $1,
            cover_image =$2,
            rating = $3,
            price = $4,
            in_stock = $5
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
};