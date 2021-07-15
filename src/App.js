import "./App.css";
import arrayEmoji from "./services/getEmoji";
import ContainerEmoji from "./Components/ContainerEmoji";

function App() {
  return (
    <div>
      <div className="container-topo">
        <h1>😸 Emoji Search 😽</h1>
        <input className="input"></input>
      </div>

      {arrayEmoji.map((i) => {
        return <ContainerEmoji title={i.title} symbol={i.symbol} />;
      })}
    </div>
  );
}

export default App;
