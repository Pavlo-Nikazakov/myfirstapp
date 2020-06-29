import React from "react";

export default function Pokemon(props) {
  return (
    <div>
        <h2>Pokemon name: {props.data.name}</h2>
        <p>Weight: {props.data.weight} kg</p>
        <p>Awesome: {props.data.awesome ? "YES!" : "nope, not really"}</p>
        <p>Terrifying: {props.data.terrifying ? "Very" : "nah, lovable"}</p>
        <p>Abilities: ({props.data.abilities.length})</p>
      <ul>
        {props.data.abilities.map(ability => {
          return <li>{ability}</li>;
        })}
      </ul>
    </div>  );
}