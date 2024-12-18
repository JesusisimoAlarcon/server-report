const express = require('express');
const controller = require('../controllers/controller');
const multer = require('multer');
// const upload = multer({
//     dest: 'public/',
// });

// Configuración de Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/'); // Directorio donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
        // Personalizar el nombre del archivo
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        // cb(null, 'miArchivo-' + uniqueSuffix + '.pdf'); // Ejemplo: miArchivo-1684236543-123456789.pdf
        cb(null, 'ticket.pdf'); // Ejemplo: miArchivo-1684236543-123456789.pdf
    }
});

const upload = multer({ storage: storage });

class Controlador {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        this.router.post('/reporte', upload.single('pdf'), controller.controller.getReporte);
    }
}
module.exports = new Controlador().router;