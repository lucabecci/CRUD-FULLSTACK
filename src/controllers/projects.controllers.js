const { response } = require('express');
const pool = require ('../database/database');
//all projects
const getProjects = async(req, res) => {
    try {
        const response = await pool.query('SELECT * FROM projects ORDER BY id DESC')
        res.json(response.rows);
       } 
       catch {
        res.status(500).json({
            success: false
        })
       }
}

//get project by id
const getProjectByID = async(req, res) => {
    try{
        const id = req.params.id;
        const querySearch = 'SELECT * FROM projects WHERE id = $1';
        const response = await pool.query(querySearch, [id]);
        //comprobando que haya un dato
        if(response.rows.length > 0){
            res.status(200).json({
                success: true, 
                data: response.rows
            })
        }else{
            res.status(200).json({
                success: false
            })
        } 
    }
    catch{
        res.status(500).json({
            success: false,
            message: 'Internal error, try later.'
        })
    }
}

//new project
const createProject = async(req, res) =>{
    try{
        const { title, description } = req.body;
        const queryCreate = "INSERT INTO projects (title, description) VALUES ($1, $2)";
        const response = await pool.query(queryCreate, [title, description]);

        res.status(200).json({
            success: true,
            body: {
                project: {title, description}
            }
        })
    }
    catch{
        res.status(500).res.json({
            success: false
        })
    }
}

//delete project
const deleteProject = async(req, res) => {
    const id = req.params.id;
    const queryDelete = 'DELETE FROM projects WHERE id = $1'
    const response = await pool.query(queryDelete, [id]);
    res.status(200).json({
        success: true,
        message: `project ${id} deleted successfully`
    })
}

//update project
const updateProject = async(req, res) => {
    try{
        const { title, description } = req.body;
        const id = req.params.id;
        const queryUpdate = 'UPDATE projects SET title = $1, description = $2 WHERE id = $3';
        const response = await pool.query(queryUpdate, [title, description, id]);

        res.status(200).json({
            success: true,
            dataUpdated: response.rowCount
        })
    }
    catch{
        res.status(500).json({
            success: false,
            dataUpdated: 0
        })
    }
}


module.exports = {
    getProjects,
    createProject,
    deleteProject,
    getProjectByID,
    updateProject
}