import { mapProductData, productToAdd, } from "./exportable.js";
class ProductService {
    baseURL = `https://dummyjson.com/products`;
    async getById(productId) {
        try {
            const response = await fetch(`${this.baseURL}/${productId}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch product with ID: ${productId} with status: ${response.status}`);
            }
            const fetchedProduct = await response.json();
            return mapProductData(fetchedProduct);
        }
        catch (error) {
            console.error("Failed to fetch data", error instanceof Error ? error.message : error);
            return undefined;
        }
    }
    async createProduct(product) {
        try {
            const response = await fetch(`
        ${this.baseURL}/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });
            if (!response.ok) {
                throw new Error(`Failed to post product with status: ${response.status}`);
            }
            const newProduct = await response.json();
            return mapProductData(newProduct);
        }
        catch (error) {
            console.error("Failed to POST data", error instanceof Error ? error.message : error);
        }
    }
}
const productService = new ProductService();
productService.getById(1).then(console.log);
productService.createProduct(productToAdd).then(console.log);
