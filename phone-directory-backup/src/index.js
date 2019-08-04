import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./components/App";
import PhoneDirectory from "./components/PhoneDirectory";
import AddSubscriber from "./components/AddSubscriber";
import EditSubscriber from "./components/EditSubscriber";

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={PhoneDirectory} />
      <Route path="/add" component={AddSubscriber} />
      <Route path="/edit" component={EditSubscriber} />
    </App>
  </BrowserRouter>,
  document.querySelector("#root")
);
