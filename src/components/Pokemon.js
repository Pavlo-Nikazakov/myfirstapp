import React from "react";

export default function Pokemon(props) {
  return (
    <div>
        <h2>Pokemon name: {props.info.name}</h2>
        <p>Weight: {props.info.weight} kg</p>
        <p>Awesome: {props.info.awesome ? "YES!" : "nope, not really"}</p>
        <p>Terrifying: {props.info.terrifying ? "Very" : "nah, lovable"}</p>
        <p>Abilities: ({props.info.abilities.length})</p>
      <ul>
        {props.info.abilities.map(ability => {
          return <li>{ability}</li>;
        })}
      </ul>
    </div>  );
}