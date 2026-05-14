# Mi Aplicación Next.js - API con Swagger

Este proyecto es una API desarrollada con **Next.js 15 (App Router)** que gestiona usuarios y productos, incluyendo documentación interactiva mediante Swagger UI.

## 🚀 Funcionalidades

- **Documentación Interactiva:** Integración con Swagger para probar los endpoints en tiempo real.
- **Gestión de Usuarios:** Endpoint para listar usuarios.
- **Gestión de Productos:** 
  - Listar productos existentes.
  - Crear nuevos productos mediante peticiones POST.

## 🛠️ Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/ludegu888/Tarea-API-en-Swagger.git
Instalar dependencias:

Bash
npm install
Ejecutar en modo desarrollo:

Bash
npm run dev
Acceder a la aplicación:
La aplicación estará disponible en http://localhost:3000.

📄 Documentación de la API (Swagger)
La documentación detallada de los endpoints se encuentra en la propia aplicación. Una vez que el servidor esté corriendo, visita:

👉 http://localhost:3000/docs

Desde allí podrás probar:

GET /api/users: Lista de usuarios.

GET /api/products: Lista de productos.

POST /api/product: Crear un producto enviando un JSON con name y price.

📂 Estructura de carpetas relevante
src/app/api/: Contiene la lógica de los endpoints (Users, Products y el generador de JSON de Swagger).

src/app/docs/: Contiene la página que renderiza la interfaz de Swagger UI.

