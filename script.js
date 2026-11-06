const variable = "hola bro";
console.log(variable.toUpperCase(variable));

vrd = true;

console.log(typeof vrd);

const placaTexto = "  abc 123  ";
let placaTexto2 = placaTexto.trim().toUpperCase();
let placaTexto3 = placaTexto2.replace(" ","");
console.log(placaTexto2);
console.log(placaTexto3);
console.log(placaTexto.length);

/*const numero = 7;
const mensaje = numero %= 2;
    ? "par" ;
    : "impar";
console.log(mensaje);*/

for (let index = 0  ; index < placaTexto2.length; index+=1) {
     
    console.log(placaTexto2[index]);
    if (index <= placaTexto2.length) console.log(placaTexto2 ,"tiene", index ,"letras");
    
        
}

function name(a,b) {
    return a+b;
    
}
console.log("6",7);


const recibos = [
  { casa: "A-101", estrato: 2, metros: 18 },
  { casa: "A-102", estrato: 4, metros: 25 },
  { casa: "B-201", estrato: 6, metros: 30 },
];
const VALOR_METRO = 3000;

function descuento(estrato) {
    switch (Number(estrato)) {
        case 1:
        
            return 1000;
        case 2:
            return 1000;
            break;
        case 3:
            return 500;

        case 4:
            return 500;
        

        default:
            1
        
            break;
}}

console.log(descuento(recibos.estrato));




