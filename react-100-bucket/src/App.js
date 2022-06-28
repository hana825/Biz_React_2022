import backgroundImage from "./images/animal-g2c5c6a0ac_1920.jpg";
import "./App.css";
import "./w3css.css";
import BucketMain from "./components/BucketMain";

// css style을 js코드로 구현
const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  backgroundSize: "cover",
};

function App() {
  return (
    <div className="App">
      <header className="App-header" style={backgroundStyle}></header>
      <section className="w3-container w3-margin">
        <BucketMain />
      </section>
    </div>
  );
}

export default App;
