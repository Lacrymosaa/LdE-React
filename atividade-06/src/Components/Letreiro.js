import React from 'react';
function Letreiro () {
    const [texto, setTexto] = React.useState("");

    React.useEffect(() => {
      const mensagem = "Bem-vindo(a) ao relógio e letreiro usando react!";
      let contador = 0;

      const intervalo = setInterval(() => {
        setTexto(mensagem.substring(0, contador));
        contador++;
        if (contador > mensagem.length) {
          clearInterval(intervalo);
        }
      }, 200);

      return () => clearInterval(intervalo);
    }, []);

    return <h1>{texto}</h1>;
  };
export default Letreiro;

