var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){

    // OPÇÃO + ENXUTA
    event.target.parentNode.remove();

    /* OPÇÃO PASSO A PASSO
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
    paiDoAlvo.remove();
    */
});

/*
paciente.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado com um duplo click");
        this.remove();
    });
});
*/