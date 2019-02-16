import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/";
import registerServiceWorker from "./services/registerServiceWorker";
import store from "./store";

import "./styles/index.css";

const render = () => ReactDOM.render(<App />, document.getElementById("root"));

render();
store.subscribe(render);
registerServiceWorker();
