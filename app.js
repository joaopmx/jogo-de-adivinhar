var numeroSecreto = parseInt(Math.random() * 11);
var tentativa = 1;

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);
    console.log(chute);

    if (tentativa <= 3) {
        if (chute == numeroSecreto) {
            elementoResultado.innerHTML = "Parabéns, você acertou!";
          } else if (chute > 10 || chute < 0) {
            elementoResultado.innerHTML = "Você deve digitar um número entre 0 a 10";
          } else {
            elementoResultado.innerHTML =
              "Você errou!";
          }
            tentativa = tentativa + 1;
    } else {
        elementoResultado.innerHTML = "Você execedeu o número de tentativas, o número correto era " +  numeroSecreto;
    }
}