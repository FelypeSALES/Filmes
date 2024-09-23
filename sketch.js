let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("black");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(40, 647, 1990));
  textAlign(CENTER, CENTER);
  textSize(43);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Deadpool";
    } else {
      if (idade >= 1) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "O espetacular Homem Aranha";          
        } else{
         return "Até o último  Homem";
        }
      } else {
        if (gostaDeFantasia) {
          return "Interestelar";
        } else {
          return "Um lugar silencioso";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "Jurassic park";
    } else {
      return "Alice no pais das maravilhas";
    }
  }
}
