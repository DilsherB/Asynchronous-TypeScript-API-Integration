async function createProduct(product) {
    try {
        const response = await fetch(`https://dummyjson.com/products/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) {
            return {
                success: false,
                message: `Request failed with status ${response.status}`,
                data: undefined,
            };
        }
        const newProduct = await response.json();
        return {
            success: true,
            message: "Product posted/created successfully.",
            data: newProduct,
        };
    }
    catch (error) {
        return {
            success: false,
            message: error instanceof Error ? error.message : "Request failed",
            data: undefined,
        };
    }
}
console.log("====================================");
const productToAdd = {
    title: "Cricket Bat",
    price: 200,
    category: "Sports Goods",
};
createProduct(productToAdd).then((result) => console.log(result));
export {};
