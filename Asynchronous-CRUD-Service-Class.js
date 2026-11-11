import { mapProductData } from "./exportable.js";
class ProductService {
    baseUrl = "https://dummyjson.com/products";
    // Fetch one product
    async getProduct(id) {
        try {
            const response = await fetch(`${this.baseUrl}/${id}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch product: ${id}`);
            }
            const product = await response.json();
            return mapProductData(product);
        }
        catch (error) {
            console.error("Get product error:", error instanceof Error ? error.message : error);
            return undefined;
        }
    }
    // Fetch multiple products
    async getProducts(ids) {
        const results = await Promise.allSettled(ids.map((id) => this.getProduct(id)));
        return results
            .filter((result) => result.status === "fulfilled")
            .map((result) => result.value)
            .filter((product) => product !== undefined);
    }
}
// Create service instance
const productService = new ProductService();
// Use service methods
productService.getProduct(5).then((res) => console.log(res));
productService.getProducts([1, 2, 3]).then(console.log);
