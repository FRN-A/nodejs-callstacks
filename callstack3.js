const fs = require('fs');
const { setImmediate } = require('timers');

fs.readFile("hola.txt", (err, data) => {
    if(err) throw err;
    console.log(data.toString());
});

setImmediate(
    () => {
        console.log("Esto se ejecuta mientras se lee el archivo");
    }
);
