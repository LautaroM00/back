import mysql from 'mysql2/promise'
import ENVIROMENT from './enviroment.js'



const pool = mysql.createPool(
    {
        host: ENVIROMENT.MYSQL.HOST,
        user: ENVIROMENT.MYSQL.USERNAME ,
        password: ENVIROMENT.MYSQL.PASSWORD,
        database: ENVIROMENT.MYSQL.DATABASE,
        connectionLimit: 1
    },
)

pool.getConnection()
    .then(async (connection) => {
        try {
            // Si ya has especificado la base de datos en la configuración del pool, no necesitas usar `USE`
            await connection.query('SELECT 1'); // Ejecuta una consulta simple para verificar la conexión
            console.log('Conexión con MySQL exitosa y base de datos seleccionada');
        } catch (err) {
            console.error('Error en la consulta: ', err);
        } finally {
            // Siempre libera la conexión
            connection.release();
        }
    })

export default pool