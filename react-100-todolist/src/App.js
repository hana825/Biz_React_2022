import "./App.css";
import "./w3css.css";
import TodoMain from "./components/TodoMain";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <section className="w3-container w3-margin">
        <TodoMain />
      </section>
    </div>
  );
}

export default App;
