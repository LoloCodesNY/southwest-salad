import "./App.css";
import News from "./Components/News.js";
import History from "./Components/History";
import Tweets from "./Components/Tweets";
import Salad from "./Components/Salad";
import Disappearance from "./Components/Disappearance";
import ComingBack from "./Components/ComingBack";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bring Back the Southwest Salad</h1>
        <div>
          <Salad />
          <History />
          <Disappearance />
          <ComingBack />
          <News />
          <Tweets />
        </div>
      </header>
    </div>
  );
}

export default App;
