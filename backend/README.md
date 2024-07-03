# Backend del Proyecto

Este es el backend del proyecto, construido con TypeScript y Express.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Instalación

1. Navega al directorio del backend

   ```bash
   cd backend
   ```

2. Instala las dependencias

   ```bash
   npm install
   ```

## Uso

1. Inicia el servidor en modo de desarrollo

   ```bash
   npm run start
   ```

2. El servidor debería estar corriendo en [http://localhost:3001](http://localhost:3001).

## Estructura del Proyecto

```plaintext
backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   └── app.ts
│   └── types.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Scripts Disponibles

En el directorio `frontend`, puedes ejecutar:

- `npm run start`: Inicia la aplicación en modo de desarrollo.

## Tecnologías Utilizadas

- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
