/*
//document.body.innerHTML="<h1>hello world</h1>";

const h1 = document.createElement("h1");
h1.innerHTML="hello world";
//h1.style.color="red";

document.body.appendChild(h1);
//document.body.prepend(h1);
*/
document.querySelector("#app").innerHTML = `
<p> Hello1</p>
<p> Hello2</p>
<p> Hello3</p>
`;
console.log(document.querySelector("p"));
