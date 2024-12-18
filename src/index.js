const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

class Servidor {

    constructor() {
        this.app = express();
        this.configuracion();
        this.middlewares();
        this.rutas();
        this.publico();
        this.iniciarServidor();
    }

    configuracion() {
        this.app.set('port', process.env.PORT || 5000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({ extended: false, limit: '50mb' }));
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(cors());
        // this.app.use(upload.single('image'));
    }

    variables_globales() {


    }

    publico() {
        this.app.use('/api/static', express.static(path.resolve('public')));
    }

    rutas() {
        this.app.use('/api', require('./routes/route'));
    }

    iniciarServidor() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Servidor corriendo en el puerto ${this.app.get('port')}`);
        });
    }

}
new Servidor();