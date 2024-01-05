
let calculadora = document.querySelector("*")
let display = document.querySelector("#lcd")
let teclado = document.querySelector(".teclado")
let numero = ["","",""]
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
    contieneDecimales(numero){
        let decimalesRetorno = [];
        numero = numero.map((elemento, indice) => {
            elemento = elemento.toString()
            // console.log("Indice: ", indice)
            // console.log("Numero: ", elemento)
            // console.log("Contiene Decimales (numero % 1) -> ", elemento % 1)
            // console.log("Length: ", elemento.length)
            // console.log("indexOf: ", elemento.indexOf("."))
            elemento % 1 != 0 ? decimalesRetorno[indice] = (elemento.length-1) - elemento.indexOf(".") : decimalesRetorno[indice] = 1;            
        })
        //console.table(decimalesRetorno)
        if(decimalesRetorno[1] > decimalesRetorno[2]){
            return decimalesRetorno[1]
         }
         return decimalesRetorno[2];
    },
    calcular(operator,numero){  
        // control para numeros pequeños
        let multiplicador = 10
        let decimales = this.contieneDecimales(numero)
        numero = numero.map(numero=>parseFloat(numero))
        multiplicador **= decimales
        numero = numero.map(elemento => elemento*multiplicador);
        
        // operaciones
        operator == "+" ? numero[0] = this.sumar(numero[1],numero[2]):"";
        operator == "-" ? numero[0] = this.restar(numero[1],numero[2]):"";
        operator == "/" ? numero[0] = this.dividir(numero[1],numero[2]):"";
        operator == "*" ? numero[0] = this.multiplicar(numero[1],numero[2]):"";
        numero[0] /= multiplicador
        console.log("%c -- RESULTADO -> "+numero[0],"color:lightgreen")
        this.mostrar(numero[0])
        numero[1] = numero[0];
        numero[2] = "";
        return numero
    },
    detecTecla(tecla){
        //-------- Logica de numeros
        console.log("%cTecla: "+tecla,"color:yellow")
        if(tecla >= 0 && tecla <= 9){
            numero[idx] += tecla
            let decimal = numero[idx].length
            if(numero[idx].indexOf(".") == -1){
                console.log("Convirtiendo a numero - 1er IF")
                //numero[idx] = parseFloat(numero[idx])
            }else if(numero[idx][decimal-1] != "0"){
                    console.log("Convirtiendo a numero")
                    //numero[idx] = parseFloat(numero[idx])
            }
            this.mostrar(numero[idx]);
        }
        //-------- Logica del "."
        if(tecla == "."){
            numero[idx] += "."
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

// ============ Listeners ===========
calculadora.addEventListener("keydown", e => {
    e.preventDefault()
    alu.detecTecla(e.key)
});

teclado.addEventListener("click", e => {
    e.preventDefault()
    alu.detecTecla(e.target.value)
});

    