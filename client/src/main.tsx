import ReactDOM from "react-dom/client";
import App from "./app/layout/App.tsx";
import "./index.css";

import "semantic-ui-css/semantic.min.css";
import { StoreContext, store } from "./app/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
