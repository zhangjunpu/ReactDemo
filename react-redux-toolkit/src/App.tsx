import { Provider } from "react-redux";
import About from "./pages/about";
import Home from "./pages/home";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
        <About />
      </div>
    </Provider>
  );
}

export default App;
