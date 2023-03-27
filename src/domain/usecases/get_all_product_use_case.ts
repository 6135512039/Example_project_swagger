import { ProductRepository } from "../../data/repositories/product/product_repository";
import { Product } from "../entities/product";

export class GetAllProductUseCase {
    static async execute(): Promise<Product[]> {
        return ProductRepository.getAllProductRepository();
    }
}
