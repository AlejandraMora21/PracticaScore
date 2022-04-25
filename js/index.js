var incremento= 1;
var score = 1;


function IncrementarValor(){

  if(incremento > 20){
    ReproducirAudio();
    ResetearValor();
    IncrementarScore(score++);
  }else{
    MostrarDisplay(incremento);
    incremento++;
  }
}

function MostrarDisplay(valor){
  document.getElementById("counter__label").innerHTML = valor;
}

function IncrementarScore(valor){
  document.getElementById("idscore").innerHTML = valor;
}

function ResetearValor(){
  incremento = 1;
}
function ReproducirAudio(){
  var audioElement = new Audio('mario-coin.mp3');
  audioElement.play();

}
