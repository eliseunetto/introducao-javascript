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

        var imc = peso / (altura * altura);

        console.log(paciente); // tr
        console.log(tdPeso); // td que tem o peso
        console.log(peso); // conteúdo(valor) da td
        console.log(imc); // resultado do IMC