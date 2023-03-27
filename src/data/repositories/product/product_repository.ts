import axios, { Axios, AxiosResponse } from 'axios';
import { Product } from '../../../domain/entities/product';
import { ProductMapper } from './mappers/product_mapper';
import { ProductUrl } from '../../remote/remote';
import { ProductResponse } from './responses/product_response';

export class ProductRepository {
    static async getAllProductRepository(): Promise<Product[]> {
        const response: AxiosResponse = await axios.get(ProductUrl);
        const productResponse: AxiosResponse["data"] = response.data;
        const productList: Product[] = ProductMapper.toProductList(productResponse);

        return productList;
    }

    static async getProductByProductId(productId: number): Promise<Product | undefined> {
        const response: AxiosResponse = await axios.get(ProductUrl);
        const productResponse: AxiosResponse["data"] = response.data;
        const productList: Product[] = ProductMapper.toProductList(productResponse);
        const product: Product | undefined = productList.find((product) => product.id === productId);

        return product;
    }
};
