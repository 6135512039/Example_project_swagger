import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './../utils/swagger';

const app: Express = express();
const PORT: number = 3000;
const productRouter = require('./routes/product_rotuer');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/product", productRouter);

app.listen(PORT, () => {
    console.log(`Running on Server Port ${PORT}`)
});
