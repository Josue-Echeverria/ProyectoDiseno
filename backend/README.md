# API de backend TPet

Esta es una API RESTful creada con Express.js y Sequelize ORM que se conecta a una base de datos de SQL Server. La API proporciona puntos finales para gestionar perfiles veterinarios y de usuarios, mascotas, citas virtuales, pagos, recordatorios y registros médicos para un sistema veterinario de telemedicina.

## Tecnologías
- Node.js con Express.js para crear la API de backend.
- Sequelize ORM para modelado de bases de datos y consultas con SQL Server.
- Docker para contenerización.
- dotenv para gestión de variables de entorno.

## Primeros pasos
Requisitos previos
- Node.js (>= v14.x)
- npm (>= v6.x)
- Docker (para entornos en contenedores)

## Endpoints de la API
### Usuarios
- GET /api/users: obtener todos los usuarios.
- GET /api/users/
: obtener el usuario por ID.
- POST /api/users: crear un nuevo usuario.
- PUT /api/users/
: actualizar un usuario por ID.
- DELETE /api/users/
: eliminar un usuario por ID.
### Perfiles veterinarios
- GET /api/vets: obtener todos los perfiles veterinarios.
- GET /api/vets/
: obtener un perfil veterinario por ID de usuario.
- POST /api/vets: crear un nuevo perfil veterinario.
- PUT /api/vets/
: actualizar un perfil veterinario por ID de usuario.
- DELETE /api/vets/
: eliminar un perfil veterinario por ID de usuario.
### Citas
- GET /api/appointments: obtener todas las citas.
- GET /api/appointments/
: obtener una cita por ID.
- POST /api/appointments: crea una nueva cita.
- PUT /api/appointments/
: actualiza una cita por ID.
- DELETE /api/appointments/
: elimina una cita por ID.
### Mascotas
- GET /api/pets: obtiene todas las mascotas.
- GET /api/pets/
: obtiene las mascotas por ID de usuario.
- POST /api/pets: crea un nuevo perfil de mascota.
- PUT /api/pets/
: actualiza un perfil de mascota por ID.
- DELETE /api/pets/
: elimina un perfil de mascota por ID.
### Servicio Notta
- POST /start-transcription: inicia la transcripción.
- GET /transcription-status/:id, obtiene la transcripción.
### Servicio Shopify
- GET /products: obtiene todos los productos.
## Estructura del proyecto

![image](https://github.com/user-attachments/assets/8dd18bd0-a7f3-4674-8bb7-48118034c6b8)
