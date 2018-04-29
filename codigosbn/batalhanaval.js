// Gerar um valor inteiro aleatório entre 1 e 5. Uma vez que o nosso navio vai ter no maximo 3 partes e se o colocassemos no 6º ou 7º quadrado não caberia.

var posicaoAleatoria = 1 + Math.floor(Math.random() * 5);//A posição do primeiro ponto do navio é aleatoria

//Começa-se por definir as variaveis relativas as posições dos quadrados do navio
var parte1 = posicaoAleatoria;//Colocação da primeira parte do navio de modo aleatorio
var parte2 = parte1+1;//Aumento de uma parte do navio, tendo em conta a posição da anterior
var parte3 = parte2 +1;//Aumento de uma parte do navio, tendo em conta a posição anterior

var jogada;//Defenição da variavel jogada 
var atingidas = 0;//Como o jogo ainda não começou o utilizador ainda não foi atingido
var totalJogadas = 0;//Como o jogo ainda não começou o utilizador ainda não jogou

var foiAfundado = false;//Define-se a variavél foiAfundado, e o respetivo valor desta no momento do inicio do jogo

//Inicia-se o ciclo while visto que foiAfundado é falsa no inicio do jogo, e sempre que isto ocorrer volta a iniciar-se o ciclo
while (foiAfundado == false) {

   jogada = prompt("Podes jogar - Escolhe um numero entre 1 e 7:"); //O servidor pede ao jogador para escolher um numero entre 1 e 7

   if (jogada < 1 || jogada > 7) {
	//Caso esse numero seja maior que 7 ou menor que 1, surgirá um alerta a avisar o jogador de que o numero que escolheu não se enquadra

      alert("Jogada inválida. Tenta de novo!");
	
   }else if(jogada %1!== 0){ //Assegura que o numero é inteiro, e deste modo não tem casas decimais 
   
		alert("Jogada inválida. Tente de novo");
		
   } else {

      totalJogadas = totalJogadas + 1;

      if (jogada == parte1 || jogada == parte2 || jogada == parte3) {

         alert("Acertaste em mais uma parte!");

         atingidas = atingidas +1;

         if (atingidas == 3) {

            foiAfundado = true;

            alert("Navio totalmente afundado!");
		//Quando atingimos os tres quadrados onde se encontra o navio, a condição foiAfundado é verdadeira, e surge deste modo um aviso a dizer que o navio foi totalmente afundado

         }

      } else {

         alert("Falhaste...");

      }

   }

}

var estatistica = "Foi preciso um total de " + totalJogadas + " jogadas para afundar o navio, " + 
                          "o que quer dizer que a tua pontaria foi de " + (3/totalJogadas);

alert(estatistica);

