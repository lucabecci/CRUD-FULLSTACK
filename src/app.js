const express = require('express');
const projectRoutes = require('./routes/projectsRoutes')


const app = express();

//import routes
const projectsRoutes = require('./routes/projectsRoutes')

//middlewares
app.use(express.json());

//routes
app.use('/projects', projectRoutes)

//exportando app
module.exports = app;