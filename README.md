# Aplicación Backend con **Express.js** y **Node.js**

Este repositorio contiene una aplicación backend desarrollada con **Node.js** y el framework **Express.js**. Utiliza **MySQL** como base de datos y tiene cuatro endpoints básicos para realizar operaciones CRUD: agregar, borrar, modificar y leer.

## Requisitos

Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes programas:

- **Node.js** 
- **MySQL**
- **Visual Studio Code** 

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/Adalab/modulo-4-evaluacion-final-bpw-Bhetleem.git
```

### 2. Instalar dependencias
Navega al directorio del proyecto y ejecuta:

```bash
npm install
npm install express
npm install cors
npm install mysql2
npm install dotenv
npm install nodemon (opcional)
```

### 3. Configurar la base de datos
Asegúrate de tener MySQL en funcionamiento y crea una base de datos llamada "apariv".

### 4. Ejecutar el servidor
Inicia el servidor con:

```bash
npm start o npm run dev (nodemon)
```

### 5. Crear el archivo `.env` con la contraseña de la base de datos.

## Endpoints disponibles
`GET /api/dogs`: Obtiene todos los registros de la tabla dogs. 
***
`POST /api/dogs`: Agrega un nuevo perro a la tabla dogs.
***
`PATCH /api/dogs/:id`: Modifica un registro de la tabla dogs existente.
***
`DELETE /api/dogs/:id`: Elimina un registro de la tabla dogs.





