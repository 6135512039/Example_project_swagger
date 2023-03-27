import { Request, Response } from 'express';
import { GetAllProductUseCase } from '../../domain/usecases/get_all_product_use_case';
import { GetProductByProductId } from '../../domain/usecases/get_product_by_product_id_use_case';
import { Product } from '../../domain/entities/product';

const getAllProductController = async (req: Request, res: Response) => {
    try {
        const productList: Product[] = await GetAllProductUseCase.execute();

        res.json(productList);
    } catch (error) {
        console.log(error);
    }
}

const getProductByProductIdController = async (req: Request, res: Response) => {
    try {
        const productId: number = parseInt(req.params.productId);
        const product: Product | undefined = await GetProductByProductId.execute(productId);

        res.json(product);
    } catch (error) {
        console.log(error);
    }
}

const createProductIdByProductIdController = async (req: Request, res: Response) => {
    try {
        const productId: string = req.params.productId

        res.send(`This is product ${productId}`)
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllProductController, getProductByProductIdController, createProductIdByProductIdController };
