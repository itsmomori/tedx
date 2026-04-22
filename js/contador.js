const dataInicio = new Date("February 18, 2026 00:00:00").getTime();
    const dataEvento = new Date("April 22, 2026 00:00:00").getTime();

    const contador = setInterval(function () {

        const agora = new Date().getTime();
        const distancia = dataEvento - agora;

        // CONTADOR
        document.getElementById("dias").innerHTML = 0;
        document.getElementById("horas").innerHTML = 0;
        document.getElementById("minutos").innerHTML = 0;
        document.getElementById("segundos").innerHTML = 0;

        // PROGRESSO
        const totalDuracao = dataEvento - dataInicio;
        const tempoPassado = agora - dataInicio;
        const percentagem = (tempoPassado / totalDuracao) * 100;

        document.getElementById("barraProgresso").style.width = percentagem + "%";

    }, 1000);