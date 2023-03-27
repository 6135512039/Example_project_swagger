import { ProductRepository } from "../../data/repositories/product/product_repository";
import { Product } from "../entities/product";

export class GetProductByProductId {
    static async execute(productId: number): Promise<Product | undefined> {
        return ProductRepository.getProductByProductId(productId);
    }
}
