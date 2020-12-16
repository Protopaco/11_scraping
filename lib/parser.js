
const parse = document => {
    // console.log(document)
    const books = document.querySelectorAll('.product_pod')
    // console.log(books)

    const result = [...books].map(book => ({
        title: book.querySelector('h3 a').title,
        cover_image: book.querySelector('img').src,
        rating: book.querySelector('p.star-rating').className.split(' ')[1],
        price: book.querySelector('p.price_color').textContent,
        in_stock: book.querySelector('p.availability').className.split(' ')[0] === 'instock'
    }))

    return result;
}

module.exports = parse;