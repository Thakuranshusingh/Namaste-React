import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am H1 tag"),
    React.createElement("h2", {}, "i am H2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am H1 tag"),
    React.createElement("h2", {}, "i am H2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

console.log(heading); // Return an object and not HTML
