# Market pasos para poder usar

 Si no se usa el back end el proyecto no funcionara de manera correcta
 La base de datos esta en mongo atlas con una instancia de AWS free

# Back end
 1. descargar el segundo repositorio `back-end-market` para poder usar [back-end-market](https://github.com/adrianhorizon/back-end-market)
 2. instalar dependencias `back-end-market` npm install
 3. npm start la ruta de nuestros endpoints o servicios o Apis `localhost://3000/api/(etc)`

# Front end
 1. instalar las dependencias de nuestro proyecto market npm install
 2. para correr es npm start
 3. para unit test npm test

# Ayudas

 Angular 6
 Webpack
 RXJS
 Angular material
 SCSS
 NodeJS
 MongoDB
 Moongose
 ExpressJS
 ES6
 JsonWebToken

# Using Docker

 three methods steps using docker.
 
 1. docker local the next steps
  - npm run build or ng build --prod
  - docker image build -t market .
  - docker run -p 4200:80 --rm market
 
this step two is reference create and generate container name market. Third step is run localhost machine is port 3000 example localhost:3000