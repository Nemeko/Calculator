
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
        operator == "+" ? numero[0] = this.sumar(numero[1],numero[2]):"";
        operator == "-" ? numero[0] = this.restar(numero[1],numero[2]):"";
        operator == "/" ? numero[0] = this.dividir(numero[1],numero[2]):"";
        operator == "*" ? numero[0] = this.multiplicar(numero[1],numero[2]):"";
        console.log("%c -- RESULTADO -> "+numero[0],"color:lightgreen")
        this.mostrar(numero[0])
        numero[1] = numero[0];
        numero[2] = 0;
        return numero
    },
    detecTecla(tecla){
        //-------- Logica de numeros
        console.log("%cTecla: "+tecla,"color:yellow")
        if(tecla >= 0 && tecla <= 9){
            numero[idx] += tecla
            numero[idx] = parseFloat(numero[idx])
            this.mostrar(numero[idx]);
        }    
        //-------- Logica de botones
        if(tecla == "=" || tecla == "Enter" || tecla == "+" || tecla == "-" || tecla == "*" || tecla == "/"){ 
            if (operador != tecla && idx == 2 && numero[2] != 0 && tecla != "Enter"){ 
                numero = this.calcular(operador, numero)
                operador = tecla     
            }else if ((idx == 2 && numero[2] != 0) || tecla == "Enter"){
                numero = this.calcular(operador, numero)
            }else if(idx == 1){
                operador = tecla
                idx = 2;
            }else{
                operador = tecla
            }
        }
        console.log("----- %cNumero 1: "+numero[1]+"  -- Numero 2: "+numero[2],"color:lightblue","  -- Buffer: "+numero[0]); 
    },
    mostrar(num){
        display.textContent = num; 
    },
}

// ============ Liteners ===========
calculadora.addEventListener("keydown", e => {
    e.preventDefault()
    alu.detecTecla(e.key)
});

teclado.addEventListener("click", e => {
    e.preventDefault()
    alu.detecTecla(e.target.value)
});

    