import express from "express";
import authRouter from "./routes/auth.route.js";
import productRouter from "./routes/product.route.js";
import dotenv from "dotenv";
import cors from "cors";
import errorHandlerMiddleware from "./middlewares/errorHandler.middleware.js";
import ENVIROMENT from "./config/enviroment.js";
/* import pool from './config/dbMysql.config.js' */
import { ProductRepositoryMySQL} from "./repositories/product.repository.js";
import { UserRepositoryMySQL } from "./repositories/user.repository.js";
import pool from "./config/dbMysql.config.js";
import CartRepositoryMySQL from "./repositories/cart.repository.js";
import cartRouter from "./routes/cart.route.js";

const app = express();
const PORT = 7000;

const corsOptions = {
  origin: [
      'http://localhost:5173',  // Permitir el frontend en desarrollo
      'https://tu-dominio-de-produccion.com',  // Permitir el frontend en producción (reemplaza con tu dominio)
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'],  // Encabezados permitidos
  credentials: true,  // Permitir el envío de cookies o encabezados de autenticación
}

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter)

app.use(errorHandlerMiddleware);

app.get('/ping', (req, res, next) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(
    `El servidor está funcionando en la dirección http://localhost:${PORT}`
  );
});

/*UserRepositoryMySQL.createUser({name: 'constanza', email: 'constanzacatalano@gmail.com', password: 'Delicatessen'}) */

/* UserRepositoryMySQL.resetPassword('', 'nashe ') */

/* UserRepositoryMySQL.deleteUser(3).then((result) => {console.log(result)}) */

/* UserRepositoryMySQL.getUserByEmail('').then((result) => {console.log(result)}) */

/* UserRepositoryMySQL.verifyUser('').then((result) => { console.log(result) })
 */

/*  ProductRepositoryMySQL.createProduct({
    title: 'Toalla pal culo',
    price: 800,
    stock: 90,
    description: 'pa tner el qlo bn limpito xd',
    seller_id: 1,
    category: 'higiene',
    image_base64: null
}).then((result) => {console.log(result)}) */

/* ProductRepositoryMySQL.getAllProducts().then((result) => {console.log(result)}) */

/* ProductRepositoryMySQL.getProductById(1).then((result) => { console.log(result) }) */

/* ProductRepositoryMySQL.updateProduct(2, { category: 'baño', title: 'toalla asi corte re piola perri'}).then((result) => { console.log(result) }) */

/* 
ProductRepositoryMySQL.deleteProduct(2) */

/* ProductRepositoryMySQL.getUserProducts(4).then((result) => {console.log(result)}) */

/* CartRepositoryMySQL.addProductToCart(3, 4)
 */

/* CartRepositoryMySQL.removeProductFromCart(4,3) */