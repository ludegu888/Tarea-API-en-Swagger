/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Crear un producto
 *     description: Crea un nuevo producto enviando nombre y precio.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "producto1"
 *               price:
 *                 type: number
 *                 example: 5.5
 *     responses:
 *       201:
 *         description: Producto creado correctamente.
 *       400:
 *         description: Error en los datos enviados.
 */
export async function POST(req) {
    try {
      const body = await req.json();
      
      if (!body.name || !body.price) {
        return Response.json({ message: "Nombre y precio son requeridos" }, { status: 400 });
      }
  
      return Response.json({ message: "Producto agregado", product: body }, { status: 201 });
    } catch (error) {
      return Response.json({ message: "Error en la solicitud" }, { status: 500 });
    }
  }
  
