
let resultado = partidas(30, 10);
let nivelJogador = nivel()

console.log("O Heroi tem o saldo de" + " "  + resultado + " " + "e está no nível de" + " " + nivelJogador  );

function partidas(vitorias, derrotas) {
    return vitorias - derrotas;

    }
      function nivel(){
        if(resultado < 10){
            return ("FERRO");
        }else if(resultado >= 11 && resultado <= 20){
            return ("BRONZE");
        }else if(resultado >= 21 && resultado <= 50){
            return ("PRATA");
        }else if(resultado >= 51 && resultado <= 80){
            return ("OURO");
        }else if(resultado >= 81 && resultado <= 90){
            console.log("DIAMANTE");
        }else if(resultado >= 91 && resultado <= 100){
            return ("LENDÁRIO");
         }else{
            return ("IMORTAL");
         }
      }
    
