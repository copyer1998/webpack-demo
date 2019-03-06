// import _ from 'lodash';

import {cube} from "./math";


import './style.css';
// import Icon from '../tempfolder/icon.png';
// import Data from '../tempfolder/data.xml';

if (process.env.NODE_PROCESS_ENV != 'production') {
  console.log("looks like we are in development model");
}

function component() {

  var style = document.createElement("link");
  style.href = "https://www.baidu.com/favicon.ico";
  style.rel = "shortcut icon";
  style.type = "image/x-icon";
  document.getElementsByTagName("head").item(0).appendChild(style);

  var element = document.createElement('pre');
  element.innerHTML = [
    'hello webpack',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')


  /* var element = document.createElement('div');
   var btn = document.createElement('button');
   element.innerHTML = _.join(['hello', 'webpack'], ' ');
   btn.innerHTML = 'click me and check the console';
   btn.onclick = printMe;
   element.appendChild(btn);
   element.classList.add('hello');*/


  // var myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);
  // console.log(Data);
  return element;
}

// document.body.appendChild(component());
// let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);
if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('accepting the updated pringme module');
    // printMe();
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}
