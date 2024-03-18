module.exports = (request, response, next) => {
    let canCreate =  false;
    for (let permiso of request.session.permisos) {
        if (permiso.permiso == 'añadir_producto') {
            canCreate = true;
        }
    }
    if(canCreate) {
        next();
    } else {
        return response.redirect('/users/logout');    
    }
}