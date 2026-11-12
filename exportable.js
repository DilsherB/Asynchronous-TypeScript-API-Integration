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
export const productToAdd = {
    title: "Cricket Bat",
    price: 200,
    category: "Sports Goods",
    tags: ["cricket", "sports"]
};
