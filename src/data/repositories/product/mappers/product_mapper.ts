import { Product } from '../../../../domain/entities/product';
import { ProductResponse } from '../responses/product_response';

export class ProductMapper {
    static toProduct(ProductResponse: ProductResponse): Product {
        const { id, title, subtitle, description, price, image } = ProductResponse;

        return { id, title, subtitle, description, price, imageUrl: image };
    }

    static toProductList(productList: ProductResponse[]): Product[] {
        return productList.map(product => ProductMapper.toProduct(product));
    }
}
