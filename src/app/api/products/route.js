/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Listar productos
 *     description: Retorna todos los productos disponibles.
 *     responses:
 *       200:
 *         description: Éxito al obtener los productos.
 */
export async function GET() {
    const products = [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Smartphone", price: 500 },
      { id: 3, name: "Tablet", price: 300 }
    ];
    
    return Response.json(products, { status: 200 });
  }
  
