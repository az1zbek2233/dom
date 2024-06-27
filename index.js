let son = Math.floor(Math.random() * 100);

let body = document.querySelector("body");

let h1 = document.createElement("h1");

h1.textContent = son;

body.appendChild(h1);