const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
    openapi: '3.0.3',
    info: {
      title: 'BMI server',
      version: '1.0.0',
      description:
        'Calculates the BMI and anayse the risk.',
      contact: {
        name: 'Naresh Reddy Yadulla',
        url: 'https://www.linkedin.com/in/care2achieve/',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ]
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = {swaggerSpec, swaggerUi}