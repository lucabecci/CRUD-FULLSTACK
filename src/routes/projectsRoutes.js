const { Router } = require('express');
const router = Router();
//importando los controladores para cada ruta y peticion.
const { getProjects, 
        createProject, 
        deleteProject, 
        getProjectByID, 
        updateProject 
    } = require('../controllers/projects.controllers');

//all projects
router.get('/', getProjects)

//get project by id
router.get('/:id', getProjectByID)

//new project
router.post('/', createProject)

//delete project
router.delete('/:id', deleteProject)

//update project 
router.put('/:id', updateProject)

module.exports = router;