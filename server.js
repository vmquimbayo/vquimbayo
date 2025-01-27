const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');
const ProjectsDAO = require('./src/dao/projects.dao');
const ContactsDAO = require('./src/dao/contacts.dao'); // Importamos el DAO

const supabase = require('./src/config/supabase'); // Asegúrate de importar supabase correctamente

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoints de la API

// Obtener todos los proyectos
app.get('/api/projects', async (req, res) => {
    try {
        console.log("TRATARA");
        const projects = await ProjectsDAO.getAllProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/contact', async (req, res) => {
    try {
        const { full_name, email, phone_number, subject, message } = req.body;

        // Usamos el DAO para insertar el contacto
        const contact = await ContactsDAO.createContact({ full_name, email, phone_number, subject, message });

        res.status(201).json({ message: 'Contact message saved successfully.', contact });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener un proyecto por ID
app.get('/api/projects/:id', async (req, res) => {
    try {
        const project = await ProjectsDAO.getProjectById(req.params.id);
        res.status(200).json(project);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// Crear un nuevo proyecto
app.post('/api/projects', async (req, res) => {
    try {
        const project = await ProjectsDAO.createProject(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar un proyecto por ID
app.put('/api/projects/:id', async (req, res) => {
    try {
        const updatedProject = await ProjectsDAO.updateProject(req.params.id, req.body);
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Eliminar un proyecto por ID
app.delete('/api/projects/:id', async (req, res) => {
    try {
        const deletedProject = await ProjectsDAO.deleteProject(req.params.id);
        res.status(200).json(deletedProject);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Configuración para servir el frontend React
app.use(express.static(path.join(__dirname, 'build')));

// Ruta comodín (debe ir al final para no interferir con las rutas de la API)
app.get('*', (req, res) => {
    // Verifica que no está accediendo a una ruta de API
    if (req.path.startsWith('/api')) {
        res.status(404).json({ error: 'API route not found.' });
        return;
    }
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
