var botaoAddPaciente = document.querySelector("#adicionar-paciente");

botaoAddPaciente.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-paciente");
  // Extraindo informações do Paciente do Form
  var paciente = obtemPacienteDoFormulario(form);

  var erros = validaPaciente(paciente);
  console.log(erros);

  if (erros.length > 0) {
    exibeMendagemDeErro(erros);
    if (erros.length == 0) {
      form.reset();
    }
    return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();

  limpaMsgErro();
});

function adicionaPacienteNaTabela(paciente){
  var trPaciente = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(trPaciente);
}

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaIMC(form.peso.value, form.altura.value),
  };
  return paciente;
}

function montaTr(paciente) {
  var trPaciente = document.createElement("tr");
  trPaciente.classList.add("paciente");

  // Estar 3 linhas abaixo foram substituidas por 1 linha usando a função "montarTd()"
  //var tdNome = document.createElement("td");
  //tdNome.classList.add("info-nome");
  //tdNome.textContent = paciente.nome;

  trPaciente.appendChild(montarTd(paciente.nome, "info-nome"));
  trPaciente.appendChild(montarTd(paciente.peso, "info-peso"));
  trPaciente.appendChild(montarTd(paciente.altura, "info-altura"));
  trPaciente.appendChild(montarTd(paciente.gordura, "info-gordura"));
  trPaciente.appendChild(montarTd(paciente.imc, "info-imc"));

  return trPaciente;
}

function montarTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  
  var erros = [];

  if (paciente.nome.length == 0) erros.push("Nome não pode ficar em branco");
  if (paciente.peso.length == 0) erros.push("Peso não pode ficar em branco");
  if (paciente.altura.length == 0) erros.push("Altura não pode ficar em branco");
  if (paciente.gordura.length == 0) erros.push("% Gordura não pode ficar em branco");

  if (!validaPeso(paciente.peso)) erros.push(" Peso inválido");
  if (!validaAltura(paciente.altura)) erros.push(" Altura inválida");

  return erros;
}

function exibeMendagemDeErro(erros) {
  var ul = document.querySelector("#mensagens-erros");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

function limpaMsgErro() {
  var mensagensErro = document.querySelector("#mensagens-erros");
  mensagensErro.innerHTML = "";
}
