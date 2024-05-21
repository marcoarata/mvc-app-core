// RUTA --> CONTROLADOR --> VISTA
// RUTA --> CONTROLADOR --> MODELO --> CONTROLADOR --> VISTA

// Import Models
import Customer from '../models/customer_model.js'


// Config. Controller Methods

// Index Controller
export const index_customer = async (req, res) => {

    // Obtener todos los Clientes
    const customers = await Customer.find({})

    res.render('pages/customer/index', { customers });

}

// Show Controller
export const show_customer = async (req, res) => {

    // Obtener Cliente por id
    const customer = await Customer.findById( req.params.id )

    res.render('pages/customer/show', { customer } );

}

// New Controller
export const new_customer = async (req, res) => {

    // Obtener vista de nuevo Cliente
    res.render('pages/customer/new', );

}

// Edit Controller
export const edit_customer = async (req, res) => {

    // Obtener vista de editar Cliente
    const customer = await Customer.findById( req.params.id )

    res.render('pages/customer/edit', { customer } );

}

// Create Controller
export const create_customer = async (req, res) => {

    try {


        // Crear un nuevo cliente utilizando el modelo de cliente de Mongoose
        const new_customer = await new Customer( req.body );

        // Guardar el nuevo cliente en la base de datos
        const customer_save = await new_customer.save();

        console.log(req.body)

        // Redirigir al usuario a una nueva página después de agregar el cliente
        res.redirect('/customer');

    }

    catch (error) {

        console.error('Error al agregar un nuevo cliente:', error.message);
        res.status(500).send('Error del servidor');

    }

}

// Update Controller
export const update_customer = async (req, res) => {

    try {

        // Obtener los datos del formulario
        const { name, rut, email, whatsapp } = req.body;

        // Actualizar el cliente en la base de datos
        const update_customer = await Customer.findByIdAndUpdate(req.params.id, { name, rut, email, whatsapp }, { new: true });

        res.redirect('/customer');

    } catch (error) {

        console.error('Error al actualizar el cliente:', error.message);
        res.status(500).send('Error del servidor');

    }

}

// Delete Controller
export const delete_customer = async (req, res) => {

    try {

        // Buscar el cliente por ID y eliminarlo de la base de datos
        const delete_customer = await Customer.findByIdAndDelete( req.params.id );
        res.redirect('/customer');

    } catch (error) {

        console.error('Error al eliminar el cliente:', error.message);
        res.status(500).send('Error del servidor');


    }

}