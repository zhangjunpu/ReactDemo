import { Provider } from "react-redux";
import Recommend from "./pages/recommend";
import Player from "./pages/player";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Recommend />
        <Player />
      </div>
    </Provider>
  );
}

export default App;
