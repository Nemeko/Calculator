
let calculadora = document.querySelector("*")
let display = document.querySelector("#lcd")
let teclado = document.querySelector(".teclado")
let numero = [0,0,0]
let idx = 1
let operacion = "igual"

const alu = {
    sumar(a,b){
        return a+b     
    },
    restar(a,b){
        return a-b
    },
    multiplicar(a,b){
        return a*b
    },
    dividir(a,b){
        return a/b
    },
    mostrarTecla(valor){
        console.log("Tecla presionada: " + valor)
    }
}


calculadora.addEventListener("keydown", e => { 
    e.key >= 0 && e.key <= 9 ? numero[idx] += e.key:""//numero.push(e.key) :"";
    numero[idx] = parseFloat(numero[idx])      //convierte el string en numero
    console.log("Num 1: "+numero[1] + " -- Num 2: "+ numero[2])
    
    console.log(e.code)
    
    //e.code == "NumpadEnter" ? console.log(numero[2]):""
    if (e.code == "NumpadEnter"){
        switch(operacion){
        case "sumar":
            
        case "restar":
        
        case "multiplicar":
        
        case "dividir":
        
        }
    }
    

    if (e.code == "NumpadAdd"){
        idx = 2
        numero[0] = alu.sumar(numero[1],numero[2])
        numero[1] = numero[0]
        numero[2] = 0
        console.log("Dentro de Sumar")
    }
    if (e.code == "NumpadSubtract"){
        idx = 2
        numero[0] = alu.restar(numero[1],numero[2])
        numero[1] = numero[0]
        numero[2] = 0
        console.log("Dentro de Restar")
    }
    
    

    //e.code == "NumpadSubtract"
    //e.code == "NumpadMultiply"
    //e.code == "NumpadDivide"
    console.log("resultado:  " + numero[0])

})


// const mostrarT = (valor) => console.log("Tecla presionada: " + valor );




// calculadora.addEventListener("keydown", e => {
//     console.log("Se presiono una tecla: " + e.keyCode)
//     switch(e.keyCode){
//     case 96:
//         mostrarT("0");
//         numero[idx] += "0";
//         console.log("Numero: " + numero);
//         break;
//     case 97:
//         mostrarT("1");
//         numero[idx] += "1";
//         console.log("Numero: " + numero);
//         break;
//     case 98:
//         mostrarT("2");
//         numero[idx] += "2";
//         console.log("Numero: " + numero);
//         break;
//     case 99:
//         mostrarT("3");
//         numero[idx] += "3";
//         console.log("Numero: " + numero);
//         break;
//     case 100:
//         mostrarT("4");
//         numero[idx] += "4";
//         console.log("Numero: " + numero);
//         break;
//     case 101:
//         mostrarT("5");
//         numero[idx] += "5";
//         console.log("Numero: " + numero);
//         break;
//     case 102:
//         mostrarT("6");
//         numero[idx] += "6";
//         console.log("Numero: " + numero);
//         break;
//     case 103:
//         mostrarT("7");
//         numero[idx] += "7";
//         console.log("Numero: " + numero);
//         break;
//     case 104:
//         mostrarT("8");
//         numero[idx] += "8";
//         console.log("Numero: " + numero);
//         break;
//     case 105:
//         mostrarT("9");
//         numero[idx] += "9";
//         console.log("Numero: " + numero);
//         break;
//     case 106:
//         mostrarT('*');
//         break;
//     case 107:
//         mostrarT("+");
//         idx++
//         numero[idx] = ""
//         break;
//     case 109:
//         mostrarT("-");
//         break;
//     case 110:
//         mostrarT(".");
//         break;
//     case 111:
//         mostrarT("/");
//         break;
//     case 13:
//         mostrarT("Enter");
//     }
// })








// 103 = 7
// 104 = 8
// 105 = 9
// 100 = 4
// 101 = 5
// 102 = 6
// 97 = 1
// 98 = 2
// 99 = 3

// 106 = *
// 109 = -
// 107 = +
// 13 = =
// 96 = 0
// 110 = .
// 111 = /
