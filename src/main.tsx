import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import ThemeContext from "./Context/ThemeContext";
import App from "./App";
import { store } from "./Store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeContext>
        <App />
      </ThemeContext>
    </Provider>
  </BrowserRouter>
);
