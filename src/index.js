// import _ from "lodash";
// import printMe from "./print";
// import { cube } from "./math";
// import "./style.css";
// // import Icon from "./icon.png";
// import Data from "./data.xml";
// if (process.env.NODE_ENV !== "production") {
//   console.log("like we are in development mode");
// }
// function component() {
//   const element = document.createElement("div");
//   const btn = document.createElement("button");
//   // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   btn.innerHTML = "click me and check the console";
//   btn.onclick = printMe;
//   element.appendChild(btn);
//   element.classList.add("hello");
//   // var myicon = new Image();
//   // myicon.src = Icon;
//   // element.appendChild(myicon);
//   console.log(Data);
//   var preElement = document.createElement("pre");
//   preElement.innerHTML = [
//     "hello webpack",
//     "5cubed is equal to " + cube(5)
//   ].join("\n\n");
//   console.log(element + preElement);
//   return preElement;
// }
//
// document.body.appendChild(component());
//
// if (module.hot) {
//   module.hot.accept("./print.js", function() {
//     console.log("acc print me");
//     printMe();
//   });
// }
/**
 * @Author: yanni
 * @Description:
 * @Date: 23:43 2019/3/25
 * @Modified By:
 * @Params:
 */
// function getComponent() {
//   return import(/*webpackChunkName :'lodash'*/ "lodash")
//     .then(({ default: _ }) => {
//       const element = document.createElement("div");
//       element.innerHTML = _.join(["hello ", "webpack"], " ");
//       return element;
//     })
//     .catch(err => {
//       `error occurred while loading th component`;
//     });
// }
// getComponent().then(component => {
//   document.body.appendChild(component);
// });

import _ from "lodash";
function component() {
  const element = document.createElement("div");
  const button = document.createElement("button");
  const br = document.createElement("br");
  button.innerHTML = "click me and look console";
  element.innerHTML = _.join("hello", "wepack", " ");
  element.appendChild(br);
  element.appendChild(button);
  button.onclick = e =>
    import(/* webpackChunkName: "print" */ "./print").then(module => {
      const print = module.default;
      print();
      return element;
    });
}
document.body.appendChild(component());
