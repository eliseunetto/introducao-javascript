// console.log("Fui carregado de um arquivo externo");
 
 var titulo = document.querySelector(".titulo");

        // console.log(document.querySelector("h1").textContent);
        console.log(titulo.textContent);
        titulo.textContent = "Aparecida Nutricionista";

        var paciente = document.querySelector("#primeiro-paciente");

        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;

        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;

        var tdIMC = paciente.querySelector(".info-imc");

        var pesoEhValido = true;
        var alturaEhValida = true;

       // *** MODIFICANDO os valores para TESTE (validações)
        peso = 70; // modificando o valor
        altura = 1.6; // modificando o valor 

        if(peso <= 0 || peso >= 500){
              var msg = tdPeso.textContent = "Peso inválido!"; 
              pesoEhValido = false;
              console.log(msg); 
        }

        if(altura <= 0 || altura >= 3){
              var msg = tdAltura.textContent = "Altura inválida!"; 
              alturaEhValida = false;
              console.log(msg);
        }

        if(pesoEhValido && alturaEhValida){
              var imc = peso / (altura * altura);
              tdIMC.textContent = imc;
        }
        