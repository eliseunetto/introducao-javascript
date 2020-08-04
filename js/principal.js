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

        var imc = peso / (altura * altura);

       tdIMC.textContent = imc;