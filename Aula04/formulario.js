let proximoId = 1


function adicionarLinha(){
    const nome =document.getElementById("nome").value;
    const idade =document.getElementById("idade").value;
    const demissão =document.getElementById("demissão").value;
    const admissão =document.getElementById("admissão").value;


    if(nome === '' || idade === '' || demissão === '' || admissão === ''){
        alert("preencha os valores do formulario")
    }
    const tabela = document.getElementById("tabelaDados").getElementsByTagName('tbody')[0];

    const novaLinha = tabela.insertRow;

    const celId = novaLinha.insertCell(0);
    const celNome = novaLinha.insertCell(1);
    const celIdade = novaLinha.insertCell(2);
    const celAdmissao = novaLinha.insertCell(3); 
    const celDemissão = novaLinha.insertCell(4);

    celId.innerHTML = proximoId;
    celNome.innerHTML = Nome;
    celIdade.innerHTML = Idade;
    celAdmissao.innerHTML = Admissao;
    celDemissão.innerHTML = Demissão;

    proximoId++

    document.getElementById("linhaForm").reset();
}