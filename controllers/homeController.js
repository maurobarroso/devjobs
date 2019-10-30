exports.mostrarTrabajos = (req, res) => {
    res.render('home',{
        nombrePagina: 'DevJobs',
        tagline: 'Encuentra y publica trabajos para desarroladores web',
        barra: true,
        boton: true
    });
}