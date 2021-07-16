import "./App.css";
import arrayEmoji from "./services/getEmoji";
import ContainerEmoji from "./Components/ContainerEmoji";
import { useState } from "react";

function App() {
  const [emoji, setEmoji] = useState("");
  return (
    <div>
      <div className="container-topo">
        <h1>😸 Emoji Search 😽</h1>
        <input className="input" onChange={(e) => setEmoji(e.target.value)} />
      </div>

      {arrayEmoji
        .filter((item) =>
          item.keywords.toLowerCase().includes(emoji.toLowerCase())
        )
        .map((i) => {
          return <ContainerEmoji title={i.title} symbol={i.symbol} />;
        })}
    </div>
  );
}

export default App;
