import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Bucket from "./Bucket";

ReactDOM.render(<Bucket />, document.getElementById("root"));
registerServiceWorker();
