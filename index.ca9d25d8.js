function e(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=Array(r);n<r;n++)t[n]=e[n];return t}function r(r){return function(r){if(Array.isArray(r))return e(r)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(r,n){if(r){if("string"==typeof r)return e(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);if("Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return e(r,n)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var n=r([,,,,]).map(function(){return[,,,,].fill(0)}),t=0,o=!1,a=document.querySelectorAll(".field-cell"),i=["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"],c={messageStart:document.getElementById("message-start"),messageLose:document.getElementById("message-lose"),messageWin:document.getElementById("message-win")},s=document.getElementById("start-button");s.addEventListener("click",function(){(function(){t=0,document.querySelector(".game-score").innerText=t,n=r([,,,,]).map(function(){return[,,,,].fill(0)});for(var e=0;e<4;e++)for(var o=0;o<4;o++)0===n[e][o]&&(c.messageLose.classList.add("hidden"),c.messageWin.classList.add("hidden"))})(),s.classList+=" restart",s.innerText="Restart",s.style="border: 2px solid red; color: #776e65; outline: none;",c.messageStart.classList.add("hidden"),v(n),v(n),h(n,a)}),document.addEventListener("keyup",function(e){if(i.includes(e.key)&&!o){var r=JSON.parse(JSON.stringify(n));switch(e.key){case"ArrowLeft":(function(){for(var e=0;e<4;e++)n[e]=l(n[e])})(),y(),g();break;case"ArrowRight":(function(){for(var e=0;e<4;e++)n[e].reverse(),n[e]=l(n[e]),n[e].reverse()})(),y(),g();break;case"ArrowUp":(function(){for(var e=m(d(n),4),r=0;r<4;r++)e[r]=l(e[r]);for(var t=m(d(e),4),o=0;o<4;o++)n[o]=t[o]})(),y(),g();break;case"ArrowDown":(function(){for(var e=m(d(n),4),r=0;r<4;r++)e[r].reverse(),e[r]=l(e[r]),e[r].reverse();for(var t=m(d(e),4),o=0;o<4;o++)n[o]=t[o]})(),y(),g()}document.querySelector(".game-score").innerText=t,f(r)&&(v(n),h(n,a))}});var f=function(e){for(var r=0;r<4;r++)for(var t=0;t<4;t++)if(e[r][t]!==n[r][t])return!0;return!1};function u(e){return e.filter(function(e){return 0!==e})}function l(e){for(var r=u(e),n=0;n<r.length-1;n++)r[n]===r[n+1]&&(r[n]*=2,r[n+1]=0,t+=r[n]);for(r=u(r);r.length<4;)r.push(0);return r}function d(e){for(var r=[],n=0;n<e.length;n++)for(var t=0;t<e.length;t++)r.push(e[t][n]);return r}function m(e,r){for(var n=[],t=0;t<e.length;t+=r){var o=e.slice(t,t+r);n.push(o)}return n}function v(e){var r=[];if(e.forEach(function(e,n){e.forEach(function(e,t){0===e&&r.push({rowIndex:n,colIndex:t})})}),r.length>0){var n=Math.floor(Math.random()*r.length),t=r[n];e[t.rowIndex][t.colIndex]=.9>Math.random()?2:4}}function h(e,r){e.forEach(function(n,t){n.forEach(function(n,o){var a=r[t*e.length+o];n>0?(a.textContent=n,a.classList="field-cell"+" field-cell--".concat(n)):(a.textContent=null,a.classList="field-cell")})})}function g(){n.forEach(function(e){e.forEach(function(e){e>=2048&&(o=!0,c.messageWin.classList.remove("hidden"))})})}function y(){n.every(function(e){return e.every(function(e){return 0!==e})})&&!function(){for(var e=0;e<4;e++)for(var r=0;r<4;r++){var t=n[e][r];if(0!==t&&(e<3&&t===n[e+1][r]||r<3&&t===n[e][r+1]))return!0}return!1}()&&c.messageLose.classList.remove("hidden")}
//# sourceMappingURL=index.ca9d25d8.js.map
