const supabase = require('../config/supabase');

class ContactsDAO {
    // Insertar un nuevo contacto en la tabla
    static async createContact({ full_name, email, phone_number, subject, message }) {
        try {
            const { data, error } = await supabase
                .from('contacts')
                .insert([{ full_name, email, phone_number, subject, message }]);

            if (error) {
                throw new Error(`Error inserting contact: ${error.message}`);
            }

            return data;
        } catch (error) {
            throw new Error(`Failed to create contact: ${error.message}`);
        }
    }

    // Obtener todos los contactos
    static async getAllContacts() {
        try {
            const { data, error } = await supabase
                .from('contacts')
                .select('*');

            if (error) {
                throw new Error(`Error fetching contacts: ${error.message}`);
            }

            return data;
        } catch (error) {
            throw new Error(`Failed to fetch contacts: ${error.message}`);
        }
    }

    // Obtener un contacto por ID
    static async getContactById(id) {
        try {
            const { data, error } = await supabase
                .from('contacts')
                .select('*')
                .eq('id', id)
                .single();

            if (error) {
                throw new Error(`Error fetching contact by ID: ${error.message}`);
            }

            return data;
        } catch (error) {
            throw new Error(`Failed to fetch contact by ID: ${error.message}`);
        }
    }

    // Actualizar un contacto por ID
    static async updateContact(id, updates) {
        try {
            const { data, error } = await supabase
                .from('contacts')
                .update(updates)
                .eq('id', id);

            if (error) {
                throw new Error(`Error updating contact: ${error.message}`);
            }

            return data;
        } catch (error) {
            throw new Error(`Failed to update contact: ${error.message}`);
        }
    }

    // Eliminar un contacto por ID
    static async deleteContact(id) {
        try {
            const { data, error } = await supabase
                .from('contacts')
                .delete()
                .eq('id', id);

            if (error) {
                throw new Error(`Error deleting contact: ${error.message}`);
            }

            return data;
        } catch (error) {
            throw new Error(`Failed to delete contact: ${error.message}`);
        }
    }
}

module.exports = ContactsDAO;
