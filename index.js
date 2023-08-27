
let calculadora = document.querySelector("*")
let display = document.querySelector("#lcd")
let teclado = document.querySelector(".teclado")
let numero = [0,0,0]
let idx = 1
let operador = ""

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
    calcular(operator,a,b){
        let resultado;
        operator == "NumpadAdd" ? resultado = (this.sumar(a,b)):"";
        operator == "NumpadSubtract" ? resultado = this.restar(a,b):"";
        operator == "NumpadMultiply" ? resultado = this.multiplicar(a,b):"";
        operator == "NumpadDivide" ? resultado = this.dividir(a,b):"";
        return resultado
    },
}


calculadora.addEventListener("keydown", e => { 
    e.key >= 0 && e.key <= 9 ? numero[idx] += e.key:""//numero.push(e.key) :"";
    numero[idx] = parseFloat(numero[idx])      //convierte el string en numero
    // console.log("Num 1: "+numero[1] + " -- Num 2: "+ numero[2])

    if(e.code == "NumpadAdd" || e.code == "NumpadSubtract" || e.code == "NumpadMultiply" || e.code == "NumpadDivide"){
        if (operador != e.code && idx ==2 && numero[2] != 0){
            console.log("--- %c Dentro del IF para mandar operacion al ALU -> idx = "+idx,"color:yellow"); 
            numero[0] = alu.calcular(operador, numero[1],numero[2])
            numero[1] = numero[0];
            numero[2] = 0;
            operador = e.code
        }else if (idx ==2 && numero[2] != 0){
            console.log("--- %c Dentro del IF para mandar operacion al ALU -> idx = "+idx, "color:orange"); 
            numero[0] = alu.calcular(operador, numero[1],numero[2])
            numero[1] = numero[0];
            numero[2] = 0;
        }else if(idx == 1){
            idx = 2;
            console.log("--- %c Dentro del IF idx -> idx = "+idx,"color:lightblue"); 
            operador = e.code
        }else{
            operador = e.code
        }
        
    }
    console.log("Numero 1: "+numero[1]+"  -- Numero 2: "+numero[2]+"  --%c Operador: "+operador,"color:yellow","  -- Buffer: "+numero[0]);
    if(e.code == "NumpadEnter"){                                        // NO ESTA HACIENDO EL CALCULO PORQUE ENTER NO DISPARA LA FUNCION MATEMATICA
        numero[0] = alu.calcular(operador, numero[1],numero[2])
        numero[1] = numero[0];
        numero[2] = 0;
        console.log("%c RESULTADO -> "+numero[1],"color:lightgreen")
    }

})


// NumpadDivide
// NumpadMultiply
// NumpadSubtract
// NumpadAdd
// NumpadEnter


// if (e.code == "NumpadAdd"){
    //     idx = 2
    //     numero[0] = alu.sumar(numero[1],numero[2])
    //     numero[1] = numero[0]
    //     numero[2] = 0
    //     console.log("Dentro de Sumar")
    // }
    // if (e.code == "NumpadSubtract"){
    //     idx = 2
    //     numero[0] = alu.restar(numero[1],numero[2])
    //     numero[1] = numero[0]
    //     numero[2] = 0
    //     console.log("Dentro de Restar")
    // }