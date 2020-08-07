var pacientes = document.querySelectorAll(".paciente");

for (i = 0; i < pacientes.length; i++) {
       var paciente = pacientes[i];

       var tdPeso = paciente.querySelector(".info-peso");
       var peso = tdPeso.textContent;

       var tdAltura = paciente.querySelector(".info-altura");
       var altura = tdAltura.textContent;

       var tdIMC = paciente.querySelector(".info-imc");

       var pesoEhValido = true;
       var alturaEhValida = true;

       if (peso <= 0 || peso >= 500) {
              var msg = tdPeso.textContent = "Peso inválido!";
              tdIMC.textContent = "ERRO"
              pesoEhValido = false;
              console.log(msg);
              tdIMC.classList.add("valor-invalido");
              tdPeso.classList.add("valor-invalido");
       }

       if (altura <= 0 || altura >= 3) {
              var msg = tdAltura.textContent = "Altura inválida!";
              tdIMC.textContent = "ERRO"
              alturaEhValida = false;
              console.log(msg);
              tdIMC.classList.add("valor-invalido");
              tdAltura.classList.add("valor-invalido");
       }

       if (pesoEhValido && alturaEhValida) {
              var imc = calculaIMC(peso, altura);
              tdIMC.textContent = imc;
       }
}

function calculaIMC(peso, altura) {
       var imc = 0;
       imc = peso / (altura * altura);
       return imc.toFixed(2);
}
