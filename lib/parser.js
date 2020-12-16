
const parse = document => {
    const books = document.querySelectorAll('.product_pod')

    return [...books].map(book => ({
        title: product.querySelector('thumbnail').src,
        cover_image: product.querySelector('.price_color').textContext,
        rating: product.querySelector('star-rating'),
        price: product.querySelector('price_color'),
        in_stock: product.querySelector('instock-availability')
    }))
}

module.exports = parse;