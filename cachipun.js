//Juego entre 2 personas: a vs b;
//Cada jugador puede elegir tres opciones: 1 ó 2 ó 3;
//1 gana a 2, pierde con 3 y empata con 1;
// 2 pierde con 1, gana  a 3 y empata con 2; 
// 3 gana a 1, pierde con 2 empata con 3;

//::::::DATOS INICIALES:::::
let jugador;
let i = 1;
let winner = 0;
let looser = 0;

//::::::EJECUCIÓN::::::::::
function cachipun(jugador){
    var numero = prompt("¿Cuantas veces quieres jugar conmigo?");
    numero = parseInt(numero);
    do{
        jugador = prompt("Escribe piedra papel o tijera");
        if(jugador === "piedra"){
            var compu = Math.floor(Math.random() * 2);
            if(compu === 0){
                alert("Haz elegido piedra y yo papel: Elige denuevo looser");
                looser++;
            }
            else if(compu > 1){
                alert("Haz elegido piedra y yo tijera: Exijo mi revancha");
                winner++;
            }
            else if(compu < 2){
                alert("Ambos sacamos piedra, luchemos otra vez");
            }
        }
        else if(jugador === "papel"){
            var compu = Math.floor(Math.random() * 2);
            if(compu === 0){
                alert("Haz elegido papel y yo papel: Empatamos ¡Luchemos de nuevo!");
            }
            else if(compu > 1){
                alert("Haz elegido papel y yo tijera: Eres un perdedor");
                looser++;
            }
            else if(compu < 2){
                alert("He sacado piedra y tu papel: Exijo mi revancha, ¡Ahora!");
                winner++;
            }
        }
        else if (jugador === "tijera"){
            var compu = Math.floor(Math.random() * 2);
            if(compu === 0){
                alert("Es un duelo de Tijeras, hemos empatado");
            }
            else if(compu > 1){
                alert("Tu tijera contra mi piedra: Es tu derrota");
                looser++;
            }
            else if(compu < 2){
                alert("Mi papel contra tu tijera: He sido derrotado ¡Luchemos denuevo!");
                winner++;
            }
        }
        else {
            alert("Escribe bien pelmase! 'piedra', 'papel' o 'tijera'.")
        }
        i++;
    }while(i <= numero );
    if(winner > looser){
        document.write("Felicitaciones, eres el ganador (al menos hoy).")
    }
    else if(winner < looser){
        document.write("Jajajaja Looooooser")
    }
    else if(winner === looser) {
        document.write("Queeeee!!! es un empate")
    }
}

cachipun(jugador);