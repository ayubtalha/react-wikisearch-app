import React from "react";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

export default () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <Search />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
