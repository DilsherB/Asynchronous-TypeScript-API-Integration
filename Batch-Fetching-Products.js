import { mapProductData } from "./exportable.js";
async function fetchMultipleProducts(productIDs) {
    try {
        const promiseArray = productIDs.map(async (id) => {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch product with ID: ${id}`);
            }
            const product = await response.json();
            return product;
        });
        const products = await Promise.all(promiseArray);
        return products.map((product) => mapProductData(product));
    }
    catch (error) {
        console.error("Batch fetch failed: ", error instanceof Error ? error.message : error);
        return [];
    }
}
fetchMultipleProducts([1, 2, 3]).then((result) => {
    console.log("Fetched products:", result);
    console.log("Total products:", result.length);
});
