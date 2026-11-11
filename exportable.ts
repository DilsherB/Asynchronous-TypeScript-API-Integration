export interface ApiProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  tags: string[];
}

export function mapProductData(product: ApiProduct): ApiProduct {
  const { id, title, category, price, tags } = product;
  return {
    id,
    title,
    category,
    price,
    tags,
  };
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T | undefined;
}