/**
 * <div id="parent">
 *
 *  <div id="child">
 *   <h1> i am h1 tag </h1>
 *   <h2> i am h2 tag </h1>
 * </div>
 *
 * <div id="child2">
 *   <h1> i am h1 tag </h1>
 *   <h2> i am h2 tag </h1>
 * <div>
 *
 * </div>
 *
 */

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
