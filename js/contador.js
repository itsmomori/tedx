const dataInicio = new Date("February 18, 2026 00:00:00").getTime();
    const dataEvento = new Date("April 14, 2026 00:00:00").getTime();

    const contador = setInterval(function () {

        const agora = new Date().getTime();
        const distancia = dataEvento - agora;

        // CONTADOR
        const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        document.getElementById("dias").innerHTML = dias;
        document.getElementById("horas").innerHTML = horas;
        document.getElementById("minutos").innerHTML = minutos;
        document.getElementById("segundos").innerHTML = segundos;

        // PROGRESSO
        const totalDuracao = dataEvento - dataInicio;
        const tempoPassado = agora - dataInicio;
        const percentagem = (tempoPassado / totalDuracao) * 100;

        document.getElementById("barraProgresso").style.width = percentagem + "%";

    }, 1000);