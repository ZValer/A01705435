const Usuario = require('../models/usuario.model');
const bcrypt = require('bcryptjs');

// Controlador para mostrar la vista de inicio de sesión
exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registro: false,
    });
};

// Controlador para manejar la solicitud de inicio de sesión
exports.post_login = (request, response, next) => {
    Usuario.fetchOne(request.body.username)
    // Busca un usuario en la base de datos
    .then(([usuarios, fieldData]) => {
        if (usuarios.length == 1) {
            const usuario = usuarios[0];
                bcrypt.compare(request.body.password, usuario.password)
                    .then((doMatch) => {
                        if(doMatch) {
                            request.session.username = usuario.nombre;
                            request.session.isLoggedIn = true;
                            response.redirect('/');
                        } else {
                            response.redirect('/users/login');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
        } else {
            response.redirect('/users/login');
        }
    })
    .catch((error) => {console.log(error);});
};

// Controlador para manejar la solicitud de cierre de sesión
exports.get_logout = (request, response, next) => {
    // Se destruye la sesión del usuario
    request.session.destroy(() => {
        response.redirect('/users/login'); 
    });
};

// Controlador para mostrar la vista de registro
exports.get_signup = (request, response, next) => {
    response.render('login', {
        username: request.session.username || '',
        registro: true,
    });
};

// Controlador para manejar la solicitud de registro de un nuevo usuario
exports.post_signup = (request, response, next) => {
    // Crear un nuevo objeto de Usuario con los datos proporcionados en la solicitud
    const nuevo_usuario = new Usuario(
        request.body.username, request.body.name, request.body.password
    );
    // Se guarda el nuevo usuario en la base de datos
    nuevo_usuario.save()
        .then(() => {
            // Después de guardar exitosamente, se redirige al usuario a la página de inicio de sesión
            response.redirect('/users/login');
        })
        .catch((error) => {
            console.log(error);
        });
};