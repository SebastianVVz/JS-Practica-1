let precio = prompt("Escribe el precio real");

console.log(precio);

let descuento = prompt("Ingresa el descuento");

console.log(descuento);

let precio_descuento = parseFloat(precio) * parseFloat(descuento) /100;

console.log(precio_descuento);

let precio_final = precio - precio_descuento

alert("El precio final es " + precio_final);