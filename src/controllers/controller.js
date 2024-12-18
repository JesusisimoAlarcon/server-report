const path = require('path');
const fs = require('fs');

// const printer = require('printer');
const { print } = require('pdf-to-printer');
class Controller {

    async getReporte(req, res) {
        // pdf(Buffer.from(pdfMake.createPdf(docDefinition).output('blob')), {}).then(data => {
        //     const text = data.text
        //     printText(text);
        // });

        console.log(req.file); // Aquí tienes el archivo cargado
        // Procesar el archivo (por ejemplo, guardar en la base de datos)
        res.send('Archivo recibido correctamente');

        // const { data, printerName } = req.body;
        // const pdf = req.file
        const filename = "ticket.pdf";
        // fs.createWriteStream(`public/${filename}`).write(pdf);
        print(`public/${filename}`).then((status) => {
            console.log(status)
        });

        // const { data, printerName } = req.body;

        // try {
        //     printer.printDirect({ data, printerName }, (err, jobId) => {
        //         if (err) {
        //             console.error(err);
        //             res.status(500).json({ error: 'Error al imprimir' });
        //         } else {
        //             res.status(200).json({ message: 'Impresión iniciada', jobId });
        //         }
        //     });
        // } catch (error) {
        //     console.error(error);
        //     res.status(500).json({ error: 'Error inesperado' });
        // }
    }
}
exports.controller = new Controller();