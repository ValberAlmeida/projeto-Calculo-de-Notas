function calcularMedia () {


    // cria referência ao s elementos da página
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1"); 
    var inNota2 = document.getElementById("inNota2");
    var inNota3 = document.getElementById("inNota3");
    var inNota4 = document.getElementById("inNota4");
    var outSituacao = document.getElementById("outSituacao");
    var outMedia = document.getElementById("outMedia");


    

    //obtém os conteúdos dos campos de edição da página

     var nome = inNome.value;
     var nota1 = Number(inNota1.value);
     var nota2 = Number(inNota2.value);
     var nota3 = Number(inNota3.value);
     var nota4 = Number(inNota4.value);
    
    //calculo da média das notas

   

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

        // altera o conteudo do elemento , vindo um texto
    outMedia.textContent = "Sua nota final foi : " + media.toFixed(1);

    //cria condição
    if (media >= 6) {

        outSituacao.textContent = "Excelente " + nome + "! Você foi aprovado (a) " ;
        outSituacao.style.color = "blue";

    }
    else {

        outSituacao.textContent = "Não foi dessa vez " + nome + " Você foi reprovado (a)";
        outSituacao.style.color = "red";

    }


}

var btResultado = document.getElementById("btResultado");
btResultado.addEventListener("click", calcularMedia);