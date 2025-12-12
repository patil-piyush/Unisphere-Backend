const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "UniSphere API",
      version: "1.0.0",
      description: "API documentation (optional)"
    },
  },
  apis: [], // Empty array = You don’t need inline docs
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = { swaggerUi, swaggerSpec };
