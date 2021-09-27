import "./styles.css";
import { useState } from "react";

export default function App() {
  const [meaning, setMeaning] = useState("");
  const emojiDictionary = {
    "🐒": "monkey",
    "🦍": "gorilla",
    "🐕": "dog",
    "🦊": "fox",
    "🐈": "cat",
    "🦁": "lion",
    "🦓": "zebra",
    "🐅": "tiger",
    "🐂": "ox",
    "🐄": "cow",
    "🐪": "camel"
  };

  const animalNames = Object.keys(emojiDictionary);

  const emojiSearchHandler = function (event) {
    const animalName = event.target.value.toLowerCase();
    const result = emojiDictionary[animalName];
    if (animalName === "") {
      setMeaning("Enter animal emoji from the list");
    } else {
      if (result === undefined) {
        setMeaning("Animal Emoji not Found");
      } else {
        setMeaning(result);
      }
    }
  };

  const emojiClickHandler = function (animal) {
    const result = emojiDictionary[animal.animal];
    setMeaning(result);
  };

  return (
    <div className="App">
      <h1>Welcome to World of Animal Emoji</h1>
      <input onChange={emojiSearchHandler} />
      <p className="meaning">{meaning}</p>
      <div className="animals">
        {animalNames.map((animal) => {
          return (
            <button key={animal} onClick={() => emojiClickHandler({ animal })}>
              {animal}
            </button>
          );
        })}
      </div>
    </div>
  );
}
