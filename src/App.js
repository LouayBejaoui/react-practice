import { useState } from "react";
import "./styles.css";

export default function App() {
  const [fil, changeFil] = useState("");

  const list = [
    "banana",
    "apple",
    "kiwi",
    "orange",
    "mango",
    "peach",
    "grapes",
    "ananas",
    "strawbery"
  ];
  function store(event) {
    v = event.target.value;
    changeFil(v);
  }

  function chan(fruit) {
    return fruit.toLowerCase().includes(fil.toLowerCase());
  }

  const l2 = list.filter(chan);

  return (
    <div className="App">
      <span> search </span>
      <input id="search" onChange={store}></input>
      <dl>
        {l2.map((item) => (
          <li>{item}</li>
        ))}
      </dl>
    </div>
  );
}
