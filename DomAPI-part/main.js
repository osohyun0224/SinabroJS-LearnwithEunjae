/* domapi (2)
//document.body.innerHTML="<h1>hello world</h1>";

const h1 = document.createElement("h1");
h1.innerHTML="hello world";
//h1.style.color="red";

document.body.appendChild(h1);
//document.body.prepend(h1);
*/

document.querySelector("#app").innerHTML = `
<button type="button" class="hello1"> Check the input</button>
<button type="button" class="hello2"> Hello2</button>
<button type="button" class="hello3"> Hello3</button>

<div>
  <input class="name" type="text" placeholder="Type your name:"/>
</div>

<div class="parent-of-button">
<button class="helloworld-button" type="button">
<span> Hello </span>
<span> World </span>
</button>
</div>

`;

document.querySelector("button").addEventListener("click", (event) => {
  const input = document.querySelector(".name");
  console.log(input.value);
  //console.log(event);
});

document.querySelector(".name").addEventListener("change", (event) => {
  //addEventListener("change" :값을 입력하고 거기서 벗어났을때 값이 바뀌었는지 보는 이벤트라서 바로 콘솔에 출력
  console.log(event.target.value);
});
//console.log(document.querySelector("button"));

//만약, 한 글자씩 확인하고 싶다면? > "document.querySelector(".name").addEventListener("input", (event) => { 으로!

document
  .querySelector(".helloworld-button")
  .addEventListener("click", (event) => {
    //만약 해당 이벤트가 실행되지 않기를 원한다면 > 
    event.stopPropagation(); // 해당 버튼을 클릭했을때 더 상위로 올라가지 않고 끝냄.
    console.log("event from button",event);
  });

document
  .querySelector(".parent-of-button")
  .addEventListener("click", (event) => {
    console.log("event from div", event);
  });

/*world라는 span 을 클릭했을때, 그 요소의 잡혀있는 리스너가 존재한다면 이를 실행시켜주고,
그게 아니라면, 해당 요소의 부모로 올라가서 부모에 잡혀있는 리스너가 존재한다면 실행시켜준다.
해당 부모로 올라가면서 이벤트를 실행하는 것을 이벤트 버블링이라고 한다.
*/

document.querySelector(".name").addEventListener("keyup", (event) => {
  console.log("input keyup", event);
}); 
//input keyup KeyboardEvent {isTrusted: true, key: 'a', code: 'KeyA', location: 0, ctrlKey: false, …} 콘솔에 출력

//단축키 처리 
document.body.addEventListener("keyup", (event)=> {
  console.log(event.key);
})