const supabase = require('../config/supabase');

// DAO para manejar operaciones CRUD de proyectos
const ProjectsDAO = {
    // Obtener todos los proyectos
    async getAllProjects() {
        console.log("INSIDE DAO")
        const { data, error } = await supabase.from('projects').select('*');
        
        if (error) throw new Error(error.message);
        return data;
    },

    // Obtener un proyecto por ID
    async getProjectById(projectId) {
        const { data, error } = await supabase.from('projects').select('*').eq('id', projectId).single();
        if (error) throw new Error(error.message);
        return data;
    },

    // Crear un nuevo proyecto
    async createProject(project) {
        const { data, error } = await supabase.from('projects').insert(project).single();
        if (error) throw new Error(error.message);
        return data;
    },

    // Actualizar un proyecto por ID
    async updateProject(projectId, updatedFields) {
        const { data, error } = await supabase.from('projects').update(updatedFields).eq('id', projectId).single();
        if (error) throw new Error(error.message);
        return data;
    },

    // Eliminar un proyecto por ID
    async deleteProject(projectId) {
        const { data, error } = await supabase.from('projects').delete().eq('id', projectId).single();
        if (error) throw new Error(error.message);
        return data;
    },
};

module.exports = ProjectsDAO;
