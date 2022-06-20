const num1 = prompt("Introduja el Primer Numero")
const num2 = prompt("Introduja el Segundo Numero")

const contador = 0

    while (num1 > num2 || num1 < num2 || num1 == num2){
         
            if (parseInt (num1) == "0" || parseInt(num2) == "0" || (num1 == "-1" || num2 == "-1") ){
        document.write("Este caracteres no se pueden usar")
        
    }
        else if (parseInt (num1) > parseInt(num2) || parseInt(num1) == "0" || parseInt(num2) == "0"){
            document.write(`El numero ${num1} es mayor que : ${num2}`)
            
        }
        else if (parseInt (num1) < parseInt(num2) || parseInt(num1) == "0" || parseInt(num2) == "0"){
            document.write(`El numero ${num1} es MENOR que : ${num2}`)
            
        }
        
        else if (parseInt(num1) == parseInt(num2)){
            document.write(`El numero ${num1} es igual a: ${num2}`)
            
        }
        else{
            document.write("No se pueden introducir caracteres")
        }
        

        contador++;
    }




let h = prompt("Introduce un numero")

   for (i=0; i<=h ;i++)
    if (h%i == 0){
        document.write( "" + i + "" + ""); 
        
    }

    

//          ARRAY DE NUMEROS QUE SE SUMAN 
const superarray = Array();
let sum = 0

for (let i=0;i < 5;i++) {
    superarray[i] = parseInt(prompt("Ingrese los numeros indicados"));
    sum  += parseInt(superarray[i]);
    if ( superarray[i] == -1){
         sum  += parseInt(superarray[i]);
         break;
    }
}


document.write(superarray + " Resultado de la suma: ");

document.write(sum)

    

            //          NUMERO PAR E IMPAR
const a = prompt("Introduce un numero")

   if (a%2 == 0){
        document.write( `El numero ${a} es Par`); 

    } else if (a%2 == 1) {
            document.write( `El numero ${a} es Impar`);
        } else {
            document.write("No es valido, introduzca de nuevo el numero")
        }
        contador++
    


//  TABLA DE MULTIPLICAR 

const numero = prompt("Introduce el numero que quieras para la tabla de multiplicar");

for (i=1; i <= 10; i++) {
    
    document.write(i + "x" + numero + "=" + i*numero + "<br>" + "<br>");
    
}


//  AGREGAR NUMEROS AL ARRAY Y LUEGO ORDENARLOS

let xd = [];
for (i=0; i <= 12; i++) {
    xd[i] = parseInt(prompt("Introduce 6 numeros"));
    xd.push();
    
}

console.log(xd);
document.write("[" + xd + "]" + " ");

xd.sort(function(a, b) {
    return a - b;
});
console.log(xd)

hippie.reverse();
document.write( " - " + xd + " ")

document.write("Cantidad de elementos: " + xd.length);
