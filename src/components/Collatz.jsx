import React from "react";

export default function Collatz(props) {
  const numero = parseInt(props.numero);
  const secuencia = [];

  if (!isNaN(numero) && numero > 0) {
    let num = numero;
    while (num !== 1) {
      secuencia.push(num);
      num = num % 2 === 0 ? num / 2 : 3 * num + 1;
    }
    secuencia.push(1);
  }

  return (
    <div>
      <h1>Conjetura de Collatz</h1>
      <h2>Número: {props.numero}</h2>
      <ul>
        {secuencia.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
