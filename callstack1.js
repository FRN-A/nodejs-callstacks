function a() {
    b();
}

function b(){
    c();
}

function c(){
    console.log("Función C");
}

function x() {
    y();
}

function y(){
    z();
}

function z(){
    console.log("Funcion z");
}

setTimeout(x, 0);
a();