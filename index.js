
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
    calcular(operator,numero){
        operator == "NumpadAdd" ? numero[0] = this.sumar(numero[1],numero[2]):"";
        operator == "NumpadSubtract" ? numero[0] = this.restar(numero[1],numero[2]):"";
        operator == "NumpadMultiply" ? numero[0] = this.multiplicar(numero[1],numero[2]):"";
        operator == "NumpadDivide" ? numero[0] = this.dividir(numero[1],numero[2]):"";
        console.log("%c RESULTADO -> "+numero[0],"color:lightgreen")
        this.mostrar(numero[0])
        numero[1] = numero[0];
        numero[2] = 0;
        return numero
    },
    mostrar(a){
        display.textContent = a; 
    },
}

//-------- Evento cuando se presiona el teclado 
calculadora.addEventListener("keydown", e => { 
    if(e.key >= 0 && e.key <= 9){
        numero[idx] += e.key
        numero[idx] = parseFloat(numero[idx])
        alu.mostrar(numero[idx]);
    }
    
//-------- Logica de botones - teclado
    console.log("Numero 1: "+numero[1]+"  -- Numero 2: "+numero[2]+"  --%c Operador: "+e.code,"color:yellow","  -- Buffer: "+numero[0]);
    if(e.code == "NumpadAdd" || e.code == "NumpadSubtract" || e.code == "NumpadMultiply" || e.code == "NumpadDivide" || e.code == "NumpadEnter"){
        if (operador != e.code && idx == 2 && numero[2] != 0 && e.code != "NumpadEnter"){ 
            numero = alu.calcular(operador, numero)
            operador = e.code     
        }else if ((idx == 2 && numero[2] != 0) || e.code == "NumpadEnter"){
            numero = alu.calcular(operador, numero)
        }else if(idx == 1){
            operador = e.code
            idx = 2;
        }else{
            operador = e.code
        }
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