export function mapProductData(product) {
    const { id, title, category, price, tags } = product;
    return {
        id,
        title,
        category,
        price,
        tags,
    };
}
