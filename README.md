## EJEMPLO GRAPHQL PARA PRACTICA DE DEPLOY EN RAILWAY.APP

### En este ejercicio nos enfocamos en:

1. Crear una cuenta gratuita en railway.app.
2. Forkear y clonar el repo https://github.com/mundostr/coder_51220_graphql
3. Configurar variables de entorno y realizar un deploy simple de la rama principal.
4. Agregar los entornos para devel y qa.
5. Sincronizar con repo Github las distintas ramas.
6. Agregar los entornos devel y qa en railway, conectando a la rama correspondiente.
7. Realizar cambios locales en devel y sincronizar con remoto.
8. Efectuar pull request hacia qa y luego hacia master, probando funcionamiento en railway.


### Salidas
- Permite consultar colección de usuarios en bbdd MongoDB coder51220 que hemos venido utilizando (configurar para utilizar la bbdd remota Atlas).


### Dependencias
```bash
$ npm i express express-graphql graphql mongoose --save
$ npm i nodemon --save-dev
```


### Variables de entorno necesarias
```bash
APP_PORT=3000
MONGODB_URI=mongodb+srv://<usuario>:<clave>@cluster0.4qaobt3.mongodb.net/coder51220
```


### Enlaces de referencia
- Sitio oficial: [Graphql](https://graphql.org/)
- Interacción con Express: [express-graphql](https://graphql.org/graphql-js/express-graphql/)