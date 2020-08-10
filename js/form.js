var botaoAddPaciente = document.querySelector("#adicionar-paciente");

botaoAddPaciente.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-paciente");
    // Extraindo informações do Paciente do Form
    var paciente = obtemPacienteDoFormulario(form);

    // Cria a TR e a TD do Paciente
    var trPaciente = montaTr(paciente);
    
    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        var seletor = document.querySelector("#mensagem-erro");
        seletor.textContent = erros;
        form.reset();
        erros = "";
        return;
    }

    // Adicionando o Paciente na Tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(trPaciente);

    form.reset();

   
});

function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){

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

function montarTd(dado, classe){

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if(!validaPeso(paciente.peso)) erros.push(" Peso inválido");
    if(!validaAltura(paciente.altura)) erros.push(" Altura inválida");

    return erros;
}